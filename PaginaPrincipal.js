let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

// Navbar: ocultar al bajar, mostrar al subir
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-120px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// Ocultar todas las secciones menos la seleccionada
function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === sectionId) {
            section.classList.add("active");
        }
    });
}

// Agregar eventos de clic a los enlaces de navegación
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el desplazamiento
        const targetSection = link.getAttribute("data-target");
        showSection(targetSection);
    });
});

// Mostrar la primera sección al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    showSection("sobre-mi"); // Muestra "Sobre Mí" como sección inicial
});
