import json
from pathlib import Path
import re


# Input and output files
input_file = Path("data/raw/jobs_raw.json")
output_file = Path("data/processed/jobs_clean.json")


# Create processed data directory
output_file.parent.mkdir(parents=True, exist_ok=True)


# Read raw JSON data
with open(input_file, "r", encoding="utf-8") as file:
    data = json.load(file)


jobs = data["data"]


def remove_html(text):
    """Remove HTML tags from job description."""
    if not text:
        return ""

    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", text)

    return text.strip()


clean_jobs = []


for job in jobs:

    clean_job = {
        "job_id": job.get("slug"),
        "job_title": job.get("title"),
        "company": job.get("company_name"),
        "location": job.get("location"),
        "description": remove_html(job.get("description")),
        "remote": job.get("remote"),
        "job_url": job.get("url"),
        "tags": job.get("tags"),
        "job_type": job.get("job_types"),
        "posted_date": job.get("created_at")
    }

    clean_jobs.append(clean_job)


# Save cleaned data
with open(output_file, "w", encoding="utf-8") as file:
    json.dump(clean_jobs, file, indent=4, ensure_ascii=False)


print("Cleaning completed!")
print("Total jobs processed:", len(clean_jobs))
print("Clean data saved to:", output_file)