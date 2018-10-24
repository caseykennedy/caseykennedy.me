const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    cache = require('../utilities/cache');

function $$(el) {

    const selectors = {
        $window: $(window),
        $main: cache.get('#main'),
        $main: cache.get('#header'),
        $footer: cache.get('#footer')
    };

    return selectors[el];

}

function init() {

    if (!$$('$footer').length || !$$('$main').length) {
        return;
    }

    const headerHeight = $$('$header').outerHeight(),
        winHeight = $$('$window').outerHeight(),
        winPosBottom = ($$('$window').scrollTop() + winHeight),
        mainHeight = $$('$main').outerHeight();

    if (winPosBottom >= mainHeight) {

        if (winPosBottom >= mainHeight + (winHeight - headerHeight)) {

            // When footer height is greater than window height
            if (($$('$footer') <= winHeight) {
                $$('$footer').addClass('is-fixed');
            }

        } else {

            $$('$footer').removeClass('is-fixed');
            $$('$header').removeClass('is-highlighted');

        }

    }

}

global.addEventListener('resize', () => {
    init();
});

global.addEventListener('orientationchange', () => {
    init();
});

global.addEventListener('scroll', () => {
    init();
});

module.exports = init;
