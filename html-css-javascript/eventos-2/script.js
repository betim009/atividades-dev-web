
const pokemons = [
    {
        "Title": "Pokémon: Detective Pikachu",
        "Year": "2019",
        "imdbID": "tt5884052",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg"
    },
    {
        "Title": "Pokémon",
        "Year": "1997–2023",
        "imdbID": "tt0168366",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
    },
    {
        "Title": "Pokémon: The First Movie - Mewtwo Strikes Back",
        "Year": "1998",
        "imdbID": "tt0190641",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGM3MjQ3NTQtNzRiZi00MDUzLWFjYjEtZWJjMjUwYzExYjRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    },
    {
        "Title": "Pokémon the Movie 2000",
        "Year": "1999",
        "imdbID": "tt0210234",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzE1NjBiODAtNDVhNS00ZTI1LTg4ZjUtZTk3OWVhODljMjNjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
        "Title": "Pokémon 3 the Movie: Spell of the Unown",
        "Year": "2000",
        "imdbID": "tt0235679",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0NzM3MDY1OV5BMl5BanBnXkFtZTYwNTkwODc5._V1_SX300.jpg"
    },
    {
        "Title": "Pokemon 4Ever: Celebi - Voice of the Forest",
        "Year": "2001",
        "imdbID": "tt0287635",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDZiYjc3MWYtODE5Mi00MDM5LWFkZTAtNjAzZmUxMzc4ZGQxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Pokémon the Movie: I Choose You!",
        "Year": "2017",
        "imdbID": "tt6595896",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2U3NmI4YzItYmRiNi00M2UxLWExNTYtNDZkZmJlNzlmM2M3XkEyXkFqcGdeQXVyNDkzMjE0NDE@._V1_SX300.jpg"
    },
    {
        "Title": "Pokémon Heroes",
        "Year": "2002",
        "imdbID": "tt0347791",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODg3OTljOTktNmI3Ny00MDczLTk2NGItNWRiOTE2YjQ1OWI0XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
        "Title": "Pokémon: Mewtwo Strikes Back - Evolution",
        "Year": "2019",
        "imdbID": "tt8856470",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTlmMjc0YzgtMDlmYy00NGY4LTgyOTAtODI2MzllNWI1ODBkXkEyXkFqcGdeQXVyMTMxNDQyNjM5._V1_SX300.jpg"
    },
    {
        "Title": "Pokémon: Lucario and the Mystery of Mew",
        "Year": "2005",
        "imdbID": "tt0875609",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxOTcwNjAwMl5BMl5BanBnXkFtZTgwMjc2MzQ2NjE@._V1_SX300.jpg"
    }
];


function handleClick(event, element) {
    alert(element)
}

const divPokemons = document.getElementById('div-pokemons');

pokemons.forEach((element, index) => {
    const newDiv = document.createElement('div');
    newDiv.addEventListener('click', (event) => handleClick(event, index));
    newDiv.className = 'div-pokemon';


    newDiv.innerHTML += `
        <h2>${element.Title}</h2>
        <img src="${element.Poster}" />
    `;

    divPokemons.appendChild(newDiv);
});








