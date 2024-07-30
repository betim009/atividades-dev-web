alfabeto1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
palavra = "RAYSA"
novaPalavra = ""

for letra in palavra:
    for index in range(0, 26):
        if letra == alfabeto1[index]:
            novo_index = index + 3
            
            if novo_index >= 25:
                novo_index -= 26
            
            novaPalavra += alfabeto1[novo_index]
            
print(novaPalavra)

                