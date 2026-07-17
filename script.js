console.log("JavaScript is working");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});