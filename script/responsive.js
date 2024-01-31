let header = document.querySelector('header');
let nav = document.querySelector('nav');
let buttons = document.querySelectorAll('.nav-button');

function screenAdapt() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    if(screenWidth>screenHeight) {
        //on est sur un pc
        header.classList.remove('header-mobile');
        header.classList.add('header-desktop');
        nav.classList.remove('nav-mobile');
        nav.classList.add('nav-desktop');

        buttons.forEach(element => {
            element.classList.remove('nav-button-mobile');
            element.classList.add('nav-button-desktop');
        });
    } else {
        //on est sur un mobile
        header.classList.add('header-mobile');
        header.classList.remove('header-desktop');
        nav.classList.add('nav-mobile');
        nav.classList.remove('nav-desktop');

        buttons.forEach(element => {
            element.classList.add('nav-button-mobile');
            element.classList.remove('nav-button-desktop');
        });

    }
}

screenAdapt()

window.addEventListener('resize',screenAdapt);