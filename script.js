// Selección de elementos
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul.nav-list');

// Alternar el menú cuando se hace clic en el botón hamburguesa
menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navList.classList.toggle('active');
});

// Cerrar el menú cuando se hace clic en un enlace dentro de él
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!e.target.closest('#mobile-menu') && !e.target.closest('.nav-list')) {
        navList.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});
