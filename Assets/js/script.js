AOS.init();



$(window).scroll(function(){
    $(".container").css("opacity", 1 - $(window).scrollTop() / 550);
    $(".header").css("opacity", -1 + $(window).scrollTop() / 350)
    
  });