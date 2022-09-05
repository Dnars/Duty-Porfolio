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

const getDetails = () => {
    CASESTUDY.style.display = 'none';
    CASESTUDY.style.visibility = 'hidden';
    COMINGSOONSECTION.style.display = 'none';
    COMINGSOONSECTION.style.visibility = 'hidden';

    CONTENTDIV.appendChild(content);

    // SCROLL BUTTON
    const scrBtnDiv = document.querySelector('.scroll-to-top');

    const displayScrollBtn = () => {
        if (window.scrollY > 1000) {
            // scrBtnDiv.classList.remove('no-scroll');
            scrBtnDiv.classList.add('active-scroll');
        } else {
            scrBtnDiv.classList.remove('active-scroll');
            // scrBtnDiv.classList.add('no-scroll');
        }
    };

    // GET SCROLL BAR ELEMENT
    window.addEventListener('scroll', displayScrollBtn)

    // SCROLL TO TOP
    scrBtnDiv.addEventListener('click', scrolToTop);
}

const goToCaseStudy = () => location.href = '/caseStudy page/caseStudy.html';

// document.addEventListener('load', scrolToTop);

window.addEventListener('scroll', NAVBOXSHADOW);