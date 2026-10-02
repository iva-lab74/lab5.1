const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  const quantity = parseInt(item.dataset.quantity);

  updateTotalPrice(-(price * quantity));
  item.remove();
}


//Add items to their cart dynamically
addProductButton.addEventListener('click', () => {
const pName = productNameInput.value;
const price = parseFloat(productPriceInput.value);

//remembering prices and quantity
const newProduct = document.createElement('li');
newProduct.dataset.price = price;   
newProduct.dataset.quantity = 1; 


//View the items they have added, along with their prices and quantities.
newProduct.innerHTML = `${pName} - $${price.toFixed(2)} each Qty: <input type="number" class="quantity" value="1" min="1"><button class="remove">Remove</button>`;
cart.appendChild(newProduct);
updateTotalPrice(price);

 productNameInput.value = '';
 productPriceInput.value = '';
});


//Update the quantity of items in the cart, reflecting real-time price changes.
cart.addEventListener('input', (event) => {
  if (!event.target.classList.contains('quantity')) return;

  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  const oldQuantity = parseInt(item.dataset.quantity);
  const newQuantity = parseInt(event.target.value);

//editing prices
  updateTotalPrice((newQuantity - oldQuantity) * price);
  item.dataset.quantity = newQuantity; 
});

//Remove items from the cart.
cart.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    removeItem(event);
  }
});