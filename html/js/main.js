document.addEventListener("DOMContentLoaded", () => {
    const plusButtons = document.querySelectorAll(".btn-plus");
    const minusButtons = document.querySelectorAll(".btn-minus");
    const totalDisplay = document.getElementById("total-price");
  
    function updateTotal() {
      const rows = document.querySelectorAll("#cart-items tr");
      let total = 0;
  
      rows.forEach((row, index) => {
        if (index === 0) return; // Skip header row
        const priceElement = row.querySelector(".price");
        const quantityElement = row.querySelector(".quantity");
        const subtotalCell = row.querySelector(".subtotal");
  
        const price = parseFloat(priceElement.innerText.replace("Price: $", ""));
        const quantity = parseInt(quantityElement.innerText);
        const subtotal = price * quantity;
  
        subtotalCell.innerText = `$${subtotal.toFixed(2)}`;
        total += subtotal;
      });
  
      totalDisplay.innerText = `$${total.toFixed(2)}`;
    }
  
    plusButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const quantityElem = button.previousElementSibling;
        let quantity = parseInt(quantityElem.innerText);
        quantity++;
        quantityElem.innerText = quantity;
        updateTotal();
      });
    });
  
    minusButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const quantityElem = button.nextElementSibling;
        let quantity = parseInt(quantityElem.innerText);
        if (quantity > 1) {
          quantity--;
          quantityElem.innerText = quantity;
          updateTotal();
        }
      });
    });
  
    // Initial update on page load
    updateTotal();
  });
  