/* Footer */
/* Scrolling to top of page */
$('.scroll-to-top').click(function (e) { //scroll is the Anchor in footer
    $('html, body').animate({
        scrollTop: $('.page-wrapper').offset().top //the navbar is a destination class on the page
    }, parseInt($(this).attr("scroll-to-top-time")));
});
  /* End of Footer */