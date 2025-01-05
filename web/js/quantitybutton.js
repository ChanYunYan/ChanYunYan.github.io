document.addEventListener("DOMContentLoaded", () => {
    const quantityContainer = document.querySelector(".quantitybutton-container");
    const quantityNumber = quantityContainer.querySelector(".quantity-number");

    const minusIcon = quantityContainer.querySelector(".quantity-icon[alt='Minus']");
    const plusIcon = quantityContainer.querySelector(".quantity-icon[alt='Plus']");

    // Parse the current quantity as an integer
    let quantity = parseInt(quantityNumber.textContent);

    // Add click event for minus icon
    minusIcon.addEventListener("click", () => {
        if (quantity > 1) { // Prevent going below 1
            quantity--;
            quantityNumber.textContent = quantity;
        }
    });

    // Add click event for plus icon
    plusIcon.addEventListener("click", () => {
        quantity++;
        quantityNumber.textContent = quantity;
    });
});