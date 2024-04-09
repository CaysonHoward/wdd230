document.addEventListener('DOMContentLoaded', function() {
    var openMenuButton = document.getElementById('open-menu');
    var menu = document.getElementById('menu');


    openMenuButton.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
