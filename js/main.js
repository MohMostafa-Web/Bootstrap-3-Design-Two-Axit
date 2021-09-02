$(document).ready(function () {
// make navbar trasparent while scrolling ()
  $(window).on("scroll", function () {
    const navbar = $(".navbar");
    if ($(this).scrollTop() >= navbar.height()) {
      if (!navbar.hasClass("transparent")) {
        navbar.addClass("transparent");
      }
    } else {
      navbar.removeClass("transparent");
    }
  });
// When click on .tab-switch li
  $(".tab-switch li").on("click", function () {
    // Add Class "selected" to to li and Remove Class "selected" from others
    $(this).addClass("selected").siblings().removeClass("selected");
    // Hide all .tabs-content > div
    $(".tabs-content > div").hide();
    // Show div which has className same as data-target
    $($(this).data("target")).fadeIn(500);
  });
});