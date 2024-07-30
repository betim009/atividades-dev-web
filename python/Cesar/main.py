alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
# Palavra para criptografar
palavra = "YOUTUBE"

# Salvando as posições
novos_index = []

# Palavra Criptografada
palavra_criptografada = ""

# para cada letra da palavra para criptografar
for letra in palavra:
    # estou procurando essa letra dentro do alfabeto
    for index, item in enumerate(alfabeto):
        if letra == alfabeto[index]:  # se a letra for igual a uma letra do alfabeto
            novo_index = index + 3  # Criando um novo index para a letra
            novos_index.append(novo_index)  # armazenando um novo index

# Buscando as posições em novos_index
for index, item in enumerate(novos_index):
    if item > 25:
        novos_index[index] = item - 26
        
        
# # EXIBIR A PALAVRA CRIPTOGRAFADA
for index, item in enumerate(novos_index):
    palavra_criptografada += alfabeto[item]
      
print(palavra_criptografada)