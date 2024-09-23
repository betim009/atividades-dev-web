const btn1 = document.getElementById("btn1");
const btns = document.querySelectorAll("button");
console.log(btns);


btn1.addEventListener("click", () => {
    alert();
});

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Estou aqui");
    });
})