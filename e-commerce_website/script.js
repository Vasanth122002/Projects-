let cart = [];
let wishlist = [];
let recentlyViewed = [];
let user = null;

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  addToRecentlyViewed(name);
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = `Total: $${total}`;
  document.getElementById("cart-button").textContent = `Cart (${cart.length})`;
}

function addToWishlist(name, price) {
  wishlist.push({ name, price });
  updateWishlist();
}

function updateWishlist() {
  const wishlistItems = document.getElementById("wishlist-items");
  wishlistItems.innerHTML = "";

  wishlist.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    wishlistItems.appendChild(li);
  });

  document.getElementById(
    "wishlist-button"
  ).textContent = `Wishlist (${wishlist.length})`;
}

function filterProducts() {
  const search = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("category-filter").value;
  const size = document.getElementById("size-filter").value;

  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    const name = product.getAttribute("data-name").toLowerCase();
    const cat = product.getAttribute("data-category");
    const stock = product.getAttribute("data-stock");

    if (
      (name.includes(search) || search === "") &&
      (cat.includes(category) || category === "") &&
      (size === "" || stock > 0)
    ) {
      product.style.display = "inline-block";
    } else {
      product.style.display = "none";
    }
  });
}

function showDetails(name, price, description) {
  document.getElementById("modal-title").textContent = name;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal-price").textContent = `Price: $${price}`;
  document.getElementById("modal-add-cart").onclick = function () {
    addToCart(name, price);
    closeModal();
  };
  document.getElementById("product-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

function toggleCart() {
  const cartSection = document.getElementById("cart");
  cartSection.classList.toggle("hidden");
}

function toggleWishlist() {
  const wishlistSection = document.getElementById("wishlist");
  wishlistSection.classList.toggle("hidden");
}

function addReview(productName) {
  const review = prompt(`Add your review for ${productName}:`);
  alert(`Review for ${productName}: "${review}" added!`);
}

function toggleLogin() {
  document.getElementById("login-modal").style.display = "block";
}

function closeLoginModal() {
  document.getElementById("login-modal").style.display = "none";
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  alert(`Logged in as ${username}`);
  user = username; // Store the user
  closeLoginModal();
}

function toggleRegister() {
  document.getElementById("register-modal").style.display = "block";
}

function closeRegisterModal() {
  document.getElementById("register-modal").style.display = "none";
}

function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;
  alert(`Registered as ${username}`);
  closeRegisterModal();
}

function applyDiscount() {
  const code = document.getElementById("discount-code").value;
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  if (code === "SAVE10") {
    total *= 0.9; // Apply 10% discount
  }
  alert(`Total after discount: $${total}`);
}

function checkout() {
  alert("Proceeding to checkout...");
}

function addToRecentlyViewed(name) {
  if (!recentlyViewed.includes(name)) {
    recentlyViewed.push(name);
    updateRecentlyViewed();
  }
}

function updateRecentlyViewed() {
  const recentlyViewedItems = document.getElementById("recently-viewed-items");
  recentlyViewedItems.innerHTML = "";
  recentlyViewed.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    recentlyViewedItems.appendChild(li);
  });
}

function subscribe() {
  const email = document.getElementById("email").value;
  alert(`Subscribed with email: ${email}`);
}

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  answer.classList.toggle("hidden");
}

function submitFeedback() {
  const feedback = document.getElementById("feedback-text").value;
  alert(`Feedback submitted: "${feedback}"`);
}

document.addEventListener("DOMContentLoaded", () => {
  filterProducts(); // Initial filter
});
