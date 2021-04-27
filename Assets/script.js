const searchButton = document.querySelector(".waterBox")
var navbar = document.querySelector(".header");
var sticky = navbar.offsetTop;


searchButton.addEventListener("click", function(){
    $(".hidden").show()
    $("#Projects").hide()
    $("#Contact").hide()
    $("#footer").hide()
    $(".section_style").hide()
    $("#theHeader").removeClass("headerStart")
    $("#theHeader").addClass("headerLink")

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }

})

const aboutBtn = document.querySelector("#aboutBtn")
const projectsBtn = document.querySelector("#projectsBtn")
const contactBtn = document.querySelector("#contactBtn")
const headerBtn = document.querySelector("#theHeader")

headerBtn.addEventListener("click", function(){
    location.reload()
})

aboutBtn.addEventListener("click", function(){
    $("#about").show()
    $("#Projects").hide()
    $("#Contact").hide()
    $("#footer").hide()
})

projectsBtn.addEventListener("click", function(){
    $("#about").hide()
    $("#Projects").show()
    $("#Contact").hide()
    $("#footer").hide()
})

contactBtn.addEventListener("click", function(){
    $("#about").hide()
    $("#Projects").hide()
    $("#Contact").show()
    $("#footer").show()
})

