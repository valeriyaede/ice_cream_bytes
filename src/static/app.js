(function () {

  // define a constant so it can be configured easily in the future
  var ICE_CREAM_SELECTOR = "#gallery article";
  var HOVER_CLASS = "hover";
  var ACTIVE_CLASS = "active";

  var iceCreams = $(ICE_CREAM_SELECTOR);

  if (Modernizr.touch == true) {
    // handle events for mobile devices
    iceCreams.on("touchstart", function () {
      $(this).toggleClass(HOVER_CLASS, true);
      $(this).toggleClass(ACTIVE_CLASS, true);
    });
    iceCreams.on("touchend", function () {
      $(this).toggleClass(HOVER_CLASS, false);
      $(this).toggleClass(ACTIVE_CLASS, false);
    });
  } else {
    // handle events for non-touch devices (presumably with a mouse)
    iceCreams.on("mouseenter", function () {
      $(this).toggleClass(HOVER_CLASS, true);
    });
    iceCreams.on("mouseleave", function () {
      $(this).toggleClass(HOVER_CLASS, false);
      $(this).toggleClass(ACTIVE_CLASS, false);
    });
    iceCreams.on("mousedown", function () {
      $(this).toggleClass(ACTIVE_CLASS, true);
    });
    iceCreams.on("mouseup", function () {
      $(this).toggleClass(ACTIVE_CLASS, false);
    });
  }

})() // IIFE: Immediately-Invoked Function Expression
