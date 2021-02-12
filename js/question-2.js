// Question 2
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const div = document.querySelector("div#games");
const spinner = document.querySelector("#spin");

fetch(url)
    .then(response => response.json())
    .then(data => gameList(data))
    .catch(error => {
        console.error(error.message);
        div.innerHTML = "";
        div.innerHTML += `<h2>An error has occurred</h2>`;
    });
    
function gameList(games) {
    div.innerHTML = "";
    for (game of games.results) {
        if (game === games.results[8]) {
            break;  
        }
        const tag = game.tags;
        let gameDiv = `
        <ul>
            <li>Name: ${game.name}</li>
            <li>Rating: ${game.rating}</li>
            <li>Tags: ${tag.length}
        </ul>`
        div.innerHTML += gameDiv;
    }
}