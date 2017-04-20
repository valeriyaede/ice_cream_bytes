(function () {

  // define a constant so it can be configured easily in the future
  var ICE_CREAM_SELECTOR = "#gallery article";
  var HOVER_CLASS = "hover";
  var ACTIVE_CLASS = "active";

  var iceCreams = $(ICE_CREAM_SELECTOR);

  if (Modernizr.touch == true) {
    // set up scope
    var timeout, activeElement;
    // handle events for mobile devices
    iceCreams.on("touchstart", function () {
      // scope
      var element = this;
      var $element = $(element);
      // handle the active element
      if (activeElement == element) {
        return;
      } else if (activeElement) {
        $(activeElement).toggleClass(HOVER_CLASS, false);
        // start timeout to set active element
        timeout = setTimeout(function () {
          activeElement = element;
          timeout = undefined;
        }, 500);
      }
      // handle the hover and active states
      $element.toggleClass(HOVER_CLASS, true);
      $element.toggleClass(ACTIVE_CLASS, true);
    });
    iceCreams.on("touchend", function () {
      // clear timeout for persisting hover state
      if (timeout) clearTimeout(timeout);
      timeout = undefined;
      // affect the DOM
      var element = this;
      var $element = $(element);
      $element.toggleClass(HOVER_CLASS, false);
      $element.toggleClass(ACTIVE_CLASS, false);
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
