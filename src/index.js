import './styles/main.scss'
import eventListener from './navbar'

eventListener();

//SCROLL REVEAL

ScrollReveal({
    distance: '80%',
    duration: 1000,
    delay: 100,
    easing: 'ease'
})

ScrollReveal().reveal('.home-content', {origin: 'top'});
ScrollReveal().reveal('.home-img, .projects-container, .contact', {origin: 'bottom'});
ScrollReveal().reveal('.about-container, .learned', {origin:"left"});
ScrollReveal().reveal('.about-experience, .learning', {origin: "right"});

//TYPED JS

const typed = new Typed(".typed-text", {
    strings: [" am a Junior Web Developer", "love to code"],
    typeSpeed: 50,
    backSpeed: 50 ,
    backDelay: 2000,
    loop: true
})