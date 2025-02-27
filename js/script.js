// external js

// this function is used put time in the website 
function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // Format: MM/DD/YYYY, HH:MM:SS
    document.getElementById("datetime").innerHTML = formattedDateTime;
}
setInterval(updateDateTime, 1000); // Updates every second
updateDateTime(); // Initial call to display time immediately

// this is for the popup of the add to cart and adding the item count to cart
function showPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "flex"; // Change from "block" to "flex" to center the popup

    // Retrieve the cart count from localStorage (default to 0 if not found)
    let cartCount = localStorage.getItem("cartCount") || 0;
    cartCount = parseInt(cartCount) + 1; // Convert to number and increment

    // Save the updated count back to localStorage
    localStorage.setItem("cartCount", cartCount);

    // Hide the popup after 2 seconds
    setTimeout(function () {
        popup.style.display = "none";
    }, 2000);
}
