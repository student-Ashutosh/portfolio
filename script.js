
/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec=>{
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +' ]').classList.add('active');
            });
        };
        
    });
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*========== sticky navbar ==========*/


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const description = this.previousElementSibling;

            if (description.classList.contains("expanded")) {
                description.classList.remove("expanded");
                this.textContent = "Read More";
            } else {
                description.classList.add("expanded");
                this.textContent = "Read Less";
            }
        });
    });
});



/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-bx, .testimonial-wrapper, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'});


const circles =document.querySelectorAll('.circle');
circles.forEach(elem =>{ 
    var dots =elem.getAttribute("data-dots");
    var marked =elem.getAttribute("data-percent");  
    var percent =  Math.floor(dots*marked/100);
    var points ="";
    var rotate = 360/dots;

    for(let i=0; i<dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})
