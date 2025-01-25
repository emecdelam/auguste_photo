function menu_clicked() {
    const menuDropdown = document.getElementById("menu-dropdown");
    menuDropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", function (event) {
    const menuDropdown = document.getElementById("menu-dropdown");
    const menuBtn = document.getElementById("menu-btn");

    if (!menuDropdown.contains(event.target) && !menuBtn.contains(event.target)) {
        menuDropdown.classList.remove("show");
    }
});