from api_request import *
from anime_item import AnimeItem

class AnimePool:
    def __init__(self, limit):
        self.pool = [AnimeItem() for i in range(limit)]
        
        api_list_string = api_call_get_list()

        for i in range(500):
            self.pool[i].anime_name = api_list_string.json()['data'][i]['node']['title']
            self.pool[i].id = api_list_string.json()['data'][i]['node']['id']

            more_info_string = api_call_get_more_info(self.pool[i].id)

            self.pool[i].members = more_info_string.json()['num_list_users']
            self.pool[i].rating = more_info_string.json()['mean']
            
            