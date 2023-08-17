from flask import Flask, render_template
from anime_pool import *

app = Flask(__name__)

@app.route("/")
def index():
    anime_list = AnimePool(500)
    return render_template("index.html", template_folder = 'templates', static_folder = 'static', anime_list = anime_list)

app.run(host='0.0.0.0', port = 5001)