//menu expanded
(function () {

    var menu = {
        menuBtn: document.querySelector('.menu-btn'),
        navbar: document.querySelector('.navbar'),

        doToggle: function (event) {
            event.preventDefault();
            this.menuBtn.classList.toggle('expanded');
            this.navbar.classList.toggle('expanded');
        }
    };

    menu.menuBtn.addEventListener('click', function (event) {
        menu.doToggle(event);
    });
}());