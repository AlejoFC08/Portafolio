// Obtener el botón de menú hamburguesa y el menú de navegación
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul.nav-list');

// Agregar un evento de clic para el botón de menú hamburguesa
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active'); // Añadir/quitar la clase "active"
});
