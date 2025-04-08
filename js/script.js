const displayProducts = document.getElementById('display-products');

// Fetch function 

async function fetchAllProducts() {
    try {
        const response = await fetch("https://v2.api.noroff.dev/gamehub");
        if (!response.ok) {
            throw new Error ("Can't fetch")
        };
        const data = await response.json();
        console.log(data);
        const allGames = data.data;


        allGames.forEach(game=> {
            generateGame(game);
        });
    } catch (error) {
        console.log("Error fetching products");
    }
    
    
}

fetchAllProducts();

function generateGame (game) {
    const gameContainer = document.createElement('div');
    gameContainer.className = 'game-canvas';

    const gameHeading = document.createElement('h2')
    gameHeading.textContent= `${game.title}`;

    const gameImage = document.createElement('img');
    gameImage.src = game.image.url;
    gameImage.alt = game.image.alt;

    displayProducts.appendChild(gameContainer);
    gameContainer.appendChild(gameHeading);
    gameContainer.appendChild(gameImage);
    
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.classList = 'cta_button';
    const checkOutBtn = document.createElement('button');
    checkOutBtn.textContent = 'Buy it';

    gameContainer.appendChild(addToCartBtn);
    gameContainer.appendChild(checkOutBtn);

}