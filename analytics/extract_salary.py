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
# 2. Extract salary
# -----------------------------

def extract_salary(text):

    if not isinstance(text, str):
        return None

    # Salary ranges such as:
    # 50000 - 70000
    # 50,000 - 70,000
    # $50,000 - $70,000
    # €50,000 - €70,000

    pattern = r"""
        (?:[$€£₹]\s*)?
        (\d{2,3}(?:,\d{3})+|\d{4,6})
        \s*
        (?:-|–|—|to)
        \s*
        (?:[$€£₹]\s*)?
        (\d{2,3}(?:,\d{3})+|\d{4,6})
    """

    match = re.search(
        pattern,
        text,
        flags=re.IGNORECASE | re.VERBOSE
    )

    if not match:
        return None

    min_salary = int(match.group(1).replace(",", ""))
    max_salary = int(match.group(2).replace(",", ""))

    return {
        "min_salary": min_salary,
        "max_salary": max_salary
    }


# -----------------------------
# 3. Apply salary extraction
# -----------------------------

salary_data = df["description"].apply(
    extract_salary
)


df["min_salary"] = salary_data.apply(
    lambda x: x["min_salary"] if x else None
)

df["max_salary"] = salary_data.apply(
    lambda x: x["max_salary"] if x else None
)


# -----------------------------
# 4. Display results
# -----------------------------

print("Total jobs:", len(df))

print(
    "Jobs with detected salary:",
    df["min_salary"].notna().sum()
)

print(
    "Jobs without detected salary:",
    df["min_salary"].isna().sum()
)


print("\nSample salary results:\n")

sample = df[
    df["min_salary"].notna()
][
    ["title", "min_salary", "max_salary"]
].head(10)

print(
    sample.to_string(index=False)
)
# -----------------------------
# 5. Save salary data
# -----------------------------

output_file = "data/processed/jobs_with_salary.csv"

df.to_csv(
    output_file,
    index=False
)

print(
    "\nSalary data saved to:",
    output_file
)
# -----------------------------
# 6. Salary analysis
# -----------------------------

salary_df = df.dropna(
    subset=["min_salary", "max_salary"]
).copy()


# Calculate average salary
salary_df["average_salary"] = (
    salary_df["min_salary"] +
    salary_df["max_salary"]
) / 2


print("\nSalary Analysis:\n")

print(
    "Average minimum salary:",
    round(salary_df["min_salary"].mean(), 2)
)

print(
    "Average maximum salary:",
    round(salary_df["max_salary"].mean(), 2)
)

print(
    "Average salary:",
    round(salary_df["average_salary"].mean(), 2)
)