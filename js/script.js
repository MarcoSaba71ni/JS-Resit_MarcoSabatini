/* const displayProducts = document.getElementById('display-products');

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
         applyFilters();
 
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
     addToCartBtn.addEventListener("click", () => {
        addItemToCart(game);
        window.location.href = "my-cart.html";
    });
 
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
 
 async function addItemToCart (game) {
    let cart = JSON.parse(localStorage.getItem('cart') || []);
    cart.push(game);
    localStorage.setItem('cart', JSON.stringify(cart));

 }

 // Update cart span

 function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || []);
    const cartCount = document.getElementById('cart-count');

    cartCount.textContent = cart.length;
 }

 let allGames = [];
 

 updateCartCount();

 // Apply filters

 const genderFilter = document.getElementById('gender-filter');
 const genreFilter = document.getElementById('genre-filter');
 const onSaleFilter = document.getElementById('on-sale-filter');
 const eighteenPlus = document.getElementById('eighteen-plus');

 genderFilter.addEventListener('change', applyFilters());
 genreFilter.addEventListener('change', applyFilters());
 onSaleFilter.addEventListener('change', applyFilters());
 eighteenPlus.addEventListener('change', applyFilters());

 async function applyFilters() {
    const genderValues = genderFilter.value;
    const genreValues = genreFilter.value;
    const onSaleValues = onSaleFilter.checked;
    const eighteenPlusValue = eighteenPlus.checked;

    const filteredGames = allGames.filter(game => {
        const matchesGender = gender ? game.gender?.toLowerCase() === gender : true;
        const matchesGenre = genre ? game.genre ?.toLowerCase() === genre : true;
        const matchesOnSale = onSale ? game.onSale === true : true;
        const matchesEighteenPlus = ageRating? game.ageRating === "18+" : true;

        return matchesGender && matchesGenre && matchesOnSale && matchesEighteenPlus;

    })
 } */

    const displayProducts = document.getElementById('display-products');
const searchBar = document.getElementById('search-bar');

const genreFilter = document.getElementById('genre-filter');
const onSaleFilter = document.getElementById('on-sale-filter');
const eighteenPlus = document.getElementById('eighteen-plus');

let allGames = [];

// Fetch function 
async function fetchAllProducts() {
    const query = searchBar.value.trim().toLowerCase();  

    try {
        const response = await fetch("https://v2.api.noroff.dev/gamehub");
        if (!response.ok) {
            throw new Error("Can't fetch");
        }

        const data = await response.json();
        allGames = data.data; 
        applyFilters();  
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}

fetchAllProducts();

// Render each game
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
    addToCartBtn.addEventListener("click", () => {
        addItemToCart(game);
        window.location.href = "my-cart.html";
    });

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

function addItemToCart(game) {
    let cart = JSON.parse(localStorage.getItem('cart') || []);
    cart.push(game);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || []);
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

updateCartCount();

// Apply filters
function applyFilters() {
    const query = searchBar.value.trim().toLowerCase();
    const genreValues = genreFilter.value.toLowerCase();
    const onSaleValues = onSaleFilter.checked;
    const eighteenPlusValue = eighteenPlus.checked;

    const filteredGames = allGames.filter(game => {
        const matchesSearch = query === "" || game.title.toLowerCase().includes(query);
        const matchesGenre = genreValues ? game.genre?.toLowerCase() === genreValues : true;
        const matchesOnSale = onSaleValues ? game.onSale === true : true;
        const matchesEighteenPlus = eighteenPlusValue ? game.ageRating === "18+" : true;

        return matchesSearch && matchesGenre && matchesOnSale && matchesEighteenPlus;
    });

    displayProducts.innerHTML = "";
    filteredGames.forEach(game => generateGame(game));
}

// Event listeners (✅ Corrected)
searchBar.addEventListener('input', applyFilters);
genreFilter.addEventListener('change', applyFilters);
onSaleFilter.addEventListener('change', applyFilters);
eighteenPlus.addEventListener('change', applyFilters);
