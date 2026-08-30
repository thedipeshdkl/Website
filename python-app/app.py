"""
Dipesh Dhakal — Portfolio (Python edition)

A Flask app that serves the plain HTML/CSS/JS portfolio from ../static-version.

Run locally:
    pip install -r requirements.txt
    python app.py
    -> http://127.0.0.1:5001
"""

import os

from flask import Flask, send_from_directory

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "..", "static-version")

app = Flask(__name__, static_folder=STATIC_DIR, static_url_path="/static")


@app.route("/")
def index():
    return send_from_directory(STATIC_DIR, "index.html")


@app.route("/<path:filename>")
def serve(filename):
    return send_from_directory(STATIC_DIR, filename)


if __name__ == "__main__":
    # Port 5001: macOS AirPlay Receiver occupies 5000 by default
    app.run(host="0.0.0.0", port=5001, debug=True)