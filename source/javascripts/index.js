$(function() {
  var $crclWrappers = $('.crcl-wrapper')
    , $crcls = $('.crcl')
    , $window = $(window)
    , $name = $('#name')
    , $links = $('#links');

  var resize = function() {
    var windowWidth = $window.width();

    // Fix the circle sizes
    var crclWrapperWidth = windowWidth * 0.3;
    $crclWrappers.width(crclWrapperWidth);
    if (!$crclWrappers.hasClass('expand')) {
      $crclWrappers.height(crclWrapperWidth);
      $crcls
        .width(crclWrapperWidth * 2)
        .height(crclWrapperWidth * 2);
    }

    // Change font size of #name
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

  // Circle expansion effect
  $links.hover(function() {
    $crclWrappers.toggleClass('expand');
  });
});