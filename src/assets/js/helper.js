// @codekit-prepend "tiny-slider.min.js";


$(document).ready(function() {
  
// ================================
// background image
// ================================

$(".bg-img").each(function() {
   var img = $(this).find("img")[0];
  if (img !== undefined && img.getAttribute("src") !== undefined) {
    $(this).css({
      "background-image": "url(" + img.getAttribute("src") + ")"
    });
    img.parentNode.removeChild(img);
  }
})


var slider = tns({

   autoplay: true,
   container: '.hero-slider',
   items: 1,
   animateDelay: '10000',
   speed: '1000',
   slideBy: 'page',
   mode: 'gallery',
   nav: 'true',
   gutter: 0,
   mouseDrag: false,
   controlsText: ['&#XF053;', '&#XF054;'],
   controlsPosition: 'bottom',
   nav: true,
   loop: true,
   autoplayButtonOutput: false
});

  $(".sticky-header button.hamburger").on("click", function () {
    $(this).addClass('active');
    $(".body-overlay, #sidecar, #sidecar .close").addClass('active');
    $('body').addClass('locked');
  });

  $("#sidecar .close, .body-overlay").on('click', function () {
    $(this).removeClass('active');
    $(".body-overlay, #sidecar, #sidecar .close").removeClass('active');
    $('body').removeClass('locked');
  })





$(window).on("resize load", function() {
  if ($(window).width() > 768) {
    $("#sidecar").css("margin-left", "calc(-"+($("#sidecar").outerWidth())+"px/2)");
  } else {
    $("#sidecar").css("margin-left", "calc(-"+($("#sidecar").outerWidth())+"px/2)");
  }
});

});
