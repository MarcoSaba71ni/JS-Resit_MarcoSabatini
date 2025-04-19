const cartItems = document.getElementById('cart-items');

let cart = JSON.parse(localStorage.getItem('cart') || []);

cartItems.innerHTML = "";

if (cart.length === 0) {
    cartItems.innerHTML= "<p>Your cart is empty.</p>";
    alert('Go Back To The Home Page');

} else {
    cart.forEach(game => {
    generateCart(game);        
    });
}
// Only shown when cart has items
const checkOutSection = document.createElement('div');
checkOutSection.className = "check-out-section";

const checkOutBtn = document.createElement('a');
checkOutBtn.textContent = "Go to Checkout";
checkOutBtn.className = "cta_button";
checkOutBtn.href = 'check-out.html';

const keepShopSection = document.createElement('div');
keepShopSection.className = "keep-shop-section";

const keepShopping = document.createElement('a');
keepShopping.textContent = 'Keep Shopping';
keepShopping.className = "cta_button";
keepShopping.href = 'index.html';

checkOutSection.appendChild(checkOutBtn);
keepShopSection.appendChild(keepShopping);

cartItems.appendChild(checkOutSection);
cartItems.appendChild(keepShopSection);



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

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "cta_button";
    deleteBtn.addEventListener('click', () => {
        deleteItem(game.id);
    })

    const checkOutSection = document.createElement('div');
    checkOutSection.className = "check-out-section";

    const checkOutBtn = document.createElement('a');
    checkOutBtn.textContent = "Go to CheckOut";
    checkOutBtn.className = "cta_button";
    checkOutBtn.href = 'check-out.html';

    const keepShopSection = document.createElement('div');
    keepShopSection.className = "keep-shop-section";
    const keepShopping = document.createElement('a');
    keepShopping.textContent = 'Keep Shopping';
    keepShopping.className = "cta_button";
    keepShopping.href = 'index.html';

    
    cartItems.appendChild(gameCart);
    gameCart.appendChild(imgCart);
    gameCart.appendChild(gameDescription);
    gameDescription.appendChild(cartHeading);
    gameDescription.appendChild(gamePrice);
    gameDescription.appendChild(deleteBtn);
}

function deleteItem(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); 
  }

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || []);
    const cartCount = document.getElementById('cart-count');

    cartCount.textContent = cart.length;
 }

 updateCartCount();