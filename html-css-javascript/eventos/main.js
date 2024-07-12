import { dataEmail } from "./data.js";
import { navBar } from "./navBar.js";



const body = document.body;
body.appendChild(navBar());

function handleClick(event) {
    event.preventDefault();

    dataEmail.forEach((e) => {
        const p = document.createElement('p');
        p.innerHTML = e.email;

        body.appendChild(p);

    })

};


window.handleClick = handleClick;