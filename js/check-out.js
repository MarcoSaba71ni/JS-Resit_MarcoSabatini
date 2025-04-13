 // Call this function when the page loads
function displayTotal() {
    const totalCheckout = document.getElementById('total-checkout');
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.forEach(game => {
      generateTotal(game);
    });
  }
  
  // Generate and render each game's summary info
  function generateTotal(game) {
    const totalDiv = document.createElement('div');
  
    const totalImg = document.createElement('img');
    totalImg.src = game.image.url;
    totalImg.alt = game.image.alt;
    totalImg.className = "image-total";
  
    const totalHeading = document.createElement('h4');
    totalHeading.textContent = game.title;
  
    const totalSingPrice = document.createElement('p');
    totalSingPrice.textContent = `Price: $${game.price}`;
  
    totalDiv.appendChild(totalImg);
    totalDiv.appendChild(totalHeading);
    totalDiv.appendChild(totalSingPrice);
  
    const totalCheckout = document.getElementById('total-checkout');
    totalCheckout.appendChild(totalDiv);
  }
  