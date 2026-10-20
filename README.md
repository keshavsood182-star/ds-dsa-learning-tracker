# Six-Month Data Science + DSA Tracker

A personal six-month learning progress tracker for preparing for ML Engineer and Data Analyst internships. It includes exactly two tracks—Data Science and DSA—with topic checkboxes and progress saved in your browser's localStorage.

## Features

- Six-month Data Science roadmap
- Six-month DSA roadmap
- Topic checkboxes with monthly, track, and overall progress
- Progress persists in browser localStorage
- Responsive dashboard

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
