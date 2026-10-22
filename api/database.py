import psycopg2


DB_CONFIG = {
    "host": "localhost",
    "port": 5432,
    "database": "job_market_db",
    "user": "postgres",
    "password": "YOUR_POSTGRES_PASSWORD"
}


def get_connection():

    connection = psycopg2.connect(
        host=DB_CONFIG["host"],
        port=DB_CONFIG["port"],
        database=DB_CONFIG["database"],
        user=DB_CONFIG["user"],
        password=DB_CONFIG["password"]
    )

    return connection

if __name__ == "__main__":

    try:

        connection = get_connection()

        print("PostgreSQL connection successful!")

        connection.close()

    except Exception as error:

        print("PostgreSQL connection failed!")
        print(error)