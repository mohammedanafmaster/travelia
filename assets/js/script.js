// Preloader
const preloader = document.querySelector("[data-preloader]");

window.onload = () => {
    preloader.classList.add("remove");
}

// Add event on multiple elements
const addEventOnElements = (elements, eventType, callback) => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

// Header
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const header = document.querySelector("[data-header]");

const navToggle = () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    docuument.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", navToggle);

window.onscroll = () => {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
}
