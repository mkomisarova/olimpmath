# Seed Data

This folder holds seed data scripts used to populate initial content in Firestore.

## How to add a topic

1. Create the Firebase topic document in the `topics` collection first.
2. After the topic document exists, add problems as a `problems` subcollection under that topic document.

## Slug requirements

- The `slug` field must be unique.
- The `slug` must be URL-safe: lowercase, no spaces, use hyphens.

## Math content format

Math content uses LaTeX syntax:

- Use `$...$` for inline equations
- Use `$$...$$` for block equations
