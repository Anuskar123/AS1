document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const topnav = document.querySelector('.topnav');

    menuToggle.addEventListener('click', function() {
        topnav.classList.toggle('responsive');
    });
});