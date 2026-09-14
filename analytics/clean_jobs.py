import duckdb
import pandas as pd


# Connect to DuckDB
con = duckdb.connect("job_market_pipeline.duckdb")

# Load jobs into Pandas
df = con.sql(
    "SELECT * FROM job_market_data.jobs"
).df()

con.close()


# Remove DLT metadata columns
df = df.drop(
    columns=["_dlt_load_id", "_dlt_id"],
    errors="ignore"
)


# Remove duplicate jobs
df = df.drop_duplicates(subset=["slug"])


# Remove rows without a job title
df = df.dropna(subset=["title"])


# Fill missing text fields
df["company_name"] = df["company_name"].fillna("Unknown")
df["location"] = df["location"].fillna("Unknown")
df["description"] = df["description"].fillna("")


# Convert text columns to clean strings
df["title"] = df["title"].astype(str).str.strip()
df["company_name"] = df["company_name"].astype(str).str.strip()
df["location"] = df["location"].astype(str).str.strip()


# Save cleaned data
output_file = "data/processed/jobs_clean.csv"
df.to_csv(output_file, index=False)


print("Cleaning completed!")
print("Clean jobs:", len(df))
print("Saved to:", output_file)