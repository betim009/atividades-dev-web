export function navBar() {
    const header = document.getElementById('header');

    return header.innerHTML += `
    <nav>
        <a href="/" data-navigo>Home</a>
        <a href="/items" data-navigo>Items</a>
    </nav>
    `
};