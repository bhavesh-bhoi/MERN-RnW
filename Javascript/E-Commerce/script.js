const form = document.getElementById("productForm");
const grid = document.getElementById("productGrid");
const error = document.getElementById("error");
const cartBox = document.getElementById("cart");
const cartItemsDiv = document.getElementById("cartItems");
const totalProductsEl = document.getElementById("totalProducts");
const totalPriceEl = document.getElementById("totalPrice");

let products = JSON.parse(sessionStorage.getItem("products")) || [];
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

displayProducts();
updateCart();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value.trim();
  const category = document.getElementById("category").value.trim();
  const description = document.getElementById("description").value.trim();
  const imgFile = document.getElementById("image").files[0];

  if (!name) return showError("Product name is required");
  if (!price || isNaN(price)) return showError("Price must be a number");
  if (description.length < 10)
    return showError("Description must be at least 10 characters");
  if (!imgFile) return showError("Please upload an image");

  const imageURL = URL.createObjectURL(imgFile);

  const product = {
    name,
    price,
    category,
    description,
    image: imageURL,
    qty: 1,
  };

  products.push(product);
  sessionStorage.setItem("products", JSON.stringify(products));

  displayProducts();
  form.reset();
  error.innerHTML = "";
});

function showError(msg) {
  error.innerHTML = msg;
  error.style.color = "red";
}

function displayProducts() {
  grid.innerHTML = "";

  products.forEach((p, index) => {
    const card = `
        <div class="card">
            <img src="${p.image}">
            <div class="name">${p.name}</div>
            <div class="price">₹ ${p.price}</div>
            <p>${p.category}</p>
            <p>${p.description}</p>

            <button onclick="decreaseQty(${index})">-</button>
            <label id="qty-${index}">${p.qty}</label>
            <button onclick="increaseQty(${index})">+</button>

            <br><br>

            <button onclick="addToCart(${index})">Add To Cart</button>
        </div>
      `;
    grid.innerHTML += card;
  });
}

// SIMPLE QUANTITY LOGIC
function increaseQty(i) {
  products[i].qty++;
  sessionStorage.setItem("products", JSON.stringify(products));
  document.getElementById("qty-" + i).innerText = products[i].qty;
}

function decreaseQty(i) {
  if (products[i].qty > 1) {
    products[i].qty--;
    sessionStorage.setItem("products", JSON.stringify(products));
    document.getElementById("qty-" + i).innerText = products[i].qty;
  }
}

// SIMPLE CART
function addToCart(i) {
  const product = products[i];

  cart.push({
    name: product.name,
    price: product.price,
    qty: product.qty,
    image: product.image,
    description: product.description,
  });

  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cartCount = cart.length;
  cartBox.querySelector("strong").innerText = `CART (${cartCount})`;
  renderCart();
}

// Render cart items and totals using your simple logic
function renderCart() {
  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<div>No items in cart.</div>";
    totalProductsEl.innerText = 0;
    totalPriceEl.innerText = 0;
    return;
  }

  let totalProducts = 0;
  let totalPrice = 0;

  cart.forEach((it, idx) => {
    totalProducts += Number(it.qty || 1);
    totalPrice += Number(it.price) * Number(it.qty || 1);

    const itemHTML = document.createElement("div");
    itemHTML.className = "cart-item";
    itemHTML.innerHTML = `
  <div class="cartItemCard">
    <img src="${it.image}">
    <div class="name">${it.name}</div>
    <div class="price">₹ ${it.price} x ${it.qty}</div>
    <p style="font-size:12px; color:#555;">${it.description}</p>
    <button onclick="cancelCartItem(${idx})">Cancel</button>
  </div>
`;

    cartItemsDiv.appendChild(itemHTML);
  });

  totalProductsEl.innerText = totalProducts;
  totalPriceEl.innerText = totalPrice;
}

// Cancel/remove a specific cart item
function cancelCartItem(i) {
  cart.splice(i, 1);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}
