const personagens = [
    { id: 1, name: "Luffy", img: "https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/10/imagem_2023-10-16_100425798.png" },
    { id: 2, name: "Zoro", img: "https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/10/imagem_2023-10-16_100425798.png" },
    { id: 3, name: "Nami", img: "https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/10/imagem_2023-10-16_100425798.png" },
    { id: 4, name: "Sanji", img: "https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/10/imagem_2023-10-16_100425798.png" },
    { id: 5, name: "Brook", img: "https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/10/imagem_2023-10-16_100425798.png" },
    { id: 6, name: "Ace", img: "https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/10/imagem_2023-10-16_100425798.png" }
]

const divResultado = document.getElementById("resultado");

for (let index = 0; index < personagens.length; index++) {
    const element = personagens[index];
    
    divResultado.innerHTML += `
        <h2>${element.name}</h2>
        <img src="${element.img}" >
    `
}