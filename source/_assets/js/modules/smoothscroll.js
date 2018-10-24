const SmoothScroll = require('smoothscroll-for-websites')

function init() {

  SmoothScroll({

    // Scrolling Core
    animationTime    : 600, // [ms]
    stepSize         : 300, // [px]

    // Acceleration
    accelerationDelta : 20,  // 50
    accelerationMax   : 3,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 300,    // [px]

  })

}

module.exports = init;
