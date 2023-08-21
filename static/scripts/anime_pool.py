from api_request import *
from anime_item import AnimeItem
import random
import xml.etree.ElementTree as ET

class AnimePool:
    def __init__(self, limit):
        self.pool = [None for i in range(limit)]
        self.length = limit
        
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
    
    def xml_create(self):
        root = ET.Element('root')

        for i in range(self.length):
            tag_name = 'item' + str(i)
            item = ET.SubElement(root, tag_name)
            anime_name = ET.SubElement(item, 'anime_name')
            id = ET.SubElement(item, 'id')
            members = ET.SubElement(item, 'members')
            rating = ET.SubElement(item, 'rating')
            picture = ET.SubElement(item, 'pic_url')

            anime_name.text = self.pool[i].anime_name
            id.text = str(self.pool[i].id)
            members.text = str(self.pool[i].members)
            rating.text = str(self.pool[i].rating)
            picture.text = self.pool[i].picture

        tree = ET.ElementTree(root)
        tree.write('list.xml')


