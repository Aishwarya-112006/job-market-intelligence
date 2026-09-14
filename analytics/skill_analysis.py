import pandas as pd
from collections import Counter
import ast


# Load extracted skills data
df = pd.read_csv(
    "data/processed/jobs_with_skills.csv"
)


# Convert skills string into Python list
df["skills"] = df["skills"].apply(
    lambda x: ast.literal_eval(x)
    if isinstance(x, str)
    else []
)


# Count skills
skill_counter = Counter()

for skills in df["skills"]:
    skill_counter.update(skills)


# Get top 20 skills
top_skills = skill_counter.most_common(20)


# Create DataFrame
skills_df = pd.DataFrame(
    top_skills,
    columns=["skill", "job_count"]
)


# Save results
output_file = "data/processed/top_skills.csv"

skills_df.to_csv(
    output_file,
    index=False
)


# Display results
print("\nTop 20 Skills:\n")
print(skills_df.to_string(index=False))

print("\nSkill analysis saved to:", output_file)