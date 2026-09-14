import requests
import json
from pathlib import Path

API_URL = "https://www.arbeitnow.com/api/job-board-api"

# Send request to API
response = requests.get(API_URL)

print("Status Code:", response.status_code)

# Stop if API request failed
response.raise_for_status()

# Convert JSON response to Python dictionary
data = response.json()

# Create raw data directory
raw_dir = Path("data/raw")
raw_dir.mkdir(parents=True, exist_ok=True)

# Save raw API response
output_file = raw_dir / "jobs_raw.json"

with open(output_file, "w", encoding="utf-8") as file:
    json.dump(data, file, indent=4, ensure_ascii=False)

print("Total jobs:", len(data["data"]))
print("Raw data saved to:", output_file)