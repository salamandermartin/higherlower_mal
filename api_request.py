import requests
import os
import json
from pathlib import Path
from dotenv import load_dotenv
from random import randint
import ast


def api_call_get_list():
	load_dotenv()
	path = os.environ['PATH']

	headers = {'X-MAL-CLIENT-ID': os.environ.get('CLIENT_ID')}
	response = requests.get('https://api.myanimelist.net/v2/anime/ranking?ranking_type=bypopularity&limit=300&fields=mean,num_list_users,main_picture', headers = headers).json()
	del response['paging']

	return json.dumps(response)

def api_call_get_more_info(id, more_fields:list):
	load_dotenv()
	path = os.environ['PATH']
	headers = {'X-MAL-CLIENT-ID': os.environ.get('CLIENT_ID')}
	response = requests.get('https://api.myanimelist.net/v2/anime/' + str(id) + '?fields=start_date,end_date,mean,num_list_users,main_picture', headers = headers)
	return response


#print(api_call_get_list())
#print(api_call_get_list().json()['data'][0]['node']['id'])
#print(api_call_get_more_info(16498).json()['main_picture']['large'])
#print(api_call_get_list().json()['data'][0])