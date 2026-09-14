import json
import pandas as pd


# Load data contract
with open("config/job_data_contract.json", "r", encoding="utf-8") as file:
    contract = json.load(file)


# Load cleaned dataset
df = pd.read_csv("data/processed/jobs_clean.csv")


errors = []


# Check required columns
for column, rules in contract["columns"].items():

    if rules["required"] and column not in df.columns:
        errors.append(f"Missing required column: {column}")


# Check required values
for column, rules in contract["columns"].items():

    if column in df.columns and rules["required"]:

        missing = df[column].isna().sum()

        if missing > 0:
            errors.append(
                f"{column} contains {missing} missing values"
            )


# Display validation result
if errors:

    print("DATA CONTRACT FAILED")

    for error in errors:
        print("-", error)

else:

    print("DATA CONTRACT PASSED")
    print("Rows validated:", len(df))
    print("Columns validated:", len(contract["columns"]))