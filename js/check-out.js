document.addEventListener("DOMContentLoaded", () => {
  displayTotal();
});



const fullName = document.getElementById("full-name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const cardNumber = document.getElementById("card-number");

const nameValue = fullName.value;
const surnameValue = surname.value;
const emailValue = email.value;
const phoneValue = phoneNumber.value;
const cardValue = cardNumber.value;

function cleanInputs() {
  fullName.value = "";
  surname.value = "";
  email.value = "";
  phoneNumber.value = "";
  cardNumber.value = "";

  alert("Yout personal information has been saved");
}




function displayTotal() {
  const totalCheckout = document.getElementById("total-checkout");
  const totalSpan = document.getElementById("total-span");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  let totalPrice = 0;

  cart.forEach(game => {
    generateTotal(game);
    totalPrice += game.price;
  });

  totalSpan.textContent =  `TOTAL PRICE: $${totalPrice.toFixed(2)}`;
}

function generateTotal(game) {
  const totalDiv = document.createElement("div");

  const totalImg = document.createElement("img");
  totalImg.src = game.image.url;
  totalImg.alt = game.image.alt;
  totalImg.className = "image-total";

  const totalHeading = document.createElement("h4");
  totalHeading.textContent = game.title;

  const totalSingPrice = document.createElement("p");
  totalSingPrice.textContent = `Price: $${game.price.toFixed(2)}`;

  totalDiv.appendChild(totalImg);
  totalDiv.appendChild(totalHeading);
  totalDiv.appendChild(totalSingPrice);

  const totalCheckout = document.getElementById("total-checkout");
  totalCheckout.appendChild(totalDiv);
}


function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || []);
  const cartCount = document.getElementById('cart-count');

  cartCount.textContent = cart.length;
}

updateCartCount();

const confirmBtn = document.getElementById('confirm-button');
confirmBtn.addEventListener('click', () => {
  clearCart();
  window.location.href= "confirmation.html";
})

function clearCart(cart) {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = "0";
  }
}