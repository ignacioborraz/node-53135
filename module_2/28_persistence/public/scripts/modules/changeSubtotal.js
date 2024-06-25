import products from "../data/products.js";

export default function changeSubtotal(event, id) {
  const value = event.target.value;
  fetch("/api/products/" + id)
    .then((response) => response.json())
    .then((response) => {
      const subtotal = response.response.price * value;
      const priceSelector = document.querySelector("#price");
      priceSelector.innerHTML = "$" + subtotal;
    });
}
