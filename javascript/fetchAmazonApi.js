async function fetchApi() {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/best-sellers?category=software&type=BEST_SELLERS&page=1&country=US';

    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '27bb0a1793msh18efee95ca561adp17c14ejsnb2b78c9d3300',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);


    const result = await response.json();

    const data = result.data.best_sellers;

    const dataFinal = {
        "resultado": []
    };

    for (const item of data) {
        const itemPrice = parseFloat(item.product_price.slice(1));

        if (itemPrice > 100) {
            dataFinal.resultado.push(item)
        };

    }

    console.log(dataFinal)



}

fetchApi();