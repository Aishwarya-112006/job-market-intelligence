import duckdb
import pandas as pd


# Connect to DuckDB
con = duckdb.connect("job_market_pipeline.duckdb")


# Load jobs into Pandas DataFrame
df = con.sql(
    "SELECT * FROM job_market_data.jobs"
).df()


# Close database connection
con.close()


print("Total jobs:", len(df))

print("\nColumns:")
print(df.columns.tolist())

print("\nFirst 5 jobs:")
print(df.head())

print("\nMissing values:")
print(df.isnull().sum())

print("\nDuplicate rows:", df.duplicated().sum())