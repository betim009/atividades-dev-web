songs = [
    {
        "id_song": 1,
        "name": "Otherside",
        "artist": "Red Hot Chilli Peppers",
        "album": "Calinornication",
        "release_year": 1999,
        "genre": "Rock",
        "duration": 4.15,
        "rating": 4.5,
    },
    {
        "id_song": 2,
        "name": "Under the Bridge",
        "artist": "Red Hot Chili Peppers",
        "album": "Calinornication",
        "release_year": 1991,
        "genre": "Rock",
        "duration": 4.24,
        "rating": 4.8,
    },
    {
        "id_song": 3,
        "name": "Californication",
        "artist": "Red Hot Chili Peppers",
        "album": "Californication",
        "release_year": 1999,
        "genre": "Rock",
        "duration": 5.29,
        "rating": 4.7,
    },
    {
        "id_song": 4,
        "name": "Smells Like Teen Spirit",
        "artist": "Nirvana",
        "album": "Nevermind",
        "release_year": 1991,
        "genre": "Grunge",
        "duration": 5.01,
        "rating": 4.9,
    },
    {
        "id_song": 5,
        "name": "Come as You Are",
        "artist": "Nirvana",
        "album": "Nevermind",
        "release_year": 1991,
        "genre": "Grunge",
        "duration": 3.39,
        "rating": 4.7,
    },
    {
        "id_song": 6,
        "name": "Lithium",
        "artist": "Nirvana",
        "album": "Nevermind",
        "release_year": 1991,
        "genre": "Grunge",
        "duration": 4.17,
        "rating": 4.6,
    },
    {
        "id_song": 7,
        "name": "In Bloom",
        "artist": "Nirvana",
        "album": "Nevermind",
        "release_year": 1991,
        "genre": "Grunge",
        "duration": 4.14,
        "rating": 4.8,
    },
    {
        "id_song": 8,
        "name": "Heart-Shaped Box",
        "artist": "Nirvana",
        "album": "In Utero",
        "release_year": 1993,
        "genre": "Grunge",
        "duration": 4.39,
        "rating": 4.7,
    },
    {
        "id_song": 9,
        "name": "Last Nite",
        "artist": "The Strokes",
        "album": "Indie Vibe",
        "release_year": 2001,
        "genre": "Indie Rock",
        "duration": 3.12,
        "rating": 4.6,
    },
    {
        "id_song": 10,
        "name": "Someday",
        "artist": "The Strokes",
        "album": "Indie Vibe",
        "release_year": 2001,
        "genre": "Indie Rock",
        "duration": 3.07,
        "rating": 4.5,
    },
    {
        "id_song": 11,
        "name": "Reptilia",
        "artist": "The Strokes",
        "album": "Indie Vibe",
        "release_year": 2001,
        "genre": "Indie Rock",
        "duration": 3.41,
        "rating": 4.8,
    },
    {
        "id_song": 12,
        "name": "Under Cover of Darkness",
        "artist": "The Strokes",
        "album": "Indie Vibe",
        "release_year": 2001,
        "genre": "Indie Rock",
        "duration": 3.58,
        "rating": 4.7,
    },
    {
        "id_song": 13,
        "name": "Vida Loka Parte 2",
        "artist": "Racionais MC's",
        "album": "Sobrevivendo no Inferno",
        "release_year": 1997,
        "genre": "Rap",
        "duration": 4.4,
        "rating": 4.9,
    },
    {
        "id_song": 14,
        "name": "Capítulo 4, Versículo 3",
        "artist": "Racionais MC's",
        "album": "Sobrevivendo no Inferno",
        "release_year": 1997,
        "genre": "Rap",
        "duration": 3.55,
        "rating": 4.8,
    },
    {
        "id_song": 15,
        "name": "Negro Drama",
        "artist": "Racionais MC's",
        "album": "Sobrevivendo no Inferno",
        "release_year": 1997,
        "genre": "Rap",
        "duration": 6.1,
        "rating": 4.7,
    },
]

# Lista acessar por posição
# Dicionario pelo nome da chave

"""
Função que vai me retonar musicas por genero
"""


def get_albuns_genre(genre):
    # se eu tenho uma lista - for
    # for - é uma estrutura de repetição
    new_songs = []
    for item in songs:
        # condição para que me retorne um genero especifico
        if item['genre'] == genre:  # vai ser preciso comparar com um parametro
            new_songs.append(item)  # adicionei o item dentro da nova lista
    return new_songs  # ENCERRA UMA FUNÇÃO


# CHAMADA da FUNÇÃO
album = get_albuns_genre("Rap")
album_1 = get_albuns_genre("Rock")
