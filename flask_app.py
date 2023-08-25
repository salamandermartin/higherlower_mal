from flask import Flask, render_template
from api_request import *

app = Flask(__name__)

@app.route("/")
def index():
    anime_list = api_call_get_list()
    return render_template("index.html", template_folder = 'templates', static_folder = 'static', anime_list = anime_list)

async def get_list_data():
    await api_call_get_list
    return api_call_get_list()

@app.route("/data")
async def get_list():
    data = await get_list_data()
    return data




app.run(host='0.0.0.0', port = 5001)