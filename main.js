const NAV = document.querySelector('nav');
const navDiv = document.querySelector('.my-hamburger');
const showNavDiv = document.querySelector('.shownav');


const showNav = (val) => {
    if(val === 'show') showNavDiv.classList.add('show');
    if(val === 'close') showNavDiv.classList.remove('show');
}

const scrolToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const NAVBOXSHADOW = () => window.scrollY > 0 ? NAV.classList.add('b-shadow') : NAV.classList.remove('b-shadow');



const goBackToCaseStudy = () => {
    location.href = '/case study/casestudy.html';
};

const goToCaseStudy = (val) => {
    location.href = `/case studies/${val}.html`;
};

// document.addEventListener('load', scrolToTop);

window.addEventListener('scroll', NAVBOXSHADOW);