(function () {

  // define a constant so it can be configured easily in the future
  var ICE_CREAM_SELECTOR = "#gallery article";
  var HOVER_CLASS = "hover";
  var ACTIVE_CLASS = "active";

  var iceCreams = $(ICE_CREAM_SELECTOR);

  // handle the hover state
  iceCreams.on("touchstart", function () {
    $(this).toggleClass(HOVER_CLASS, true);
  });
  iceCreams.on("touchend", function () {
    $(this).toggleClass(HOVER_CLASS, false);
    $(this).toggleClass(ACTIVE_CLASS, false);
  });

  // handle the active state
  iceCreams.on("mousedown", function () {
    $(this).toggleClass(ACTIVE_CLASS, true);
  });
  iceCreams.on("mouseup", function () {
    $(this).toggleClass(ACTIVE_CLASS, false);
  });

    // handle the touch state
    iceCreams.on("touchstart", function () {
      $(this).toggleClass(ACTIVE_CLASS, true);
    });
    iceCreams.on("touchend", function () {
      $(this).toggleClass(ACTIVE_CLASS, false);
    });


})() // IIFE: Immediately-Invoked Function Expression
