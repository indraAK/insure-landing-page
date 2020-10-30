const menu = document.getElementById('toggle-menu');
const navOverlay = document.getElementById('nav-overlay');

menu.addEventListener('click', function () {
   this.classList.toggle('active');
   navOverlay.classList.toggle('open');
});