const helpers = {

    debounce(func, wait, immediate) {
        let timeout;
        return function () {
            const context = this,
                args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            const callNow = immediate && !timeout;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    },

    domReady(fn) {

        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }

    },

    hasAudio(video) {
        // Will return a truthy / falsy value. Not necessarily true or false type.
        return video.mozHasAudio || !!video.webkitAudioDecodedByteCount || video.audioTracks && !!video.audioTracks.length;
    },

    sortByAttr($items, attr) {

        if (!$items.length || !attr.length) {
            return;
        }

        return $items.sort((a, b) => (a.getAttribute(attr) - b.getAttribute(attr)));

    },

    removeClass(items, attr) {

        const els = items;

        for (let i = 0; i < els.length; i++) {
            els[i].classList.remove(attr);
        }

    },

    removeAttribute(items, attr) {

        const els = items;

        for (let i = 0; i < els.length; i++) {
            els[i].removeAttribute(attr);
        }

    },

    hash(str) {

        let hash = 0,
            i,
            chr,
            len;

        if (!str.length) {
            throw new Error('A string greater than 0 in length must be passed.');
        }

        for (i = 0, len = str.length; i < len; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }

        return Math.abs(hash);

    }

};

module.exports = helpers;
