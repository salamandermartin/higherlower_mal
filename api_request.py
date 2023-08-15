import requests
import os
from pathlib import Path
from dotenv import load_dotenv
from random import randint


def api_call_get_list():
	load_dotenv()
	path = os.environ['PATH']

	headers = {'X-MAL-CLIENT-ID': os.environ.get('CLIENT_ID')}
	response = requests.get('https://api.myanimelist.net/v2/anime/ranking?ranking_type=bypopularity&limit=500', headers = headers)
	return response
