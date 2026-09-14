import dlt
from dlt.sources.rest_api import rest_api_source


source = rest_api_source(
    {
        "client": {
            "base_url": "https://www.arbeitnow.com/api/",
        },
        "resources": [
            {
                "name": "jobs",
                "endpoint": {
                    "path": "job-board-api",
                },
            }
        ],
    }
)


pipeline = dlt.pipeline(
    pipeline_name="job_market_pipeline",
    destination="duckdb",
    dataset_name="job_market_data",
)


load_info = pipeline.run(source)

print(load_info)