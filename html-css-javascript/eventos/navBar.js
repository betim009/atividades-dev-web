export function navBar() {
    const header = document.createElement('header');

    header.innerHTML += `
        <nav>
            <a src="#">Home</a>
        </nav>
    `
    return header;   
};