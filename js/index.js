const openMenu = document.getElementById('data-open-menu');
const closeMenu = document.getElementById('data-close-menu');
const navList = document.querySelector('.nav-list');


closeMenu.addEventListener('click', () => {
    navList.classList.toggle('hide')
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
})

openMenu.addEventListener('click', () => {
    navList.classList.toggle('hide')
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
})
