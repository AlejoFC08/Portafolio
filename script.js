// Obtener el botón de menú hamburguesa y el menú de navegación
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul.nav-list');

// Agregar un evento de clic para el botón de menú hamburguesa
menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navList.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
    });
});

document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
    }
});
