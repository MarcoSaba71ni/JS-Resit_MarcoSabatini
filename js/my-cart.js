const cartItems = document.getElementById('cart-items');

let cart = JSON.parse(localStorage.getItem('cart') || []);

cartItems.innerHTML = "";

if (cart.lenght = 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    alert('Go Back To Menu');
} else {
    cart.forEach(game => {
    generateCart(game);        
    });
}

function generateCart(game) {
    const gameCart = document.createElement('div');
    gameCart.className = "game-cart";

    const imgCart = document.createElement('img');
    imgCart.src = game.image.url;
    imgCart.alt = game.image.alt; 

    const gameDescription = document.createElement('div');
    gameDescription.className = "description-game-cart";

    const cartHeading = document.createElement('h3');
    cartHeading.textContent = game.title;

    const gamePrice = document.createElement('p');
    gamePrice.textContent = `Price: $${game.price}`;

    cartItems.appendChild(gameCart);
    gameCart.appendChild(imgCart);
    gameCart.appendChild(gameDescription);
    gameDescription.appendChild(cartHeading);
    gameDescription.appendChild(gamePrice);

}