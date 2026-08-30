# Dipesh Dhakal — Portfolio (Python Edition)

A Flask server that serves the plain HTML/CSS/JS version of the portfolio
(no React build step required).

## Run locally

```bash
cd python-app
pip install -r requirements.txt
python app.py
```

Then open http://127.0.0.1:5001

## Structure

- `app.py` — Flask application (serves the static site)
- `requirements.txt` — Python dependencies
- `../static-version/` — the plain HTML/CSS/JS site this server serves

## Deploying

Any WSGI host works (Render, Railway, Fly.io, a VPS with gunicorn, etc.):

```bash
pip install gunicorn
gunicorn -w 2 app:app
```