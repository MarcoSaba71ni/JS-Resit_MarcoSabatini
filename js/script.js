const displayProducts = document.getElementById('display-products');

// Fetch function 

async function fetchAllProducts() {
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        if (!response.ok) {
            throw new Error ("can't fetch")
        };
        const data = await response.json();
        console.log(data);
        const allGames = data.data;


        allGames.slice(0,5).forEach(game=> {
            generateGame(game);
        });
    } catch (error) {
        console.log("Error fetching products");
    }
    
    
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