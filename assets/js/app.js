const scrollUp = document.querySelector('.scroll-up');

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

//Nav hamburger menu selections

const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener("click", function() {
    ul.classList.toggle("show");
});

//hide menu after clicking on a link
const navLinkArray = document.querySelectorAll('.nav-link');

navLinkArray.forEach(element => {
    element.addEventListener("click", () => {
    ul.classList.remove("show");
    })
});