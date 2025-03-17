document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let itemName = this.getAttribute("data-name");
            let itemPrice = parseFloat(this.getAttribute("data-price"));
            let itemImage = this.closest(".product").querySelector("img").getAttribute("src"); // Fix applied

            // Create cart item
            let cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${itemImage}" alt="${itemName}">
                <div class="cart-item-details">
                    <h4>${itemName}</h4>
                    <p>$${itemPrice}</p>
                </div>
                <button class="remove-item">Remove</button>
            `;

            // Add to cart
            cartItems.appendChild(cartItem);

            // Update total
            total += itemPrice;
            cartTotal.textContent = total.toFixed(2);

            // Remove item function
            cartItem.querySelector(".remove-item").addEventListener("click", function () {
                cartItem.remove();
                total -= itemPrice;
                cartTotal.textContent = total.toFixed(2);
            });
        });
    });
});
