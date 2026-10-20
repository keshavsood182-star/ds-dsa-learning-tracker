# Internship-First Learning Tracker

A personal 26-week roadmap for preparing for Data Analyst and ML / Data Science Engineer internships. It prioritizes SQL, Excel, Power BI, Python, data analysis, and statistics while keeping the DSA curriculum as a parallel track.

## Features

- Role-weighted skill priorities, internship readiness, and daily focus recommendations
- A 26-week internship roadmap plus the existing six-month DSA curriculum
- Project milestones and a lightweight internship application tracker
- Progress, role preference, projects, and applications saved in browser localStorage
- Safe migration of completed topics from the previous roadmap
- Responsive dashboard with dark and light themes

## Local development

```bash
git clone <repository-url>
cd ds-dsa-tracker
python -m venv venv
```

Activate the virtual environment, then run:

```bash
pip install -r requirements.txt
python app.py
```

Open the local URL printed by Flask (usually http://127.0.0.1:5000).

## Push to GitHub

From the project directory:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

## Deploy to Vercel

Push the project to GitHub, sign in to Vercel, choose **Add New Project**, and import the repository. Vercel will use the included `vercel.json` to build and route the Flask application. Deploy using the default project settings; no database or environment variables are needed.
