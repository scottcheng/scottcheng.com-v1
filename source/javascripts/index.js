$(function() {

  var $crclWrappers = $('.crcl-wrapper')
    , $crcls = $('.crcl')
    , $window = $(window)
    , $name = $('#name');

  var resize = function() {
    // Fix the circle sizes
    var crclWrapperWidth = $crclWrappers.width();
    if (!$crclWrappers.hasClass('expand')) {
      $crclWrappers.height(crclWrapperWidth);
      $crcls
        .width(crclWrapperWidth * 2)
        .height(crclWrapperWidth * 2);
    }

    // Change font size of #name
    var windowWidth = $window.width();
    if (windowWidth <= 1280 && windowWidth >= 1122) {
      $name.css('fontSize', '3.6em')
    } else {
      $name.css('fontSize', '4.2em')
    }
  };
  resize();
  $window.resize(function() {
    resize();
  });

  // Text hover effect
  $('#name, #links').hover(function() {
    $crclWrappers.toggleClass('expand');
  });
});