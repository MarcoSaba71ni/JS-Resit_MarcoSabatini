
function updateConfirmation () {
    const confirmationSpan = document.getElementById('confirmation-span');
    const generateNumber = generate12DigitNumber();
    confirmationSpan.textContent = "Order #:" + generateNumber;
}

function generate12DigitNumber() {
    let number = '';
    for (let i = 0; i < 12; i++) {
      number += Math.floor(Math.random() * 10); // Appends a random digit (0–9)
    }
    return number;
  }

  window.addEventListener('DOMContentLoaded', updateConfirmation);


 