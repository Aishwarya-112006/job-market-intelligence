import pandas as pd
import psycopg2


# -----------------------------
# 1. PostgreSQL connection
# -----------------------------

password = input("PostgreSQL password: ")

conn = psycopg2.connect(
    host="localhost",
    port=5432,
    database="job_market_db",
    user="postgres",
    password=password
)

cursor = conn.cursor()


# -----------------------------
# 2. Load cleaned job data
# -----------------------------

df = pd.read_csv(
    "data/processed/jobs_clean.csv"
)


# -----------------------------
# 3. Insert jobs
# -----------------------------

for _, row in df.iterrows():

    cursor.execute(
        """
        INSERT INTO jobs (
            job_id,
            company_name,
            job_title,
            description,
            remote,
            job_url,
            location,
            created_at
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (job_id) DO NOTHING
        """,
        (
            row["slug"],
            row["company_name"],
            row["title"],
            row["description"],
            row["remote"],
            row["url"],
            row["location"],
            row["created_at"]
        )
    )


# -----------------------------
# 4. Commit changes
# -----------------------------

conn.commit()


print(
    "Jobs loaded successfully!"
)

print(
    "Rows processed:",
    len(df)
)


# -----------------------------
# 5. Close connection
# -----------------------------

cursor.close()
conn.close()