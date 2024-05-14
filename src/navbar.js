const hamburgerIcon = document.querySelector('#hamburger-icon');
const navbar = document.querySelector('.navbar');

const eventListener = () => {
    hamburgerIcon.addEventListener("click", () => {
        hamburgerIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    })
}

export default eventListener;