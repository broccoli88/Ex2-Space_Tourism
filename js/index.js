const openMenu = document.getElementById('data-open-menu');
const closeMenu = document.getElementById('data-close-menu');
const navList = document.querySelector('.nav-list');


closeMenu.addEventListener('click', () => {
    navList.classList.toggle('hide')
    closeMenu.classList.toggle('hamburger-visible')
    openMenu.classList.toggle('hamburger-visible')

})

openMenu.addEventListener('click', () => {
    navList.classList.toggle('hide')
    closeMenu.classList.toggle('hamburger-visible')
    openMenu.classList.toggle('hamburger-visible')
})
