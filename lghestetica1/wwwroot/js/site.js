function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    const icon = document.getElementById("menuIcon");

    menu.classList.toggle("show");

    // Hide or show the icon based on dropdown state
    if (menu.classList.contains("show")) {
        icon.style.display = "none";
    } else {
        icon.style.display = "inline";
    }
}

// Hide menu when clicking outside (set this ONCE)
window.addEventListener('click', function (event) {
    const menu = document.getElementById("dropdownMenu");
    const icon = document.getElementById("menuIcon");
    const menubar = document.querySelector(".menubar");

    if (!menu.contains(event.target) && !menubar.contains(event.target)) {
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            icon.style.display = "inline"; // Show the icon back when hiding the menu
        }
    }
});
