$(document).ready(function(){
 $('.my-portfolio').slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow:'.slidPrv',
  nextArrow:'.slidNext',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

   $('.venobox').venobox(); 

   $('.box').backgroundMove({
  movementStrength:'50'});

   $('.nav-link').click(function(){
        $('.nav-link').removeClass('nav-item active');
        $(this).addClass('nav-item active');

      });
   var typed = new Typed('.typing', {
    strings: ["Creative Frontend Developer.","Web Designer."],
    loop:true,

   typeSpeed: 80,
   backSpeed: 50,
   backDelay: 1000,
  });


   
});