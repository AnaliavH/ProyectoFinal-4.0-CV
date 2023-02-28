
const navToggle= document.querySelector(".nav-toggle");
const navMenu= document.querySelector(".nav-menu");

function toggleMenu() {
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
}

navToggle.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", toggleMenu);
  })
