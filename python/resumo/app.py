"""
os tipos dados:

str
boolean
numbers, int, float
lists
dicts
functions e methods

método é FUNÇÃO que já existe: essa função já existe para uma utilidade
"""

# sempre declare listas com []

#        0         1        2         3
jogos = ["Cs 2", "Cs go", "Cs 1.6", "Dota 2", "League of legends"]  # len(4) tamanho de 4

# para acessar posição você precisa passar um numero que represente essa posição
print(jogos[0], jogos[-1])  # resgatando o primeiro e o ultimo

jogos[1] = "Cs 2"  # alterando o nome de um jogo da primeira posição
jogos.append("Valorant")  # Adicionando um novo método
jogos.remove("Cs 2")     # Removendo o item pelo nome de string


jogo = {
   "nome": "CS 2",
   "total_jogadores": 930321,
   "nota": 10,
   "free": True
}

print(jogo["nota"])  # resgatar pela chave do dicionário
jogo["nota"] = 8.8

jogo["id"] = 1

print(jogo)

print("-------------\n")


def media(numero1, numero2):
    return (numero1 + numero2) / 2


joao = media(7, 8)
beatriz = media(9, 10)

print("A média do aluno joão é:", joao)
print("A média do aluno beatriz é:", beatriz)