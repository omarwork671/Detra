var TIMEOUT = 7000;
 
var interval = setInterval(handleNext, TIMEOUT);
 
function handleNext() {
 
  var $radios =             $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');
 
  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;
 
  $radios
    .attr('checked', false);
 
  if (currentIndex == radiosLength - 1) {
 
    $radios
      .first()
      .attr('checked', true);
 
  } else {
 
    $activeRadio
      .next('input[class*="slide-radio"]')
      .prop('checked', true);
 
  }
 
}



/* swiper */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },


  
    
});



(function ($) {
  "use strict";

   // Testimonials carousel
   $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav : false,
    responsive: {
        0:{
            items:1
        },
  576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});


})(jQuery);



$(window).on('load',function () {
  // this will fire after the entire page is loaded, including images

  /* Porfolio isotope and filter
  */
  $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  $('.portfolio ul li').click(function () {
    $('.portfolio ul li').removeClass('filter-active');
    $(this).addClass('filter-active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-container').isotope({
      filter: selector
    });
    return false;
  });



  /**
  * Initiate portfolio lightbox 
  */
  const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });


});






/**
   * Back to top button
   */
let backtotop = document.querySelector('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  .addEventListener(document, toggleBacktotop)
}






