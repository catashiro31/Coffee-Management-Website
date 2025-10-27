document.addEventListener("DOMContentLoaded", () => {
  const priceElement = document.getElementById("price");
  const quantityInput = document.getElementById("quantity");
  const totalElement = document.getElementById("total");
  const btnIncrease = document.getElementById("increase");
  const btnDecrease = document.getElementById("decrease");

  const price = parseInt(priceElement.textContent.replace(/\./g, ""));

  function updateTotal() {
    const quantity = Math.max(1, parseInt(quantityInput.value));
    const total = price * quantity;
    totalElement.textContent = total.toLocaleString("vi-VN");
  }

  btnIncrease.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotal();
  });

  btnDecrease.addEventListener("click", () => {
    quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
    updateTotal();
  });

  quantityInput.addEventListener("input", updateTotal);
  updateTotal();
});
