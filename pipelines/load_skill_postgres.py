import pandas as pd
import psycopg2
import ast


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
# 2. Load extracted skills
# -----------------------------

df = pd.read_csv(
    "data/processed/jobs_with_skills.csv"
)


# -----------------------------
# 3. Insert skills
# -----------------------------

skill_rows = 0

for _, row in df.iterrows():

    job_id = row["slug"]

    try:
        skills = ast.literal_eval(row["skills"])
    except (ValueError, SyntaxError):
        skills = []

    for skill in skills:

        cursor.execute(
            """
            INSERT INTO job_skills (
                job_id,
                skill
            )
            VALUES (%s, %s)
            """,
            (
                job_id,
                skill
            )
        )

        skill_rows += 1


# -----------------------------
# 4. Commit changes
# -----------------------------

conn.commit()

print("Skills loaded successfully!")
print("Skill rows inserted:", skill_rows)


# -----------------------------
# 5. Close connection
# -----------------------------

cursor.close()
conn.close()
