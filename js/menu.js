function menuShow() {
    let show = document.querySelector('.show');
    let navLinks = document.querySelector('.nav__links');
    let menuMenu = document.querySelector('.menu__menu');
    if (show == null) {
        navLinks.classList.add('show');
        menuMenu.classList.add('rotate__90');
    } else {
        navLinks.classList.remove('show');
        menuMenu.classList.remove('rotate__90');
    }

}