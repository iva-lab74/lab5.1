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

  updateTotalPrice(-(price*quantity));
  item.remove();
}


//Add items to their cart dynamically
addProductButton.addEventListener('click', () => {
const name = productNameInput.value;
const price = parseFloat(productPriceInput.value);

//remembering
const newProduct = document.createElement('li');
newProduct.innerHTML = '<button class="add-to-cart">Add to Cart</button>';
cart.appendChild(newProduct);
updateTotalPrice();

 productNameInput.value = '';
 productPriceInput.value = '';
});

// for (let i = 0; i < 5; i++) {
// const li = document.createElement('li');
// li.textContent = 'Item ' + (list.children.length + i + 1);
// fragment.appendChild(li);
// }



//View the items they have added, along with their prices and quantities.


//Update the quantity of items in the cart, reflecting real-time price changes.

//Remove items from the cart.