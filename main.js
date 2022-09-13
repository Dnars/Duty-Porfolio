const NAV = document.querySelector('nav');
const CASESTUDY = document.querySelector('.csdy');
const COMINGSOONSECTION = document.querySelector('.coming-soon-sect.main');
const CONTENTDIV = document.querySelector('.case-study-content');

const scrolToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const NAVBOXSHADOW = () => window.scrollY > 0 ? NAV.classList.add('b-shadow') : NAV.classList.remove('b-shadow');



const goToCaseStudy = (val) => {
    location.href = `/case studies/${val}.html`;
};

// document.addEventListener('load', scrolToTop);

window.addEventListener('scroll', NAVBOXSHADOW);