from flask import Flask, request, Response, render_template, jsonify
import json
import os

app = Flask(__name__)

PLAYLISTS = {"chill": "https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM",
             "upbeat": "https://open.spotify.com/embed/album/1nMHkGDJwTvoW3LTTdUVwA",
             "serious": "https://open.spotify.com/embed/playlist/0b2z0L262075YoA63QF9aJ?"
             }

@app.route("/")
def home_page():
    return render_template("index.html")

@app.route("/get_playlist")
def get_playlist():
    mood = request.args.get("mood")
    music = PLAYLISTS.get(mood, PLAYLISTS["chill"])
    return jsonify({"playlist": music})
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)