/*

// const displayProducts = document.getElementById('display-products');

// Fetch function 

async function fetchAllProducts() {
    const searchBar = document.getElementById('search-bar');
    let writing = searchBar.value.trim().toLowerCase();
    
    try {
        const response = await fetch("https://v2.api.noroff.dev/gamehub");
        if (!response.ok) {
            throw new Error ("Can't fetch")
        };
        const data = await response.json();
        console.log(data);
        const allGames = data.data;



        allGames.filter(game=> {
            generateGame(game);
        });
    } catch (error) {
        console.log("Error fetching products");
    }
    
    
}

fetchAllProducts();

// Render elements function

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
    

    const checkOutBtn = document.createElement('a');
    checkOutBtn.textContent = 'View Game';
    checkOutBtn.classList = 'cta_button';
    checkOutBtn.href = `product.html?id=${game.id}`;

    gameContainer.appendChild(addToCartBtn);
    gameContainer.appendChild(checkOutBtn);

}


// Search Bar function

const searchBar = document.getElementById('search-bar');

let writing = searchBar.value;


//

//
 //
 //
 */

 const displayProducts = document.getElementById('display-products');

 // Fetch function 
 async function fetchAllProducts() {
     const searchBar = document.getElementById('search-bar');
     let query = searchBar.value.trim().toLowerCase();  // clean and lowercase input
     console.log("Query::", query);
 
     try {
         const response = await fetch("https://v2.api.noroff.dev/gamehub");
         if (!response.ok) {
             throw new Error("Can't fetch");
         }
 
         const data = await response.json();
         const allGames = data.data;
 
         // Clear current display before showing new results
         displayProducts.innerHTML = "";
 
         allGames
             .filter(game => {
                 // If search is empty, show all games
                 if (query === "") return true;
                 // Filter by title
                 return game.title.toLowerCase().includes(query);
             })
             .forEach(game => {
                 generateGame(game);
             });
 
     } catch (error) {
         console.log("Error fetching products:", error);
     }
 }
 
 fetchAllProducts();
 
 // Search bar event listener to update results when typing
 document.getElementById('search-bar').addEventListener('input', fetchAllProducts);
 
 // Render elements function
 function generateGame(game) {
     const gameContainer = document.createElement('div');
     gameContainer.className = 'game-canvas';
 
     const gameHeading = document.createElement('h2');
     gameHeading.textContent = game.title;
 
     const gameImage = document.createElement('img');
     gameImage.src = game.image.url;
     gameImage.alt = game.image.alt;
 
     const addToCartBtn = document.createElement('button');
     addToCartBtn.textContent = 'Add to Cart';
     addToCartBtn.className = 'cta_button';
 
     const checkOutBtn = document.createElement('a');
     checkOutBtn.textContent = 'View Game';
     checkOutBtn.className = 'cta_button';
     checkOutBtn.href = `product.html?id=${game.id}`;
 
     gameContainer.appendChild(gameHeading);
     gameContainer.appendChild(gameImage);
     gameContainer.appendChild(addToCartBtn);
     gameContainer.appendChild(checkOutBtn);
 
     displayProducts.appendChild(gameContainer);
 }
 