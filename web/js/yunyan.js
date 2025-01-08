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


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('thankYouModal');
    const button = document.getElementById('addToCartButton'); // Ensure this matches the button ID in HTML

    // Open the modal
    function openModal() {
        modal.style.display = 'flex'; // Show modal
    }

    // Close the modal
    function closeModal() {
        modal.style.display = 'none'; // Hide modal
    }

    // Attach event listener to the Add to Cart button
    button.addEventListener('click', openModal);

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Attach event listener to the modal close button (if any)
    const closeButton = modal.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
});

