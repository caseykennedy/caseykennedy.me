const $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

const cache = {

    get(selector) {

        const el = selector.trim();

        if (!el.length) {
            return;
        }

        global.website = global.website || {};
        global.website.cache = global.website.cache || {};

        if (!global.website.cache.hasOwnProperty(el)) {
            global.website.cache[el] = $(el);
            global.website.cache[el].requested = 1;
        }

        global.website.cache[el].requested = global.website.cache[el].requested + 1;

        const $el = global.website.cache[el];

        return $el;

    },

    list() {

        if (!global.website.cache) {
            return;
        }

        return global.website.cache;

    },

    clear() {

        if (global.hasOwnProperty('website')) {
            if (global.website.hasOwnProperty('cache')) {
                global.website.cache = undefined;
            }
        }

        return;

    }

};

module.exports = cache;
