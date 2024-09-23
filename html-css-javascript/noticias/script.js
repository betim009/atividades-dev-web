let noticias = [
    {
        titulo: "Noticia A",
        texto: "Texto noticia A",
        data: "23 de set",
        imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/02/noticia.jpg"
    },
    {
        titulo: "Noticia B",
        texto: "Texto Noticia B",
        data: "23 de set",
        imagem: "https://s2-g1.glbimg.com/cPlGuMLduufK-au2CXmhAN1c5vM=/0x129:1280x849/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/c/U/KloiImRBuoT7jnipAk3A/photo-5442683425254402680-y.jpg"
    }
]


let resgatarDivNoticias = document.getElementById("div-noticias");

resgatarDivNoticias.innerHTML += `
    <div class="container">
        <div class="div-1">
            <img class="img-noticia" src="${noticias[0].imagem}" alt="notfound">
        </div>
        <div class="div-2">
            <h4> ${noticias[0].titulo} </h4>
            <p> ${noticias[0].texto} </p>
            <p> ${noticias[0].data}</p>
        </div>
    </div>
`

resgatarDivNoticias.innerHTML += `
    <div>
        <img class="img-noticia" src="${noticias[1].imagem}" alt="notfound">
        <h4> ${noticias[1].titulo} </h4>
        <p> ${noticias[1].texto} </p>
        <p> ${noticias[1].data}</p>
    </div>
`
