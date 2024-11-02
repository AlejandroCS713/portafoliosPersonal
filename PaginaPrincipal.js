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

// Función para mostrar solo la sección seleccionada
function showSection(sectionId) {
    const sections = document.querySelectorAll("main section"); // Selecciona todas las secciones en el main
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add("active"); // Añade la clase 'active' a la sección actual
        } else {
            section.classList.remove("active"); // Remueve 'active' de otras secciones
        }
    });
}

// Agregar eventos de clic a los enlaces de navegación
const navLinks = document.querySelectorAll("nav ul li a"); // Selecciona todos los enlaces en el nav
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que el enlace se comporte de forma predeterminada
        const targetSection = link.getAttribute("data-target"); // Obtiene el valor de data-target
        showSection(targetSection); // Muestra la sección deseada
    });
});

// Mostrar la primera sección al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    showSection("sobre-mi"); // Muestra "Sobre Mí" como sección inicial
});

// URL del perfil de GitHub
const githubUsername = 'AlejandroCS713';
const followersCountElement = document.getElementById('github-followers');

// Función para obtener el número de seguidores de GitHub
async function getGitHubFollowers() {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`);
        const data = await response.json();
        if (data && data.followers !== undefined) {
            followersCountElement.textContent = data.followers;
        } else {
            console.error('No se pudo obtener el número de seguidores.');
        }
    } catch (error) {
        console.error('Error al obtener el número de seguidores:', error);
    }
}

// Llamar a la función cuando se carga la página
window.onload = getGitHubFollowers;