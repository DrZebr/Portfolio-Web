// Function to toggle the menu content visibility
function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    menuContent.classList.toggle("show"); // Toggle the "show" class
}

// Function to hide the menu content when clicking outside of it
window.onclick = function(event) {
    var menuBurgerIcon = document.querySelector('#menuBurgerIcon');
    var menuContent = document.getElementById("menuContent");
    if (event.target != menuBurgerIcon && !menuContent.contains(event.target)) {
        menuContent.classList.remove('show'); // Remove the "show" class
    }
}
