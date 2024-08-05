from songs import songs_app
import pandas as pd
import os

arquivo = 'tabelamusicas.csv'

if os.path.exists(arquivo):
    tabela = pd.read_csv(arquivo)
else:
    tabela = pd.DataFrame(songs_app)
    tabela.to_csv(arquivo)

print(tabela)