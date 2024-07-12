"""
dados simples:
strings - textos
numbers - numeros
booleans - verdadeiro ou falso
none - nada

dados complexos:
listas - listas de dados
dicionarios - caracteristicas de um dado
funções e métodos - escopo de código


tipo de dado                    sinais
string                          ""
number                          10 ou 10.5
boolean                         True ou False
list                            [dado, dado] ou (dado, dado) e {dado, dado}
dictionary                      {"caracteristica": valor, "nome": "Alberto", "altura": 1.80}
functions                       def ()
methods                         method() e você consegue acessar um método pelo .

Simbolos                        Definição
=                               Atribuindo valor para uma variavel
==                              Comparação de valores
,                               Separar um dado de outro
.                               Acessar um método
+=                              Incrementar um valor
-=                              Decrementar um valor
*                               Multiplicar
+                               Somar
/                               Dividir
-                               Diminuir

SEMPRE DECLARE VARIAVEIS
Variavel é uma forma de armazena um tipo de dado
"""


nome = "Carlos"
idade = 25

pessoa = {
    "nome": "Carlos",
    "idade": 25
}

nomes = ["Alberto", "Silvia", "Juliano", "Juliana"]
notas = [7, 8, 6, 9]
listas = ["Alberto", 4555, True, False, [100, [300, True]]]

grade = [
    {
        "nome": "Silvia",
        "nota": 8
    },
    
    {
        "nome": "Juliano",
        "nota": 10
    },
    
    {
        "nome": "Carlos",
        "nota": 6
    }
]

# Regras para listas
#           0                  1 
lista_1 = ["Senhor dos Aneis", 980]  # Possuem posições

#               chave     valor              chave      valor                                
dicionario_1 = {"livro": "Senhor dos Aneis", "paginas": 980}  # posseum Chaves
print(dicionario_1["paginas"])