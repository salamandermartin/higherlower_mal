from api_request import *
from anime_item import AnimeItem
import random

class AnimePool:
    def __init__(self, limit):
        self.pool = [None for i in range(limit)]
        
        api_list_string = api_call_get_list()
        for i in range(limit):
            anime_name = api_list_string.json()['data'][i]['node']['title']
            id = api_list_string.json()['data'][i]['node']['id']
            
            #more_info_string = api_call_get_more_info(id)
            members = api_list_string.json()['data'][i]['node']['num_list_users']
            rating = api_list_string.json()['data'][i]['node']['mean']
            picture = api_list_string.json()['data'][i]['node']['main_picture']['large']

            self.pool[i] = AnimeItem(anime_name, members, rating, id, picture)


            
    def shuffle_order(self):
        random.shuffle(self.pool)
        return self.pool
    
this = AnimePool(500)