import duckdb
import pandas as pd
import re

from langdetect import detect, LangDetectException

from sklearn.feature_extraction.text import TfidfVectorizer


# -----------------------------
# 1. Load job descriptions
# -----------------------------

con = duckdb.connect(
    "job_market_pipeline.duckdb"
)

df = con.sql(
    """
    SELECT
        slug,
        title,
        description
    FROM job_market_data.jobs
    """
).df()

con.close()


# -----------------------------
# 2. Clean job descriptions
# -----------------------------

def clean_text(text):

    if not isinstance(text, str):
        return ""

    # Remove HTML tags
    text = re.sub(
        r"<[^>]*>",
        " ",
        text
    )

    # Remove escaped HTML tags
    text = re.sub(
        r"&lt;[^&]*&gt;",
        " ",
        text
    )

    # Remove HTML entities
    text = re.sub(
        r"&[a-zA-Z]+;",
        " ",
        text
    )

    # Remove URLs
    text = re.sub(
        r"https?://\S+|www\.\S+",
        " ",
        text
    )

    # Keep Unicode letters
    # This prevents German words such as
    # "Unterstützung" from becoming broken fragments
    text = re.sub(
        r"[^\w\s]",
        " ",
        text,
        flags=re.UNICODE
    )

    # Remove standalone numbers
    text = re.sub(
        r"\b\d+\b",
        " ",
        text
    )

    # Remove encoded fragments such as x26
    text = re.sub(
        r"\bx\d+\b",
        " ",
        text,
        flags=re.IGNORECASE
    )

    # Remove single-character tokens
    text = re.sub(
        r"\b[a-zA-Z]\b",
        " ",
        text
    )

    # Remove extra spaces
    text = re.sub(
        r"\s+",
        " ",
        text
    )

    return text.strip().lower()


# Fill missing descriptions
df["description"] = df["description"].fillna("")


# Clean descriptions
df["description"] = df["description"].apply(
    clean_text
)


# Remove empty descriptions
df = df[
    df["description"].str.len() > 0
].copy()


print(
    "Jobs with descriptions:",
    len(df)
)


# -----------------------------
# 3. Detect English language
# -----------------------------

def is_english(text):

    if not isinstance(text, str):
        return False

    # Language detection is unreliable
    # on very short text
    if len(text.split()) < 5:
        return False

    try:

        return detect(text) == "en"

    except LangDetectException:

        return False


# Keep only English descriptions
df = df[
    df["description"].apply(is_english)
].copy()


print(
    "English jobs:",
    len(df)
)


# -----------------------------
# 4. Define stopwords
# -----------------------------

english_stopwords = {
    "the",
    "and",
    "or",
    "with",
    "for",
    "from",
    "this",
    "that",
    "are",
    "was",
    "were",
    "you",
    "your",
    "our",
    "their",
    "they",
    "will",
    "have",
    "has",
    "not",
    "but",
    "can",
    "all",
    "about",
    "into",
    "who",
    "what",
    "when",
    "where",
    "which",
    "how",
    "been",
    "being",
    "than",
    "then",
    "also",
    "very",
    "more",
    "most",
    "some",
    "any",
    "such",
    "other",
    "its",
    "our",
    "their",
    "there",
    "here",
    "these",
    "those",
    "you",
    "we",
    "us",
    "they",
    "them",
    "he",
    "she",
    "his",
    "her",
    "as",
    "at",
    "by",
    "on",
    "in",
    "of",
    "to",
    "a",
    "an",
    "is",
    "it",
    "be"
}


german_stopwords = {
    "und",
    "der",
    "die",
    "das",
    "den",
    "dem",
    "des",
    "ein",
    "eine",
    "einer",
    "einem",
    "einen",
    "eines",
    "mit",
    "von",
    "zu",
    "zum",
    "zur",
    "für",
    "fur",
    "auf",
    "aus",
    "bei",
    "im",
    "in",
    "an",
    "am",
    "oder",
    "auch",
    "als",
    "ist",
    "sind",
    "war",
    "wir",
    "uns",
    "sie",
    "ihr",
    "ihre",
    "dich",
    "du",
    "sowie",
    "nicht",
    "noch",
    "wie",
    "über",
    "uber",
    "durch",
    "nach",
    "vor",
    "gegen",
    "ohne",
    "wird",
    "werden",
    "wurde",
    "wurden",
    "erfahrung",
    "unsere",
    "kunden",
    "unterstützt",
    "unterstützen",
    "aufgaben",
    "bist",
    "dir",
    "sich",
    "unserer",
    "gute",
    "arbeit",
    "arbeiten",
    "qualifikation",
    "kenntnisse",
    "bereich",
    "bewerbung",
    "unternehmen",
    "stelle",
    "stellen",
    "mitarbeiter",
    "entwicklung",
    "verantwortung",
    "aufgabe",
    "jährige",
    "jahre",
    "gesucht",
    "dabei",
    "dann",
    "mehr",
    "deine",
    "deiner",
    "dein"
}


stopwords = (
    english_stopwords.union(
        german_stopwords
    )
)


# -----------------------------
# 5. Create TF-IDF vectorizer
# -----------------------------

vectorizer = TfidfVectorizer(

    stop_words=list(stopwords),

    max_features=1000,

    ngram_range=(1, 2),

    min_df=2
)


# -----------------------------
# 6. Generate TF-IDF matrix
# -----------------------------

tfidf_matrix = vectorizer.fit_transform(
    df["description"]
)


# -----------------------------
# 7. Calculate average scores
# -----------------------------

scores = tfidf_matrix.mean(
    axis=0
)

terms = vectorizer.get_feature_names_out()

scores = scores.A1


# -----------------------------
# 8. Create results DataFrame
# -----------------------------

results = pd.DataFrame(
    {
        "term": terms,
        "tfidf_score": scores
    }
)


# -----------------------------
# 9. Sort by TF-IDF score
# -----------------------------

results = results.sort_values(
    "tfidf_score",
    ascending=False
)


# -----------------------------
# 10. Select top 30 terms
# -----------------------------

top_terms = results.head(30)


# -----------------------------
# 11. Display results
# -----------------------------

print(
    "\nTop Emerging Terms:\n"
)

print(
    top_terms.to_string(
        index=False
    )
)


# -----------------------------
# 12. Save results
# -----------------------------

output_file = (
    "data/processed/emerging_terms.csv"
)

top_terms.to_csv(
    output_file,
    index=False
)

print(
    "\nEmerging terms saved to:",
    output_file
)