// Selecciona el botón de menú y el elemento .nav
const menuButton = document.querySelector('.nav__hamburguer');
const nav = document.querySelector('.nav');

// Agrega un evento de clic al botón de menú
menuButton.addEventListener('click', () => {
    // Cambia la clase del elemento .nav
    nav.classList.toggle('active');
    
    // Agrega o elimina la clase active del botón de menú
    menuButton.classList.toggle('active');
});