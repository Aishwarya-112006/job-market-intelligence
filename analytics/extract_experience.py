import duckdb
import pandas as pd
import re


# -----------------------------
# 1. Load jobs from DuckDB
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
# 2. Extract experience
# -----------------------------

def extract_experience(text):

    if not isinstance(text, str):
        return None

    # Look for patterns such as:
    # 2 years
    # 3+ years
    # 5 yrs
    # 1 year of experience

    pattern = r"(\d+)\s*\+?\s*(?:years?|yrs?)"

    matches = re.findall(
        pattern,
        text,
        flags=re.IGNORECASE
    )

    if not matches:
        return None

    # Convert detected values to integers
    years = [int(value) for value in matches]

    # Use the minimum mentioned experience
    return min(years)


df["experience_years"] = df["description"].apply(
    extract_experience
)


# -----------------------------
# 3. Display results
# -----------------------------

print("Total jobs:", len(df))

print(
    "Jobs with detected experience:",
    df["experience_years"].notna().sum()
)

print(
    "Jobs without detected experience:",
    df["experience_years"].isna().sum()
)


print("\nSample experience results:\n")

sample = df[
    df["experience_years"].notna()
][["title", "experience_years"]].head(10)

print(
    sample.to_string(index=False)
)
# -----------------------------
# 4. Save experience data
# -----------------------------

output_file = "data/processed/jobs_with_experience.csv"

df.to_csv(
    output_file,
    index=False
)

print("\nExperience data saved to:", output_file)
# -----------------------------
# 5. Analyze experience levels
# -----------------------------

def classify_experience(years):

    if pd.isna(years):
        return "Not specified"

    if years <= 2:
        return "Entry Level (0-2 years)"

    elif years <= 5:
        return "Mid Level (3-5 years)"

    else:
        return "Senior Level (6+ years)"


df["experience_level"] = df["experience_years"].apply(
    classify_experience
)


experience_counts = (
    df["experience_level"]
    .value_counts()
)


print("\nExperience Level Distribution:\n")
print(experience_counts)
# Save experience-level analysis
experience_output = pd.DataFrame(
    {
        "experience_level": experience_counts.index,
        "job_count": experience_counts.values
    }
)

experience_output.to_csv(
    "data/processed/experience_levels.csv",
    index=False
)

print(
    "\nExperience analysis saved to: "
    "data/processed/experience_levels.csv"
)
