document.addEventListener("DOMContentLoaded", function () {
    const dropdownCheckbox = document.getElementById("dropdown");
    const dropdownMenu = document.querySelector(".section-dropdown");
    const dropdownLinks = document.querySelectorAll(".section-dropdown a");

    dropdownCheckbox.addEventListener("change", function () {
        if (dropdownCheckbox.checked) {
            dropdownMenu.style.opacity = "1";
            dropdownMenu.style.pointerEvents = "auto";
            dropdownMenu.style.transform = "translateY(0)";
        } else {
            dropdownMenu.style.opacity = "0";
            dropdownMenu.style.pointerEvents = "none";
            dropdownMenu.style.transform = "translateY(20px)";
        }
    });

    dropdownLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            dropdownCheckbox.checked = false;
            dropdownMenu.style.opacity = "0";
            dropdownMenu.style.pointerEvents = "none";
            dropdownMenu.style.transform = "translateY(20px)";
            dropdownCheckbox.nextElementSibling.textContent = this.textContent;
        });
    });
});
