require('./plugins/iconic.min.js');

const helpers = require('./utilities/helpers'),
      cache   = require('./utilities/cache');

function getModules() {

    const modules = {
        header: require('./modules/header.js'),
        overlay: require('./modules/overlay.js'),
        lazyload: require('./modules/lazyload.js'),
        smoothscroll: require('./modules/smoothscroll.js'),
        animatescroll: require('./modules/animatescroll.js'),
        parallax: require('./modules/parallax.js')
    };

    return modules;

}

function framework(e) {

    const reload = e || false,
        modules = getModules();

    if (reload && reload === 'reload') {
        cache.clear();
    }

    const app = {

        init() {

            for (const module in modules) {
                if ({}.hasOwnProperty.call(modules, module)) {
                    modules[module]();
                }
            }

        }

    };

    helpers.domReady(app.init);

}

module.exports = framework;
