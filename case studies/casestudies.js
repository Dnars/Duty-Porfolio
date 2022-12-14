// SCROLL BUTTON
const scrBtnDiv = document.querySelector('.scroll-to-top');
const scrBtn = document.querySelector('.scroll');

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
scrBtn.addEventListener('click', scrolToTop);