from songs import songs_app

# Lista acessar por posição
# Dicionario pelo nome da chave

"""
Função que vai me retonar musicas por genero
"""


def get_albuns_genre(genre):
    # se eu tenho uma lista - for
    # for - é uma estrutura de repetição
    new_songs = []
    for item in songs_app:
        # condição para que me retorne um genero especifico
        if item['genre'] == genre:  # vai ser preciso comparar com um parametro
            new_songs.append(item)  # adicionei o item dentro da nova lista
    return new_songs  # ENCERRA UMA FUNÇÃO


def best_songs():
    new_best_songs = []
    for element in songs_app:
        if element['rating'] > 4.7:
            new_best_songs.append(element)
    return new_best_songs

        
print(best_songs())
