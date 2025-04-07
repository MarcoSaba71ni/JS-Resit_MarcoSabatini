const displayProducts = document.getElementById('display-products');^

// Fetch function 

async function fetchAllProducts() {
    const displayProducts = document.getElementById('display-products');
    
    const response = await fetch("https://docs.noroff.dev/docs/v2/e-commerce/gamehub");
    const data = await response.json();
    const allGames = data.data;


    allGames.forEach(game=> {
        generateGame(game);
    });
}

fetchAllProducts();

function generateGame (game) {
    const gameContainer = document.createElement('div');

    const gameHeading = document.createElement('h2')
    gameHeading.textContent= `${game.title}`;

    const gameImage = document.createElement('img');
    gameImage.src = game.image.url;
    gameImage.alt = game.image.alt;

    displayProducts.appendChild(gameContainer);
    gameContainer.appendChild(gameHeading);
    gameContainer.appendChild(gameImage);
    

}