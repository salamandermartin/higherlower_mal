from __future__ import annotations

class AnimeItem:
    def __init__(self, anime_name: str, members: int, rating: float, id: int, picture: str):
        self.anime_name = anime_name
        self.members = members
        self.rating = rating
        self.id = id
        self.picture = picture

    def compare_members(self, other_anime: AnimeItem):
        if self.members < other_anime.members:
            return False
        return True
    
    def compare_rating(self, other_anime: AnimeItem):
        if self.rating < other_anime.rating:
            return False
        return True