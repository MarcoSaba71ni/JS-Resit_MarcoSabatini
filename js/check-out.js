document.addEventListener("DOMContentLoaded", () => {
  displayTotal();
});

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


