// This section gets the query parameter, Everything after the ? on the URL.
const parameterString = window.location.search;
const searchParameter = new URLSearchParams(parameterString);
const gameId = searchParameter.get("id");

const individualContent = document.getElementById('individual-content');

const singleGameURL = `https://v2.api.noroff.dev/gamehub/${gameId}`;

// fetch and display function 
async function singFetchGame () {
    try {
        const response = await fetch(singleGameURL);
        const gameData = await response.json();
        createSingleGame(gameData.data);
    } catch (error) {
        console.error("Error fetching", error);
    }
}


singFetchGame();

// render HTML elements

function createSingleGame (game) {

    individualContent.innerHTML= " ";
    const singGameContent = document.createElement('div');
    singGameContent.className = 'sing-game-canvas';

    const singGameHeading = document.createElement('h2');
    singGameHeading.textContent = game.title;

    const singGameImg = document.createElement('img');
    singGameImg.src= game.image.url;
    singGameImg.alt = game.image.alt;

    const singGameDescrip = document.createElement('p');
    singGameDescrip.textContent = game.description;

    const singGamePrice = document.createElement('p');
    singGamePrice.textContent = `Price: $${game.price}`

    const addToCart = document.createElement('button');
    addToCart.textContent = "Add to Cart";
    addToCart.className = "cta_button";




    individualContent.appendChild(singGameContent);
    singGameContent.appendChild(singGameHeading);
    singGameContent.appendChild(singGameImg);
    singGameContent.appendChild(singGameDescrip);
    singGameContent.appendChild(singGamePrice);
    singGameContent.appendChild(addToCart);


}

