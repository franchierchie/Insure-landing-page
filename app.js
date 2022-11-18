const main = document.querySelector('main');
const footer = document.querySelector('footer');

const navMenu = document.querySelector('.nav-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');



const hamburgerMenu = () => {
    main.classList.toggle('hidden');
    footer.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');

    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
}



hamburgerIcon.addEventListener('click', hamburgerMenu);
closeIcon.addEventListener('click', hamburgerMenu);