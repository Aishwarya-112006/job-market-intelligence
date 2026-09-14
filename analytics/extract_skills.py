import json
import duckdb
import re
import spacy
from spacy.matcher import PhraseMatcher


# -----------------------------
# 1. Load skill dictionary
# -----------------------------

with open("config/skills.json", "r", encoding="utf-8") as file:
    skills = json.load(file)


skill_list = []

for category, category_skills in skills.items():
    skill_list.extend(category_skills)


# Remove duplicates
skill_list = list(set(skill_list))


# -----------------------------
# 2. Create spaCy matcher
# -----------------------------

nlp = spacy.blank("en")

matcher = PhraseMatcher(
    nlp.vocab,
    attr="LOWER"
)


patterns = [
    nlp.make_doc(skill)
    for skill in skill_list
]

matcher.add("SKILLS", patterns)


# -----------------------------
# 3. Load jobs from DuckDB
# -----------------------------

con = duckdb.connect("job_market_pipeline.duckdb")

df = con.sql(
    """
    SELECT slug, title, description
    FROM job_market_data.jobs
    """
).df()

con.close()


# -----------------------------
# 4. Clean description
# -----------------------------

def clean_text(text):

    if not isinstance(text, str):
        return ""

    # Remove HTML tags
    text = re.sub(r"<[^>]+>", " ", text)

    # Replace multiple spaces
    text = re.sub(r"\s+", " ", text)

    return text.strip()


# -----------------------------
# 5. Extract skills
# -----------------------------

def extract_skills(text):

    text = clean_text(text)

    if not text:
        return []

    doc = nlp(text)

    matches = matcher(doc)

    found_skills = set()

    for match_id, start, end in matches:

        skill = doc[start:end].text

        found_skills.add(skill.lower())

    return sorted(found_skills)


df["skills"] = df["description"].apply(extract_skills)
# Save extracted skills
output_file = "data/processed/jobs_with_skills.csv"

df.to_csv(output_file, index=False)

print("\nSkills extracted successfully!")
print("Saved to:", output_file)


# -----------------------------
# 6. Display results
# -----------------------------

print("Total jobs:", len(df))

print("\nSkill extraction results:")

jobs_with_skills = (df["skills"].apply(len) > 0).sum()

print("Jobs with detected skills:", jobs_with_skills)
print("Jobs without detected skills:", len(df) - jobs_with_skills)

print("\nSample jobs with detected skills:")

count = 0

for _, row in df.iterrows():

    if len(row["skills"]) > 0:

        print("\nJob:", row["title"])
        print("Skills:", row["skills"])

        count += 1

        if count == 10:
            break