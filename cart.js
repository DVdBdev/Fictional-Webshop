const cart = [];
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotal = document.getElementById("cart-total");

function addToCart(product) {
    const existingProduct = cart.find(item => item.title === product.title);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = "";
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.title} x${item.quantity} - €${item.price * item.quantity}`;
        cartItemsContainer.appendChild(listItem);
    });
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = totalPrice.toFixed(2);
}

document.querySelectorAll(".addtocart").forEach((button, index) => {
    button.addEventListener("click", () => {
        const productCard = button.closest(".product-card");
        const product = {
            title: productCard.querySelector(".product-title").textContent,
            price: parseFloat(productCard.querySelector(".product-price").textContent.replace("€", "")),

        };
        addToCart(product);
    });
});