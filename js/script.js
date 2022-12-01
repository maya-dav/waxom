$(function(){

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

var mixer = mixitup('.lat_img');


$(window).on("load",function(){
  $(".preloader").delay(500).fadeOut(500);
})


new VenoBox({
  selector: ".my-link"
});

new VenoBox({
  selector: ".momota"
});

$('.recent_main').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1000,
});



})








