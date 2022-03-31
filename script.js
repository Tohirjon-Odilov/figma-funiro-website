// TweenMax.defaultEase = Linear.easeOut;
// new fullpage("#fullpage", {
//     autoScrolling: true,
//     navigation: true,
//     // licenseKey: 'YOUR_KEY_HERE'
// });

const menu = document.querySelector('#mobile-menu')
const menuLikns = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLikns.classList.toggle('active');
})
document.querySelector('.input').onclick = function() {
    document.querySelector('.search').style.display = "none"
}

// SPLIDE slider

var splide = new Splide('.splide', {
    // type: 'loop',
    padding: '8rem',
    type: 'loop',
    height: '100vh',
    focus: 'center',
    autoWidth: true,
    arrows: false,
});

splide.mount();



const splide1 = new Splide('.splide1', {
    perPage: 3.5,
    height: '30rem',
    focus: 'center',
    trimSpace: false,
    // arrows: false,
    // breakpoints: {
    //     600: {
    //         perPage: 1,
    //         height: '6rem',
    //     },
    // },
});

splide1.mount();




var splide2 = new Splide('.splide2', {
    perPage: 3,
    rewind: false,



});

splide2.mount();

var splide4 = new Splide('.splide4', {
    type: 'fade',
    rewind: true,
});

splide4.mount();

let sc = 0;

function myFunction() {
    document.getElementById("nav").style.background = "#F9F1E7"
    document.getElementById("nav").style.transition = "all 0.5s"
    sc += 1
    console.log(sc)
}