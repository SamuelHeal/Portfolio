AOS.init();



$(window).scroll(function(){
    $(".container").css("opacity", 1 - $(window).scrollTop() / 550);
    $(".header").css("opacity", -1 + $(window).scrollTop() / 350)
    
  });

const hamburger = document.querySelector(".menuBars");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}