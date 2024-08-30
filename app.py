EUR = 0.76
BRL = 5.99

lista_num = [60120.12, 6032.32, 6000.99]
lista_str = ["60120.1232312", "6032.3231231", "6000.9123419"]
lista_dic = [
    {
        "base": "USD",
        "coin": "BTC",
        "price": {"time": "00:00", "price":  "60120.1232312"}
    },
    {
        "base": "USD",
        "coin": "BTC",
        "price": {"time": "00:00", "price":  "6032.3231231"}
    },
    {
        "base": "USD",
        "coin": "BTC",
        "price": {"time": "00:00", "price":  "6000.9123419"}
    }
]

for item in lista_str:
    print(item)


for item in lista_dic:
    print(float(item['price']['price']) / BRL)
    


