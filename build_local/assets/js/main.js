(function (exports) {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var iconic_min = createCommonjsModule(function (module, exports) {
/*!
 * iconic.js v0.4.3 - The Iconic JavaScript library
 * Copyright (c) 2014-2015 Waybury - https://useiconic.com
 */

!function(a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(a):"undefined"!=typeof window?window.IconicJS=a():"undefined"!=typeof commonjsGlobal?commonjsGlobal.IconicJS=a():"undefined"!=typeof self&&(self.IconicJS=a());}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof commonjsRequire&&commonjsRequire;if(!h&&i){ return i(g,!0); }if(f){ return f(g,!0); }throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};a[g][0].call(j.exports,function(b){var c=a[g][1][b];return e(c?c:b)},j,j.exports,b,a,c,d);}return c[g].exports}for(var f="function"==typeof commonjsRequire&&commonjsRequire,g=0;g<d.length;g++){ e(d[g]); }return e}({1:[function(a,b){var c=(a("./modules/polyfills"),a("./modules/svg-injector")),d=a("./modules/extend"),e=a("./modules/responsive"),f=a("./modules/position"),g=a("./modules/container"),h=a("./modules/log"),i={},j=window.iconicSmartIconApis={},k=("file:"===window.location.protocol,0),l=function(a,b,e){b=d({},i,b||{});var f={evalScripts:b.evalScripts,pngFallback:b.pngFallback};f.each=function(a){if(a){ if("string"==typeof a){ h.debug(a); }else if(a instanceof SVGSVGElement){var c=a.getAttribute("data-icon");if(c&&j[c]){var d=j[c](a);for(var e in d){ a[e]=d[e]; }}var f=/iconic-bg-/;f.test(a.getAttribute("class"))&&g.addBackground(a),m(a),k++,b&&b.each&&"function"==typeof b.each&&b.each(a);} }},"string"==typeof a&&(a=document.querySelectorAll(a)),c(a,f,e);},m=function(a){var b=[];a?"string"==typeof a?b=document.querySelectorAll(a):void 0!==a.length?b=a:"object"==typeof a&&b.push(a):b=document.querySelectorAll("svg.iconic"),Array.prototype.forEach.call(b,function(a){a instanceof SVGSVGElement&&(a.update&&a.update(),e.refresh(a),f.refresh(a));});},n=function(){i.debug&&console.time&&console.time("autoInjectSelector - "+i.autoInjectSelector);var a=k;l(i.autoInjectSelector,{},function(){if(i.debug&&console.timeEnd&&console.timeEnd("autoInjectSelector - "+i.autoInjectSelector),h.debug("AutoInjected: "+(k-a)),e.refreshAll(),i.autoInjectDone&&"function"==typeof i.autoInjectDone){var b=k-a;i.autoInjectDone(b);}});},o=function(a){a&&""!==a&&"complete"!==document.readyState?document.addEventListener("DOMContentLoaded",n):document.removeEventListener("DOMContentLoaded",n);},p=function(a){return a=a||{},d(i,a),o(i.autoInjectSelector),h.enableDebug(i.debug),window._Iconic?window._Iconic:{inject:l,update:m,smartIconApis:j,svgInjectedCount:k}};b.exports=p,window._Iconic=new p({autoInjectSelector:"img.iconic",evalScripts:"once",pngFallback:!1,each:null,autoInjectDone:null,debug:!1});},{"./modules/container":2,"./modules/extend":3,"./modules/log":4,"./modules/polyfills":5,"./modules/position":6,"./modules/responsive":7,"./modules/svg-injector":8}],2:[function(a,b){var c=function(a){var b=a.getAttribute("class").split(" "),c=-1!==b.indexOf("iconic-fluid"),d=[],e=["iconic-bg"];Array.prototype.forEach.call(b,function(a){switch(a){case"iconic-sm":case"iconic-md":case"iconic-lg":d.push(a),c||e.push(a.replace(/-/,"-bg-"));break;case"iconic-fluid":d.push(a),e.push(a.replace(/-/,"-bg-"));break;case"iconic-bg-circle":case"iconic-bg-rounded-rect":case"iconic-bg-badge":e.push(a);break;default:d.push(a);}}),a.setAttribute("class",d.join(" "));var f=a.parentNode,g=Array.prototype.indexOf.call(f.childNodes,a),h=document.createElement("span");h.setAttribute("class",e.join(" ")),h.appendChild(a),f.insertBefore(h,f.childNodes[g]);};b.exports={addBackground:c};},{}],3:[function(a,b){b.exports=function(a){return Array.prototype.forEach.call(Array.prototype.slice.call(arguments,1),function(b){if(b){ for(var c in b){ b.hasOwnProperty(c)&&(a[c]=b[c]); } }}),a};},{}],4:[function(a,b){var c=!1,d=function(a){console&&console.log&&console.log(a);},e=function(a){d("Iconic INFO: "+a);},f=function(a){d("Iconic WARNING: "+a);},g=function(a){c&&d("Iconic DEBUG: "+a);},h=function(a){c=a;};b.exports={info:e,warn:f,debug:g,enableDebug:h};},{}],5:[function(){Array.prototype.forEach||(Array.prototype.forEach=function(a,b){"use strict";
var this$1 = this;
if(void 0===this||null===this||"function"!=typeof a){ throw new TypeError; }var c,d=this.length>>>0;for(c=0;d>c;++c){ c in this$1&&a.call(b,this$1[c],c,this$1); }}),function(){if(Event.prototype.preventDefault||(Event.prototype.preventDefault=function(){this.returnValue=!1;}),Event.prototype.stopPropagation||(Event.prototype.stopPropagation=function(){this.cancelBubble=!0;}),!Element.prototype.addEventListener){var a=[],b=function(b,c){var d=this,e=function(a){a.target=a.srcElement,a.currentTarget=d,c.handleEvent?c.handleEvent(a):c.call(d,a);};if("DOMContentLoaded"==b){var f=function(a){"complete"==document.readyState&&e(a);};if(document.attachEvent("onreadystatechange",f),a.push({object:this,type:b,listener:c,wrapper:f}),"complete"==document.readyState){var g=new Event;g.srcElement=window,f(g);}}else { this.attachEvent("on"+b,e),a.push({object:this,type:b,listener:c,wrapper:e}); }},c=function(b,c){
var this$1 = this;
for(var d=0;d<a.length;){var e=a[d];if(e.object==this$1&&e.type==b&&e.listener==c){"DOMContentLoaded"==b?this$1.detachEvent("onreadystatechange",e.wrapper):this$1.detachEvent("on"+b,e.wrapper);break}++d;}};Element.prototype.addEventListener=b,Element.prototype.removeEventListener=c,HTMLDocument&&(HTMLDocument.prototype.addEventListener=b,HTMLDocument.prototype.removeEventListener=c),Window&&(Window.prototype.addEventListener=b,Window.prototype.removeEventListener=c);}}();},{}],6:[function(a,b){var c=function(a){var b=a.getAttribute("data-position");if(b&&""!==b){var c,d,e,f,g,h,i,j=a.getAttribute("width"),k=a.getAttribute("height"),l=b.split("-"),m=a.querySelectorAll("g.iconic-container");Array.prototype.forEach.call(m,function(a){if(c=a.getAttribute("data-width"),d=a.getAttribute("data-height"),c!==j||d!==k){if(e=a.getAttribute("transform"),f=1,e){var b=e.match(/scale\((\d)/);f=b&&b[1]?b[1]:1;}g=Math.floor((j/f-c)/2),h=Math.floor((k/f-d)/2),Array.prototype.forEach.call(l,function(a){switch(a){case"top":h=0;break;case"bottom":h=k/f-d;break;case"left":g=0;break;case"right":g=j/f-c;break;case"center":break;default:console&&console.log&&console.log("Unknown position: "+a);}}),i=0===h?g:g+" "+h,i="translate("+i+")",e?/translate/.test(e)?e=e.replace(/translate\(.*?\)/,i):e+=" "+i:e=i,a.setAttribute("transform",e);}});}};b.exports={refresh:c};},{}],7:[function(a,b){var c=/(iconic-sm\b|iconic-md\b|iconic-lg\b)/,d=function(a,b){var c="undefined"!=typeof window.getComputedStyle&&window.getComputedStyle(a,null).getPropertyValue(b);return!c&&a.currentStyle&&(c=a.currentStyle[b.replace(/([a-z])\-([a-z])/,function(a,b,c){return b+c.toUpperCase()})]||a.currentStyle[b]),c},e=function(a){var b=a.style.display;a.style.display="block";var c=parseFloat(d(a,"width").slice(0,-2)),e=parseFloat(d(a,"height").slice(0,-2));return a.style.display=b,{width:c,height:e}},f=function(){var a="/* Iconic Responsive Support Styles */\n.iconic-property-fill, .iconic-property-text {stroke: none !important;}\n.iconic-property-stroke {fill: none !important;}\nsvg.iconic.iconic-fluid {height:100% !important;width:100% !important;}\nsvg.iconic.iconic-sm:not(.iconic-size-md):not(.iconic-size-lg), svg.iconic.iconic-size-sm{width:16px;height:16px;}\nsvg.iconic.iconic-md:not(.iconic-size-sm):not(.iconic-size-lg), svg.iconic.iconic-size-md{width:32px;height:32px;}\nsvg.iconic.iconic-lg:not(.iconic-size-sm):not(.iconic-size-md), svg.iconic.iconic-size-lg{width:128px;height:128px;}\nsvg.iconic-sm > g.iconic-md, svg.iconic-sm > g.iconic-lg, svg.iconic-md > g.iconic-sm, svg.iconic-md > g.iconic-lg, svg.iconic-lg > g.iconic-sm, svg.iconic-lg > g.iconic-md {display: none;}\nsvg.iconic.iconic-icon-sm > g.iconic-lg, svg.iconic.iconic-icon-md > g.iconic-lg {display:none;}\nsvg.iconic-sm:not(.iconic-icon-md):not(.iconic-icon-lg) > g.iconic-sm, svg.iconic-md.iconic-icon-sm > g.iconic-sm, svg.iconic-lg.iconic-icon-sm > g.iconic-sm {display:inline;}\nsvg.iconic-md:not(.iconic-icon-sm):not(.iconic-icon-lg) > g.iconic-md, svg.iconic-sm.iconic-icon-md > g.iconic-md, svg.iconic-lg.iconic-icon-md > g.iconic-md {display:inline;}\nsvg.iconic-lg:not(.iconic-icon-sm):not(.iconic-icon-md) > g.iconic-lg, svg.iconic-sm.iconic-icon-lg > g.iconic-lg, svg.iconic-md.iconic-icon-lg > g.iconic-lg {display:inline;}";navigator&&navigator.userAgent&&/MSIE 10\.0/.test(navigator.userAgent)&&(a+="svg.iconic{zoom:1.0001;}");var b=document.createElement("style");b.id="iconic-responsive-css",b.type="text/css",b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a)),(document.head||document.getElementsByTagName("head")[0]).appendChild(b);},g=function(a){if(/iconic-fluid/.test(a.getAttribute("class"))){var b,d=e(a),f=a.viewBox.baseVal.width/a.viewBox.baseVal.height;b=1===f?Math.min(d.width,d.height):1>f?d.width:d.height;var g;g=32>b?"iconic-sm":b>=32&&128>b?"iconic-md":"iconic-lg";var h=a.getAttribute("class"),i=c.test(h)?h.replace(c,g):h+" "+g;a.setAttribute("class",i);}},h=function(){var a=document.querySelectorAll(".injected-svg.iconic-fluid");Array.prototype.forEach.call(a,function(a){g(a);});};document.addEventListener("DOMContentLoaded",function(){f();}),window.addEventListener("resize",function(){h();}),b.exports={refresh:g,refreshAll:h};},{}],8:[function(b,c,d){!function(b,e){"use strict";function f(a){a=a.split(" ");for(var b={},c=a.length,d=[];c--;){ b.hasOwnProperty(a[c])||(b[a[c]]=1,d.unshift(a[c])); }return d.join(" ")}var g="file:"===b.location.protocol,h=e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),i=Array.prototype.forEach||function(a,b){
var this$1 = this;
if(void 0===this||null===this||"function"!=typeof a){ throw new TypeError; }var c,d=this.length>>>0;for(c=0;d>c;++c){ c in this$1&&a.call(b,this$1[c],c,this$1); }},j={},k=0,l=[],m=[],n={},o=function(a){return a.cloneNode(!0)},p=function(a,b){m[a]=m[a]||[],m[a].push(b);},q=function(a){for(var b=0,c=m[a].length;c>b;b++){ !function(b){setTimeout(function(){m[a][b](o(j[a]));},0);}(b); }},r=function(a,c){if(void 0!==j[a]){ j[a]instanceof SVGSVGElement?c(o(j[a])):p(a,c); }else{if(!b.XMLHttpRequest){ return c("Browser does not support XMLHttpRequest"),!1; }j[a]={},p(a,c);var d=new XMLHttpRequest;d.onreadystatechange=function(){if(4===d.readyState){if(404===d.status||null===d.responseXML){ return c("Unable to load SVG file: "+a),g&&c("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),c(),!1; }if(!(200===d.status||g&&0===d.status)){ return c("There was a problem injecting the SVG: "+d.status+" "+d.statusText),!1; }if(d.responseXML instanceof Document){ j[a]=d.responseXML.documentElement; }else if(DOMParser&&DOMParser instanceof Function){var b;try{var e=new DOMParser;b=e.parseFromString(d.responseText,"text/xml");}catch(f){b=void 0;}if(!b||b.getElementsByTagName("parsererror").length){ return c("Unable to parse SVG file: "+a),!1; }j[a]=b.documentElement;}q(a);}},d.open("GET",a),d.overrideMimeType&&d.overrideMimeType("text/xml"),d.send();}},s=function(a,c,d,e){var g=a.getAttribute("data-src")||a.getAttribute("src");if(!/\.svg/i.test(g)){ return e("Attempted to inject a file with a non-svg extension: "+g),void 0; }if(!h){var j=a.getAttribute("data-fallback")||a.getAttribute("data-png");return j?(a.setAttribute("src",j),e(null)):d?(a.setAttribute("src",d+"/"+g.split("/").pop().replace(".svg",".png")),e(null)):e("This browser does not support SVG and no PNG fallback was defined."),void 0}-1===l.indexOf(a)&&(l.push(a),a.setAttribute("src",""),r(g,function(d){if("undefined"==typeof d||"string"==typeof d){ return e(d),!1; }var h=a.getAttribute("id");h&&d.setAttribute("id",h);var j=a.getAttribute("title");j&&d.setAttribute("title",j);var m=[].concat(d.getAttribute("class")||[],"injected-svg",a.getAttribute("class")||[]).join(" ");d.setAttribute("class",f(m));var o=a.getAttribute("style");o&&d.setAttribute("style",o);var p=[].filter.call(a.attributes,function(a){return/^data-\w[\w\-]*$/.test(a.name)});i.call(p,function(a){a.name&&a.value&&d.setAttribute(a.name,a.value);});var q,r,s,t,u,v={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(v).forEach(function(a){q=a,s=v[a],r=d.querySelectorAll("defs "+q+"[id]");for(var b=0,c=r.length;c>b;b++){t=r[b].id,u=t+"-"+k;var e;i.call(s,function(a){e=d.querySelectorAll("["+a+'*="'+t+'"]');for(var b=0,c=e.length;c>b;b++){ e[b].setAttribute(a,"url(#"+u+")"); }}),r[b].id=u;}}),d.removeAttribute("xmlns:a");for(var w,x,y=d.querySelectorAll("script"),z=[],A=0,B=y.length;B>A;A++){ x=y[A].getAttribute("type"),x&&"application/ecmascript"!==x&&"application/javascript"!==x||(w=y[A].innerText||y[A].textContent,z.push(w),d.removeChild(y[A])); }if(z.length>0&&("always"===c||"once"===c&&!n[g])){for(var C=0,D=z.length;D>C;C++){ new Function(z[C])(b); }n[g]=!0;}var E=d.querySelectorAll("style");i.call(E,function(a){a.textContent+="";}),a.parentNode.replaceChild(d,a),delete l[l.indexOf(a)],a=null,k++,e(d);}));},t=function(a,b,c){b=b||{};var d=b.evalScripts||"always",e=b.pngFallback||!1,f=b.each;if(void 0!==a.length){var g=0;i.call(a,function(b){s(b,d,e,function(b){f&&"function"==typeof f&&f(b),c&&a.length===++g&&c(g);});});}else { a?s(a,d,e,function(b){f&&"function"==typeof f&&f(b),c&&c(1),a=null;}):c&&c(0); }};"object"==typeof c&&"object"==typeof c.exports?c.exports=d=t:"function"==typeof a&&a.amd?a(function(){return t}):"object"==typeof b&&(b.SVGInjector=t);}(window,document);},{}]},{},[1])(1)});
});

var helpers$1 = {

    debounce: function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    },

    domReady: function domReady(fn) {

        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }

    },

    hasAudio: function hasAudio(video) {
        // Will return a truthy / falsy value. Not necessarily true or false type.
        return video.mozHasAudio || !!video.webkitAudioDecodedByteCount || video.audioTracks && !!video.audioTracks.length;
    },

    sortByAttr: function sortByAttr($items, attr) {

        if (!$items.length || !attr.length) {
            return;
        }

        return $items.sort(function (a, b) { return (a.getAttribute(attr) - b.getAttribute(attr)); });

    },

    removeClass: function removeClass(items, attr) {

        var els = items;

        for (var i = 0; i < els.length; i++) {
            els[i].classList.remove(attr);
        }

    },

    removeAttribute: function removeAttribute(items, attr) {

        var els = items;

        for (var i = 0; i < els.length; i++) {
            els[i].removeAttribute(attr);
        }

    },

    hash: function hash(str) {

        var hash = 0,
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

var helpers_1 = helpers$1;

var $$1 = (typeof window !== "undefined" ? window['$'] : typeof commonjsGlobal !== "undefined" ? commonjsGlobal['$'] : null);

var cache$1 = {

    get: function get(selector) {

        var el = selector.trim();

        if (!el.length) {
            return;
        }

        commonjsGlobal.website = commonjsGlobal.website || {};
        commonjsGlobal.website.cache = commonjsGlobal.website.cache || {};

        if (!commonjsGlobal.website.cache.hasOwnProperty(el)) {
            commonjsGlobal.website.cache[el] = $$1(el);
            commonjsGlobal.website.cache[el].requested = 1;
        }

        commonjsGlobal.website.cache[el].requested = commonjsGlobal.website.cache[el].requested + 1;

        var $el = commonjsGlobal.website.cache[el];

        return $el;

    },

    list: function list() {

        if (!commonjsGlobal.website.cache) {
            return;
        }

        return commonjsGlobal.website.cache;

    },

    clear: function clear() {

        if (commonjsGlobal.hasOwnProperty('website')) {
            if (commonjsGlobal.website.hasOwnProperty('cache')) {
                commonjsGlobal.website.cache = undefined;
            }
        }

        return;

    }

};

var cache_1 = cache$1;

var headroom = createCommonjsModule(function (module, exports) {
/*!
 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  }
  else if (typeof exports === 'object') {
    // COMMONJS
    module.exports = factory();
  }
  else {
    // BROWSER
    root.Headroom = factory();
  }
}(commonjsGlobal, function() {
  'use strict';

  /* exported features */
  
  var features = {
    bind : !!(function(){}.bind),
    classList : 'classList' in document.documentElement,
    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  
  /**
   * Handles debouncing of events via requestAnimationFrame
   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
   * @param {Function} callback The callback to handle whichever event
   */
  function Debouncer (callback) {
    this.callback = callback;
    this.ticking = false;
  }
  Debouncer.prototype = {
    constructor : Debouncer,
  
    /**
     * dispatches the event to the supplied callback
     * @private
     */
    update : function() {
      this.callback && this.callback();
      this.ticking = false;
    },
  
    /**
     * ensures events don't get stacked
     * @private
     */
    requestTick : function() {
      if(!this.ticking) {
        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
        this.ticking = true;
      }
    },
  
    /**
     * Attach this as the event listeners
     */
    handleEvent : function() {
      this.requestTick();
    }
  };
  /**
   * Check if object is part of the DOM
   * @constructor
   * @param {Object} obj element to check
   */
  function isDOMElement(obj) {
    return obj && typeof window !== 'undefined' && (obj === window || obj.nodeType);
  }
  
  /**
   * Helper function for extending objects
   */
  function extend (object /*, objectN ... */) {
    var arguments$1 = arguments;

    if(arguments.length <= 0) {
      throw new Error('Missing arguments in extend function');
    }
  
    var result = object || {},
        key,
        i;
  
    for (i = 1; i < arguments.length; i++) {
      var replacement = arguments$1[i] || {};
  
      for (key in replacement) {
        // Recurse into object except if the object is a DOM element
        if(typeof result[key] === 'object' && ! isDOMElement(result[key])) {
          result[key] = extend(result[key], replacement[key]);
        }
        else {
          result[key] = result[key] || replacement[key];
        }
      }
    }
  
    return result;
  }
  
  /**
   * Helper function for normalizing tolerance option to object format
   */
  function normalizeTolerance (t) {
    return t === Object(t) ? t : { down : t, up : t };
  }
  
  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */
  function Headroom (elem, options) {
    options = extend(options, Headroom.options);
  
    this.lastKnownScrollY = 0;
    this.elem             = elem;
    this.tolerance        = normalizeTolerance(options.tolerance);
    this.classes          = options.classes;
    this.offset           = options.offset;
    this.scroller         = options.scroller;
    this.initialised      = false;
    this.onPin            = options.onPin;
    this.onUnpin          = options.onUnpin;
    this.onTop            = options.onTop;
    this.onNotTop         = options.onNotTop;
    this.onBottom         = options.onBottom;
    this.onNotBottom      = options.onNotBottom;
  }
  Headroom.prototype = {
    constructor : Headroom,
  
    /**
     * Initialises the widget
     */
    init : function() {
      if(!Headroom.cutsTheMustard) {
        return;
      }
  
      this.debouncer = new Debouncer(this.update.bind(this));
      this.elem.classList.add(this.classes.initial);
  
      // defer event registration to handle browser 
      // potentially restoring previous scroll position
      setTimeout(this.attachEvent.bind(this), 100);
  
      return this;
    },
  
    /**
     * Unattaches events and removes any classes that were added
     */
    destroy : function() {
      var classes = this.classes;
  
      this.initialised = false;
      this.elem.classList.remove(classes.unpinned, classes.pinned, classes.top, classes.notTop, classes.initial);
      this.scroller.removeEventListener('scroll', this.debouncer, false);
    },
  
    /**
     * Attaches the scroll event
     * @private
     */
    attachEvent : function() {
      if(!this.initialised){
        this.lastKnownScrollY = this.getScrollY();
        this.initialised = true;
        this.scroller.addEventListener('scroll', this.debouncer, false);
  
        this.debouncer.handleEvent();
      }
    },
    
    /**
     * Unpins the header if it's currently pinned
     */
    unpin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
        classList.add(classes.unpinned);
        classList.remove(classes.pinned);
        this.onUnpin && this.onUnpin.call(this);
      }
    },
  
    /**
     * Pins the header if it's currently unpinned
     */
    pin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(classList.contains(classes.unpinned)) {
        classList.remove(classes.unpinned);
        classList.add(classes.pinned);
        this.onPin && this.onPin.call(this);
      }
    },
  
    /**
     * Handles the top states
     */
    top : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(!classList.contains(classes.top)) {
        classList.add(classes.top);
        classList.remove(classes.notTop);
        this.onTop && this.onTop.call(this);
      }
    },
  
    /**
     * Handles the not top state
     */
    notTop : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(!classList.contains(classes.notTop)) {
        classList.add(classes.notTop);
        classList.remove(classes.top);
        this.onNotTop && this.onNotTop.call(this);
      }
    },
  
    bottom : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(!classList.contains(classes.bottom)) {
        classList.add(classes.bottom);
        classList.remove(classes.notBottom);
        this.onBottom && this.onBottom.call(this);
      }
    },
  
    /**
     * Handles the not top state
     */
    notBottom : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(!classList.contains(classes.notBottom)) {
        classList.add(classes.notBottom);
        classList.remove(classes.bottom);
        this.onNotBottom && this.onNotBottom.call(this);
      }
    },
  
    /**
     * Gets the Y scroll position
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
     * @return {Number} pixels the page has scrolled along the Y-axis
     */
    getScrollY : function() {
      return (this.scroller.pageYOffset !== undefined)
        ? this.scroller.pageYOffset
        : (this.scroller.scrollTop !== undefined)
          ? this.scroller.scrollTop
          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },
  
    /**
     * Gets the height of the viewport
     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
     * @return {int} the height of the viewport in pixels
     */
    getViewportHeight : function () {
      return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    },
  
    /**
     * Gets the physical height of the DOM element
     * @param  {Object}  elm the element to calculate the physical height of which
     * @return {int}     the physical height of the element in pixels
     */
    getElementPhysicalHeight : function (elm) {
      return Math.max(
        elm.offsetHeight,
        elm.clientHeight
      );
    },
  
    /**
     * Gets the physical height of the scroller element
     * @return {int} the physical height of the scroller element in pixels
     */
    getScrollerPhysicalHeight : function () {
      return (this.scroller === window || this.scroller === document.body)
        ? this.getViewportHeight()
        : this.getElementPhysicalHeight(this.scroller);
    },
  
    /**
     * Gets the height of the document
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     * @return {int} the height of the document in pixels
     */
    getDocumentHeight : function () {
      var body = document.body,
        documentElement = document.documentElement;
    
      return Math.max(
        body.scrollHeight, documentElement.scrollHeight,
        body.offsetHeight, documentElement.offsetHeight,
        body.clientHeight, documentElement.clientHeight
      );
    },
  
    /**
     * Gets the height of the DOM element
     * @param  {Object}  elm the element to calculate the height of which
     * @return {int}     the height of the element in pixels
     */
    getElementHeight : function (elm) {
      return Math.max(
        elm.scrollHeight,
        elm.offsetHeight,
        elm.clientHeight
      );
    },
  
    /**
     * Gets the height of the scroller element
     * @return {int} the height of the scroller element in pixels
     */
    getScrollerHeight : function () {
      return (this.scroller === window || this.scroller === document.body)
        ? this.getDocumentHeight()
        : this.getElementHeight(this.scroller);
    },
  
    /**
     * determines if the scroll position is outside of document boundaries
     * @param  {int}  currentScrollY the current y scroll position
     * @return {bool} true if out of bounds, false otherwise
     */
    isOutOfBounds : function (currentScrollY) {
      var pastTop  = currentScrollY < 0,
        pastBottom = currentScrollY + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
      
      return pastTop || pastBottom;
    },
  
    /**
     * determines if the tolerance has been exceeded
     * @param  {int} currentScrollY the current scroll y position
     * @return {bool} true if tolerance exceeded, false otherwise
     */
    toleranceExceeded : function (currentScrollY, direction) {
      return Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance[direction];
    },
  
    /**
     * determine if it is appropriate to unpin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should unpin, false otherwise
     */
    shouldUnpin : function (currentScrollY, toleranceExceeded) {
      var scrollingDown = currentScrollY > this.lastKnownScrollY,
        pastOffset = currentScrollY >= this.offset;
  
      return scrollingDown && pastOffset && toleranceExceeded;
    },
  
    /**
     * determine if it is appropriate to pin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should pin, false otherwise
     */
    shouldPin : function (currentScrollY, toleranceExceeded) {
      var scrollingUp  = currentScrollY < this.lastKnownScrollY,
        pastOffset = currentScrollY <= this.offset;
  
      return (scrollingUp && toleranceExceeded) || pastOffset;
    },
  
    /**
     * Handles updating the state of the widget
     */
    update : function() {
      var currentScrollY  = this.getScrollY(),
        scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
        toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);
  
      if(this.isOutOfBounds(currentScrollY)) { // Ignore bouncy scrolling in OSX
        return;
      }
  
      if (currentScrollY <= this.offset ) {
        this.top();
      } else {
        this.notTop();
      }
  
      if(currentScrollY + this.getViewportHeight() >= this.getScrollerHeight()) {
        this.bottom();
      }
      else {
        this.notBottom();
      }
  
      if(this.shouldUnpin(currentScrollY, toleranceExceeded)) {
        this.unpin();
      }
      else if(this.shouldPin(currentScrollY, toleranceExceeded)) {
        this.pin();
      }
  
      this.lastKnownScrollY = currentScrollY;
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Headroom.options = {
    tolerance : {
      up : 0,
      down : 0
    },
    offset : 0,
    scroller: window,
    classes : {
      pinned : 'headroom--pinned',
      unpinned : 'headroom--unpinned',
      top : 'headroom--top',
      notTop : 'headroom--not-top',
      bottom : 'headroom--bottom',
      notBottom : 'headroom--not-bottom',
      initial : 'headroom'
    }
  };
  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;

  return Headroom;
}));
});

var Headroom = headroom;

function init$1() {

  var header = new Headroom(document.querySelector("#header"), {
      tolerance: 10,
      offset: 30
  });

  header.init();

}

var header = init$1;

var classie$1 = createCommonjsModule(function (module, exports) {
/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );
});

var classie = classie$1;

function init$2() {

  ((function () {
      var triggerBttn = document.getElementById( 'js-trigger-overlay' );
      var pageWrapper = document.getElementById( 'body' );
      var overlay = document.querySelector( 'div.c-overlay' );
      //const closeBttn = document.querySelector( 'div.close' );

      var transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
  };

      var transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
      var support = { transitions : Modernizr.csstransitions };

      function toggleOverlay() {
              if( classie.has( overlay, 'open' ) ) {
                  classie.remove( overlay, 'open' );
                  //classie.add( overlay, 'close' );
                  classie.remove( pageWrapper, 'stop-body' );
                  classie.remove( triggerBttn, 'c-header__tldr--close' );
                  var onEndTransitionFn = function( ev ) {
                      if( support.transitions ) {
                          if( ev.propertyName !== 'visibility' ) { return; }
                          this.removeEventListener( transEndEventName, onEndTransitionFn );
                      }
                      //classie.remove( overlay, 'close' );
                  };
                  if( support.transitions ) {
                      overlay.addEventListener( transEndEventName, onEndTransitionFn );
                  }
              else {
                  onEndTransitionFn();
              }
          }
          else if( !classie.has( overlay, 'close' ) ) {
              classie.add( overlay, 'open' );
              classie.add( pageWrapper, 'stop-body' );
              classie.add( triggerBttn, 'c-header__tldr--close' );
          }
          overlay.scrollTop = 0;
      }

      triggerBttn.addEventListener( 'click', toggleOverlay );
      //closeBttn.addEventListener( 'click', toggleOverlay );
  }))();

}

var overlay = init$2;

var lazysizes$1 = createCommonjsModule(function (module) {
(function(window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if(typeof module == 'object' && module.exports){
		module.exports = lazySizes;
	}
}(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */
	if(!document.getElementsByClassName){return;}

	var lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('CustomEvent');

		event.initCustomEvent(name, !noBubbles, !noCancelable, detail || {});

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesConfig.pf) ) ){
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var fns = [];
		var secondFns = [];

		var run = function(){
			var runFns = fns;

			fns = secondFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = 125;
		var RIC_DEFAULT_TIMEOUT = 666;
		var rICTimeout = RIC_DEFAULT_TIMEOUT;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});
				if(rICTimeout !== RIC_DEFAULT_TIMEOUT){
					rICTimeout = RIC_DEFAULT_TIMEOUT;
				}
			}:
			rAFIt(function(){
				setTimeout(run);
			}, true);

		return function(isPriority){
			var delay;
			if((isPriority = isPriority === true)){
				rICTimeout = 44;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || (delay < 9 && requestIdleCallback)){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};


	var loader = (function(){
		var lazyloadElems, preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

		var defaultExpand, preloadExpand, hFac;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/glebot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(e && e.target){
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

			if((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				if(preloadExpand == null){
					if(!('expand' in lazySizesConfig)){
						lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
					}

					defaultExpand = lazySizesConfig.expand;
					preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				}

				if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesConfig.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia, parent;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if( (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}

			//https://bugzilla.mozilla.org/show_bug.cgi?id=1170572
			if(customMedia){
				parent = source.parentNode;
				parent.insertBefore(source.cloneNode(), source);
				parent.removeChild(source);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				if(firesLoad){
					addRemoveLoadEvents(elem, resetPreloading, true);
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);

					addClass(elem, lazySizesConfig.loadingClass);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(srcset || isPicture){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesConfig.lazyClass);

			rAF(function(){
				if( !firesLoad || elem.complete ){
					if(firesLoad){
						resetPreloading(event);
					} else {
						isLoading--;
					}
					switchLoadingClass(event);
				}
			}, true);
		});

		var unveilElement = function (elem){
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem.src || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function(){
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function(){
				if(lazySizesConfig.loadMode == 3){
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazyloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
				hFac = lazySizesConfig.hFac;

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazyloadElems.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesConfig)){
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function(){
			if(lazySizesConfig.init){
				init();
			}
		});
	})();

	return {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};
}
));
});

/*
This plugin extends lazySizes to lazyLoad:
background images, videos/posters and scripts

Background-Image:
For background images, use data-bg attribute:
<div class="lazyload" data-bg="bg-img.jpg"></div>

 Video:
 For video/audio use data-poster and preload="none":
 <video class="lazyload" data-poster="poster.jpg" preload="none">
 <!-- sources -->
 </video>

 Scripts:
 For scripts use data-script:
 <div class="lazyload" data-script="module-name.js"></div>


 Script modules using require:
 For modules using require use data-require:
 <div class="lazyload" data-require="module-name"></div>
*/

(function(window, document){
	/*jshint eqnull:true */
	'use strict';
	var bgLoad, regBgUrlEscape;
	var uniqueUrls = {};

	if(document.addEventListener){
		regBgUrlEscape = /\(|\)|'/;

		bgLoad = function (url, cb){
			var img = document.createElement('img');
			img.onload = function(){
				img.onload = null;
				img.onerror = null;
				img = null;
				cb();
			};
			img.onerror = img.onload;

			img.src = url;

			if(img && img.complete && img.onload){
				img.onload();
			}
		};

		addEventListener('lazybeforeunveil', function(e){
			var tmp, load, bg, poster;
			if(!e.defaultPrevented) {

				if(e.target.preload == 'none'){
					e.target.preload = 'auto';
				}

				tmp = e.target.getAttribute('data-link');
				if(tmp){
					addStyleScript(tmp, true);
				}

				// handle data-script
				tmp = e.target.getAttribute('data-script');
				if(tmp){
					addStyleScript(tmp);
				}

				// handle data-require
				tmp = e.target.getAttribute('data-require');
				if(tmp){
					if(lazySizes.cfg.requireJs){
						lazySizes.cfg.requireJs([tmp]);
					} else {
						addStyleScript(tmp);
					}
				}

				// handle data-bg
				bg = e.target.getAttribute('data-bg');
				if (bg) {
					e.detail.firesLoad = true;
					load = function(){
						e.target.style.backgroundImage = 'url(' + (regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg ) + ')';
						e.detail.firesLoad = false;
						lazySizes.fire(e.target, '_lazyloaded', {}, true, true);
					};

					bgLoad(bg, load);
				}

				// handle data-poster
				poster = e.target.getAttribute('data-poster');
				if(poster){
					e.detail.firesLoad = true;
					load = function(){
						e.target.poster = poster;
						e.detail.firesLoad = false;
						lazySizes.fire(e.target, '_lazyloaded', {}, true, true);
					};

					bgLoad(poster, load);

				}
			}
		}, false);

	}

	function addStyleScript(src, style){
		if(uniqueUrls[src]){
			return;
		}
		var elem = document.createElement(style ? 'link' : 'script');
		var insertElem = document.getElementsByTagName('script')[0];

		if(style){
			elem.rel = 'stylesheet';
			elem.href = src;
		} else {
			elem.src = src;
		}
		uniqueUrls[src] = true;
		uniqueUrls[elem.src || elem.href] = true;
		insertElem.parentNode.insertBefore(elem, insertElem);
	}
})(window, document);

var lazysizes = lazysizes$1;



function init$3() {

    lazysizes.cfg.loadMode = 1;
    lazysizes.cfg.expand = 300;

    return;

}

var lazyload = init$3;

var SmoothScroll$1 = createCommonjsModule(function (module, exports) {
//
// SmoothScroll for websites v1.4.6 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//

(function () {
  
// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 400, // [ms]
    stepSize         : 100, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 50,  // 50
    accelerationMax   : 3,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Other
    fixedBackground   : true, 
    excluded          : ''    
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var refreshSize;
var deltaBuffer = [];
var isMac = /^Mac/.test(navigator.platform);

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
            pageup: 33, pagedown: 34, end: 35, home: 36 };
var arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };

/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {
    if (options.keyboardSupport) {
        addEvent('keydown', keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {
  
    if (initDone || !document.body) { return; }

    initDone = true;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight; 
    var scrollHeight = body.scrollHeight;
    
    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    
    initTest();

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * Safari 10 fixed it, Chrome fixed it in v45:
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (isOldSafari &&
             scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight || 
             html.offsetHeight <= windowHeight)) {

        var fullPageElem = document.createElement('div');
        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                                     'top:0; left:0; right:0; height:' + 
                                      root.scrollHeight + 'px';
        document.body.appendChild(fullPageElem);
        
        // DOM changed (throttled) to fix height
        var pendingRefresh;
        refreshSize = function () {
            if (pendingRefresh) { return; } // could also be: clearTimeout(pendingRefresh);
            pendingRefresh = setTimeout(function () {
                if (isExcluded) { return; } // could be running after cleanup
                fullPageElem.style.height = '0';
                fullPageElem.style.height = root.scrollHeight + 'px';
                pendingRefresh = null;
            }, 500); // act rarely to stay fast
        };
  
        setTimeout(refreshSize, 10);

        addEvent('resize', refreshSize);

        // TODO: attributeFilter?
        var config = {
            attributes: true, 
            childList: true, 
            characterData: false 
            // subtree: true
        };

        observer = new MutationObserver(refreshSize);
        observer.observe(body, config);

        if (root.offsetHeight <= windowHeight) {
            var clearfix = document.createElement('div');   
            clearfix.style.clear = 'both';
            body.appendChild(clearfix);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = 'scroll';
        html.style.backgroundAttachment = 'scroll';
    }
}

/**
 * Removes event listeners and other traces left on the page.
 */
function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
    removeEvent('resize', refreshSize);
    removeEvent('load', init);
}


/************************************************
 * SCROLLING 
 ************************************************/
 
var que = [];
var pending = false;
var lastScroll = Date.now();

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top) {
    
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = Date.now();
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (50 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = Date.now();
    }          
    
    // push a scroll command
    que.push({
        x: left, 
        y: top, 
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99, 
        start: Date.now()
    });
        
    // don't act if there's a pending queue
    if (pending) {
        return;
    }  

    var scrollWindow = (elem === document.body);
    
    var step = function (time) {
        
        var now = Date.now();
        var scrollX = 0;
        var scrollY = 0; 
    
        for (var i = 0; i < que.length; i++) {
            
            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);
            
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            
            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }
            
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;            
            
            // update last values
            item.lastX += x;
            item.lastY += y;
        
            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }           
        }

        // scroll left and top
        if (scrollWindow) {
            window.scrollBy(scrollX, scrollY);
        } 
        else {
            if (scrollX) { elem.scrollLeft += scrollX; }
            if (scrollY) { elem.scrollTop  += scrollY; }                    
        }
        
        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }
        
        if (que.length) { 
            requestFrame(step, elem, (1000 / options.frameRate + 1)); 
        } else { 
            pending = false;
        }
    };
    
    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }
    
    var target = event.target;

    // leave early if default action is prevented   
    // or it's a zooming event with CTRL 
    if (event.defaultPrevented || event.ctrlKey) {
        return true;
    }
    
    // leave embedded content alone (flash & pdf)
    if (isNodeName(activeElement, 'embed') || 
       (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
        isNodeName(activeElement, 'object') ||
        target.shadowRoot) {
        return true;
    }

    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;
    
    if (isMac) {
        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
            deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
        }
        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
            deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
        }
    }
    
    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = -event.wheelDelta || 0;
    }

    // line based scrolling (Firefox mostly)
    if (event.deltaMode === 1) {
        deltaX *= 40;
        deltaY *= 40;
    }

    var overflowing = overflowingAncestor(target);

    // nothing to do if there's no element that's scrollable
    if (!overflowing) {
        // except Chrome iframes seem to eat wheel events, which we need to 
        // propagate up, if the iframe has nothing overflowing to scroll
        if (isFrame && isChrome)  {
            // change target to iframe element itself for the parent frame
            Object.defineProperty(event, "target", {value: window.frameElement});
            return parent.wheel(event);
        }
        return true;
    }
    
    // check if it's a touchpad scroll that should be ignored
    if (isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }
    
    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                  (event.shiftKey && event.keyCode !== key.spacebar);
    
    // our own tracked active element could've been removed from the DOM
    if (!document.body.contains(activeElement)) {
        activeElement = document.activeElement;
    }

    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    // or inside interactive elements
    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if ( event.defaultPrevented ||
         inputNodeNames.test(target.nodeName) ||
         isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
         isNodeName(activeElement, 'video') ||
         isInsideYoutubeVideo(event) ||
         target.isContentEditable || 
         modifier ) {
      return true;
    }

    // [spacebar] should trigger button press, leave it alone
    if ((isNodeName(target, 'button') ||
         isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
        event.keyCode === key.spacebar) {
      return true;
    }

    // [arrwow keys] on radio buttons should be left alone
    if (isNodeName(target, 'input') && target.type == 'radio' &&
        arrowKeys[event.keyCode])  {
      return true;
    }
    
    var shift, x = 0, y = 0;
    var overflowing = overflowingAncestor(activeElement);

    if (!overflowing) {
        // Chrome iframes seem to eat key events, which we need to 
        // propagate up, if the iframe has nothing overflowing to scroll
        return (isFrame && isChrome) ? parent.keydown(event) : true;
    }

    var clientHeight = overflowing.clientHeight; 

    if (overflowing == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;         
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            y = -overflowing.scrollTop;
            break;
        case key.end:
            var scroll = overflowing.scrollHeight - overflowing.scrollTop;
            var scrollRemaining = scroll - clientHeight;
            y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;            
        default:
            return true; // a key we don't care about
    }

    scrollArray(overflowing, x, y);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

var cache = {}; // cleared out after a scrolling session
var clearCacheTimer;

//setInterval(function () { cache = {}; }, 10 * 1000);

function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function () { cache = {}; }, 1*1000);
}

function setCache(elems, overflowing) {
    for (var i = elems.length; i--;)
        { cache[uniqueID(elems[i])] = overflowing; }
    return overflowing;
}

//  (body)                (root)
//         | hidden | visible | scroll |  auto  |
// hidden  |   no   |    no   |   YES  |   YES  |
// visible |   no   |   YES   |   YES  |   YES  |
// scroll  |   no   |   YES   |   YES  |   YES  |
// auto    |   no   |   YES   |   YES  |   YES  |

function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = cache[uniqueID(el)];
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
            var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
            if (isFrame && isContentOverflowing(root) || 
               !isFrame && isOverflowCSS) {
                return setCache(elems, getScrollRoot()); 
            }
        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
            return setCache(elems, el);
        }
    } while (el = el.parentElement);
}

function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
}

// typically for <body> and <html>
function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow !== 'hidden');
}

// for all other elements
function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow === 'scroll' || overflow === 'auto');
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn) {
    window.addEventListener(type, fn, false);
}

function removeEvent(type, fn) {
    window.removeEventListener(type, fn, false);  
}

function isNodeName(el, tag) {
    return (el.nodeName||'').toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

var deltaBufferTimer;

if (window.localStorage && localStorage.SS_deltaBuffer) {
    try { // #46 Safari throws in private browsing for localStorage 
        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    } catch (e) { } 
}

function isTouchpad(deltaY) {
    if (!deltaY) { return; }
    if (!deltaBuffer.length) {
        deltaBuffer = [deltaY, deltaY, deltaY];
    }
    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function () {
        try { // #46 Safari throws in private browsing for localStorage
            localStorage.SS_deltaBuffer = deltaBuffer.join(',');
        } catch (e) { }  
    }, 1000);
    return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
} 

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
}

function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;
    if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
        do {
            isControl = (elem.classList && 
                         elem.classList.contains('html5-video-controls'));
            if (isControl) { break; }
        } while (elem = elem.parentNode);
    }
    return isControl;
}

var requestFrame = (function () {
      return (window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    ||
              function (callback, element, delay) {
                 window.setTimeout(callback, delay || (1000/60));
             });
})();

var MutationObserver = (window.MutationObserver || 
                        window.WebKitMutationObserver ||
                        window.MozMutationObserver);  

var getScrollRoot = (function() {
  var SCROLL_ROOT;
  return function() {
    if (!SCROLL_ROOT) {
      var dummy = document.createElement('div');
      dummy.style.cssText = 'height:10000px;width:1px;';
      document.body.appendChild(dummy);
      var bodyScrollTop  = document.body.scrollTop;
      var docElScrollTop = document.documentElement.scrollTop;
      window.scrollBy(0, 3);
      if (document.body.scrollTop != bodyScrollTop)
        { (SCROLL_ROOT = document.body); }
      else 
        { (SCROLL_ROOT = document.documentElement); }
      window.scrollBy(0, -3);
      document.body.removeChild(dummy);
    }
    return SCROLL_ROOT;
  };
})();


/***********************************************
 * PULSE (by Michael Herf)
 ***********************************************/
 
/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) { return 1; }
    if (x <= 0) { return 0; }

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}


/***********************************************
 * FIRST RUN
 ***********************************************/

var userAgent = window.navigator.userAgent;
var isEdge    = /Edge/.test(userAgent); // thank you MS
var isChrome  = /chrome/i.test(userAgent) && !isEdge; 
var isSafari  = /safari/i.test(userAgent) && !isEdge; 
var isMobile  = /mobile/i.test(userAgent);
var isIEWin7  = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;

var wheelEvent;
if ('onwheel' in document.createElement('div'))
    { wheelEvent = 'wheel'; }
else if ('onmousewheel' in document.createElement('div'))
    { wheelEvent = 'mousewheel'; }

if (wheelEvent && isEnabledForBrowser) {
    addEvent(wheelEvent, wheel);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
}


/***********************************************
 * PUBLIC INTERFACE
 ***********************************************/

function SmoothScroll(optionsToSet) {
    for (var key in optionsToSet)
        { if (defaultOptions.hasOwnProperty(key)) 
            { options[key] = optionsToSet[key]; } }
}
SmoothScroll.destroy = cleanup;

if (window.SmoothScrollOptions) // async API
    { SmoothScroll(window.SmoothScrollOptions); }

if (typeof define === 'function' && define.amd)
    { define(function() {
        return SmoothScroll;
    }); }
else if ('object' == typeof exports)
    { module.exports = SmoothScroll; }
else
    { window.SmoothScroll = SmoothScroll; }

})();
});

var SmoothScroll = SmoothScroll$1;

function init$4() {

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

  });

}

var smoothscroll = init$4;

var aos = createCommonjsModule(function (module, exports) {
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t();}(commonjsGlobal,function(){return function(e){function t(o){if(n[o]){ return n[o].exports; }var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){
var arguments$1 = arguments;
for(var t=1;t<arguments.length;t++){var n=arguments$1[t];for(var o in n){ Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]); }}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k){ return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w }},S=function(){w=(0,h.default)(),O();},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay");});},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0);}):document.addEventListener(j.startEvent,function(){O(!0);}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once);},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0);}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S};},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0;}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h){ return r(w); }if(_){ return h=setTimeout(s,t),o(w) }}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e){ throw new TypeError(f); }return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e){ throw new TypeError(f); }return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e){ return e; }if(a(e)){ return s; }if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t;}if("string"!=typeof e){ return 0===e?e:+e; }e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o;}).call(t,function(){return this}());},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0;}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h){ return r(w); }if(_){ return h=setTimeout(s,t),i(w) }}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e){ throw new TypeError(c); }return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e){ return e; }if(r(e)){ return f; }if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t;}if("string"!=typeof e){ return 0===e?e:+e; }e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n;}).call(t,function(){return this}());},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o();}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++){ r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r)); }}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n;},function(e,t){"use strict";function n(e,t){if(!(e instanceof t)){ throw new TypeError("Cannot call a class as a function") }}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e);}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f;},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate");},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t);});};t.default=o;},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset);}),e};t.default=a;},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i;}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a;},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);){ t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent; }return{top:n,left:t}};t.default=n;},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e});}),t};t.default=n;}])});
});

var AOS = aos;

function init$5() {

  AOS.init();

  $(window).on('load', function() {
    AOS.refresh();
  });

}

var animatescroll = init$5;

var rellax = createCommonjsModule(function (module) {
// ------------------------------------------
// Rellax.js - v1.0.0
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Rellax = factory();
  }
}(commonjsGlobal, function () {
  var Rellax = function(el, options){
    "use strict";

    var self = Object.create(Rellax.prototype);

    var posY = 0; // set it to -1 so the animate function gets called at least once
    var screenY = 0;
    var blocks = [];
    var pause = false;

    // check what requestAnimationFrame to use, and if
    // it's not supported, use the onscroll event
    var loop = window.requestAnimationFrame ||
    	window.webkitRequestAnimationFrame ||
    	window.mozRequestAnimationFrame ||
    	window.msRequestAnimationFrame ||
    	window.oRequestAnimationFrame ||
    	function(callback){ setTimeout(callback, 1000 / 60); };

    // Default Settings
    self.options = {
      speed: -2,
      center: false
    };

    // User defined options (might have more in the future)
    if (options){
      Object.keys(options).forEach(function(key){
        self.options[key] = options[key];
      });
    }

    // If some clown tries to crank speed, limit them to +-10
    if (self.options.speed < -10) {
      self.options.speed = -10;
    } else if (self.options.speed > 10) {
      self.options.speed = 10;
    }

    // By default, rellax class
    if (!el) {
      el = '.rellax';
    }

    // Classes
    if (document.getElementsByClassName(el.replace('.',''))){
      self.elems = document.getElementsByClassName(el.replace('.',''));
    }

    // Now query selector
    else if (document.querySelector(el) !== false) {
      self.elems = querySelector(el);
    }

    // The elements don't exist
    else {
      throw new Error("The elements you're trying to select don't exist.");
    }


    // Let's kick this script off
    // Build array for cached element values
    // Bind scroll and resize to animate method
    var init = function() {
      screenY = window.innerHeight;
      setPosition();

      // Get and cache initial position of all elements
      for (var i = 0; i < self.elems.length; i++){
        var block = createBlock(self.elems[i]);
        blocks.push(block);
      }

			window.addEventListener('resize', function(){
			  animate();
			});

			// Start the loop
      update();

      // The loop does nothing if the scrollPosition did not change
      // so call animate to make sure every element has their transforms
      animate();
    };


    // We want to cache the parallax blocks'
    // values: base, top, height, speed
    // el: is dom object, return: el cache values
    var createBlock = function(el) {

      // initializing at scrollY = 0 (top of browser)
      // ensures elements are positioned based on HTML layout.
      //
      // If the element has the percentage attribute, the posY needs to be
      // the current scroll position's value, so that the elements are still positioned based on HTML layout
      var posY = el.getAttribute('data-rellax-percentage') || self.options.center ? document.body.scrollTop : 0;

      var blockTop = posY + el.getBoundingClientRect().top;
      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

      // apparently parallax equation everyone uses
      var percentage = el.getAttribute('data-rellax-percentage') ? el.getAttribute('data-rellax-percentage') : (posY - blockTop + screenY) / (blockHeight + screenY);
      if(self.options.center){ percentage = 0.5; }

      // Optional individual block speed as data attr, otherwise global speed
      // Check if has percentage attr, and limit speed to 5, else limit it to 10
      var speed = el.getAttribute('data-rellax-speed') ? limitSpeed(el.getAttribute('data-rellax-speed'), 10) : self.options.speed;
      if (el.getAttribute('data-rellax-percentage') || self.options.center) {
        speed = el.getAttribute('data-rellax-speed') ? limitSpeed(el.getAttribute('data-rellax-speed'), 5) : limitSpeed(self.options.speed, 5);
      }

      var base = updatePosition(percentage, speed);

      // ~~Store non-translate3d transforms~~
      // Store inline styles and extract transforms
      var style = el.style.cssText;
      var transform = '';

      // Check if there's an inline styled transform
      if (style.indexOf('transform') >= 0) {
        // Get the index of the transform
        var index = style.indexOf('transform');

        // Trim the style to the transform point and get the following semi-colon index
        var trimmedStyle = style.slice(index);
        var delimiter = trimmedStyle.indexOf(';');

        // Remove "transform" string and save the attribute
        if (delimiter) {
          transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g,'');
        } else {
          transform = " " + trimmedStyle.slice(11).replace(/\s/g,'');
        }
      }

      return {
        base: base,
        top: blockTop,
        height: blockHeight,
        speed: speed,
        style: style,
        transform: transform
      };
    };

    // Check if current speed is < or > than max/-max
    // If so, return max
    var limitSpeed = function(current, max) {
      if (current < -max) {
        return -max;
      } else if (current > max) {
        return max;
      } else {
        return current;
      }
    };

    // set scroll position (posY)
    // side effect method is not ideal, but okay for now
    // returns true if the scroll changed, false if nothing happened
    var setPosition = function() {
    	var oldY = posY;

      if (window.pageYOffset !== undefined) {
        posY = window.pageYOffset;
      } else {
        posY = (document.documentElement || document.body.parentNode || document.body).scrollTop;
      }

      if (oldY != posY) {
      	// scroll changed, return true
      	return true;
      }

      // scroll did not change
      return false;
    };


    // Ahh a pure function, gets new transform value
    // based on scrollPostion and speed
    var updatePosition = function(percentage, speed) {
      var value = (speed * (100 * (1 - percentage)));
      return Math.round(value);
    };


    //
		var update = function() {
			if (setPosition() && pause === false) {
				animate();
	    }

	    // loop again
	    loop(update);
		};

    // Transform3d on parallax element
    var animate = function() {
    	for (var i = 0; i < self.elems.length; i++){
        var percentage = ((posY - blocks[i].top + screenY) / (blocks[i].height + screenY));

        // Subtracting initialize value, so element stays in same spot as HTML
        var position = updatePosition(percentage, blocks[i].speed) - blocks[i].base;

        // Move that element
        // (Prepare the new transform and append initial inline transforms. Set the new, and preppend previous inline styles)
        var translate = ' translate3d(0,' + position + 'px' + ',0)' + blocks[i].transform;
        self.elems[i].style.cssText = blocks[i].style+'-webkit-transform:'+translate+';-moz-transform:'+translate+';transform:'+translate+';';
      }
    };


    self.destroy = function() {
      for (var i = 0; i < self.elems.length; i++){
        self.elems[i].style.cssText = blocks[i].style;
      }
      pause = true;
    };


    init();
    return self;
  };
  return Rellax;
}));
});

var Rellax = rellax;

function init$6() {

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   // some code..
  } else {
    var rellax$$1 = new Rellax('.rellax');
  }

}

var parallax = init$6;

var helpers = helpers_1;
var cache   = cache_1;

function getModules() {

    var modules = {
        header: header,
        overlay: overlay,
        lazyload: lazyload,
        smoothscroll: smoothscroll,
        animatescroll: animatescroll,
        parallax: parallax
    };

    return modules;

}

function framework$1(e) {

    var reload = e || false,
        modules = getModules();

    if (reload && reload === 'reload') {
        cache.clear();
    }

    var app = {

        init: function init() {

            for (var module in modules) {
                if ({}.hasOwnProperty.call(modules, module)) {
                    modules[module]();
                }
            }

        }

    };

    helpers.domReady(app.init);

}

var framework_1 = framework$1;

/*! ES6 Elixir/Rollup project by Casey Kennedy - main.js */

var framework = framework_1;

framework();

}((this.LaravelElixirBundle = this.LaravelElixirBundle || {})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNlL3NpdGVzL19jazMvc291cmNlL19hc3NldHMvanMvcGx1Z2lucy9pY29uaWMubWluLmpzIiwiL1VzZXJzL2Nhc2Uvc2l0ZXMvX2NrMy9zb3VyY2UvX2Fzc2V0cy9qcy91dGlsaXRpZXMvaGVscGVycy5qcyIsIi9Vc2Vycy9jYXNlL3NpdGVzL19jazMvc291cmNlL19hc3NldHMvanMvdXRpbGl0aWVzL2NhY2hlLmpzIiwiL1VzZXJzL2Nhc2Uvc2l0ZXMvX2NrMy9ub2RlX21vZHVsZXMvaGVhZHJvb20uanMvZGlzdC9oZWFkcm9vbS5qcyIsIi9Vc2Vycy9jYXNlL3NpdGVzL19jazMvc291cmNlL19hc3NldHMvanMvbW9kdWxlcy9oZWFkZXIuanMiLCIvVXNlcnMvY2FzZS9zaXRlcy9fY2szL25vZGVfbW9kdWxlcy9kZXNhbmRyby1jbGFzc2llL2NsYXNzaWUuanMiLCIvVXNlcnMvY2FzZS9zaXRlcy9fY2szL3NvdXJjZS9fYXNzZXRzL2pzL21vZHVsZXMvb3ZlcmxheS5qcyIsIi9Vc2Vycy9jYXNlL3NpdGVzL19jazMvbm9kZV9tb2R1bGVzL2xhenlzaXplcy9sYXp5c2l6ZXMuanMiLCIvVXNlcnMvY2FzZS9zaXRlcy9fY2szL3NvdXJjZS9fYXNzZXRzL2pzL3BsdWdpbnMvbHMudW52ZWlsaG9va3MuanMiLCIvVXNlcnMvY2FzZS9zaXRlcy9fY2szL3NvdXJjZS9fYXNzZXRzL2pzL21vZHVsZXMvbGF6eWxvYWQuanMiLCIvVXNlcnMvY2FzZS9zaXRlcy9fY2szL25vZGVfbW9kdWxlcy9zbW9vdGhzY3JvbGwtZm9yLXdlYnNpdGVzL1Ntb290aFNjcm9sbC5qcyIsIi9Vc2Vycy9jYXNlL3NpdGVzL19jazMvc291cmNlL19hc3NldHMvanMvbW9kdWxlcy9zbW9vdGhzY3JvbGwuanMiLCIvVXNlcnMvY2FzZS9zaXRlcy9fY2szL25vZGVfbW9kdWxlcy9hb3MvZGlzdC9hb3MuanMiLCIvVXNlcnMvY2FzZS9zaXRlcy9fY2szL3NvdXJjZS9fYXNzZXRzL2pzL21vZHVsZXMvYW5pbWF0ZXNjcm9sbC5qcyIsIi9Vc2Vycy9jYXNlL3NpdGVzL19jazMvbm9kZV9tb2R1bGVzL3JlbGxheC9yZWxsYXguanMiLCIvVXNlcnMvY2FzZS9zaXRlcy9fY2szL3NvdXJjZS9fYXNzZXRzL2pzL21vZHVsZXMvcGFyYWxsYXguanMiLCIvVXNlcnMvY2FzZS9zaXRlcy9fY2szL3NvdXJjZS9fYXNzZXRzL2pzL2ZyYW1ld29yay5qcyIsIi9Vc2Vycy9jYXNlL3NpdGVzL19jazMvc291cmNlL19hc3NldHMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGljb25pYy5qcyB2MC40LjMgLSBUaGUgSWNvbmljIEphdmFTY3JpcHQgbGlicmFyeVxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUgV2F5YnVyeSAtIGh0dHBzOi8vdXNlaWNvbmljLmNvbVxuICovXG5cbiFmdW5jdGlvbihhKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShhKTpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdy5JY29uaWNKUz1hKCk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWwuSWNvbmljSlM9YSgpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiYoc2VsZi5JY29uaWNKUz1hKCkpfShmdW5jdGlvbigpe3ZhciBhO3JldHVybiBmdW5jdGlvbiBiKGEsYyxkKXtmdW5jdGlvbiBlKGcsaCl7aWYoIWNbZ10pe2lmKCFhW2ddKXt2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFoJiZpKXJldHVybiBpKGcsITApO2lmKGYpcmV0dXJuIGYoZywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitnK1wiJ1wiKX12YXIgaj1jW2ddPXtleHBvcnRzOnt9fTthW2ddWzBdLmNhbGwoai5leHBvcnRzLGZ1bmN0aW9uKGIpe3ZhciBjPWFbZ11bMV1bYl07cmV0dXJuIGUoYz9jOmIpfSxqLGouZXhwb3J0cyxiLGEsYyxkKX1yZXR1cm4gY1tnXS5leHBvcnRzfWZvcih2YXIgZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGc9MDtnPGQubGVuZ3RoO2crKyllKGRbZ10pO3JldHVybiBlfSh7MTpbZnVuY3Rpb24oYSxiKXt2YXIgYz0oYShcIi4vbW9kdWxlcy9wb2x5ZmlsbHNcIiksYShcIi4vbW9kdWxlcy9zdmctaW5qZWN0b3JcIikpLGQ9YShcIi4vbW9kdWxlcy9leHRlbmRcIiksZT1hKFwiLi9tb2R1bGVzL3Jlc3BvbnNpdmVcIiksZj1hKFwiLi9tb2R1bGVzL3Bvc2l0aW9uXCIpLGc9YShcIi4vbW9kdWxlcy9jb250YWluZXJcIiksaD1hKFwiLi9tb2R1bGVzL2xvZ1wiKSxpPXt9LGo9d2luZG93Lmljb25pY1NtYXJ0SWNvbkFwaXM9e30saz0oXCJmaWxlOlwiPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sLDApLGw9ZnVuY3Rpb24oYSxiLGUpe2I9ZCh7fSxpLGJ8fHt9KTt2YXIgZj17ZXZhbFNjcmlwdHM6Yi5ldmFsU2NyaXB0cyxwbmdGYWxsYmFjazpiLnBuZ0ZhbGxiYWNrfTtmLmVhY2g9ZnVuY3Rpb24oYSl7aWYoYSlpZihcInN0cmluZ1wiPT10eXBlb2YgYSloLmRlYnVnKGEpO2Vsc2UgaWYoYSBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQpe3ZhciBjPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pY29uXCIpO2lmKGMmJmpbY10pe3ZhciBkPWpbY10oYSk7Zm9yKHZhciBlIGluIGQpYVtlXT1kW2VdfXZhciBmPS9pY29uaWMtYmctLztmLnRlc3QoYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSkmJmcuYWRkQmFja2dyb3VuZChhKSxtKGEpLGsrKyxiJiZiLmVhY2gmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGIuZWFjaCYmYi5lYWNoKGEpfX0sXCJzdHJpbmdcIj09dHlwZW9mIGEmJihhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYSkpLGMoYSxmLGUpfSxtPWZ1bmN0aW9uKGEpe3ZhciBiPVtdO2E/XCJzdHJpbmdcIj09dHlwZW9mIGE/Yj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMCE9PWEubGVuZ3RoP2I9YTpcIm9iamVjdFwiPT10eXBlb2YgYSYmYi5wdXNoKGEpOmI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN2Zy5pY29uaWNcIiksQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChiLGZ1bmN0aW9uKGEpe2EgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50JiYoYS51cGRhdGUmJmEudXBkYXRlKCksZS5yZWZyZXNoKGEpLGYucmVmcmVzaChhKSl9KX0sbj1mdW5jdGlvbigpe2kuZGVidWcmJmNvbnNvbGUudGltZSYmY29uc29sZS50aW1lKFwiYXV0b0luamVjdFNlbGVjdG9yIC0gXCIraS5hdXRvSW5qZWN0U2VsZWN0b3IpO3ZhciBhPWs7bChpLmF1dG9JbmplY3RTZWxlY3Rvcix7fSxmdW5jdGlvbigpe2lmKGkuZGVidWcmJmNvbnNvbGUudGltZUVuZCYmY29uc29sZS50aW1lRW5kKFwiYXV0b0luamVjdFNlbGVjdG9yIC0gXCIraS5hdXRvSW5qZWN0U2VsZWN0b3IpLGguZGVidWcoXCJBdXRvSW5qZWN0ZWQ6IFwiKyhrLWEpKSxlLnJlZnJlc2hBbGwoKSxpLmF1dG9JbmplY3REb25lJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpLmF1dG9JbmplY3REb25lKXt2YXIgYj1rLWE7aS5hdXRvSW5qZWN0RG9uZShiKX19KX0sbz1mdW5jdGlvbihhKXthJiZcIlwiIT09YSYmXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLG4pOmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsbil9LHA9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9YXx8e30sZChpLGEpLG8oaS5hdXRvSW5qZWN0U2VsZWN0b3IpLGguZW5hYmxlRGVidWcoaS5kZWJ1Zyksd2luZG93Ll9JY29uaWM/d2luZG93Ll9JY29uaWM6e2luamVjdDpsLHVwZGF0ZTptLHNtYXJ0SWNvbkFwaXM6aixzdmdJbmplY3RlZENvdW50Omt9fTtiLmV4cG9ydHM9cCx3aW5kb3cuX0ljb25pYz1uZXcgcCh7YXV0b0luamVjdFNlbGVjdG9yOlwiaW1nLmljb25pY1wiLGV2YWxTY3JpcHRzOlwib25jZVwiLHBuZ0ZhbGxiYWNrOiExLGVhY2g6bnVsbCxhdXRvSW5qZWN0RG9uZTpudWxsLGRlYnVnOiExfSl9LHtcIi4vbW9kdWxlcy9jb250YWluZXJcIjoyLFwiLi9tb2R1bGVzL2V4dGVuZFwiOjMsXCIuL21vZHVsZXMvbG9nXCI6NCxcIi4vbW9kdWxlcy9wb2x5ZmlsbHNcIjo1LFwiLi9tb2R1bGVzL3Bvc2l0aW9uXCI6NixcIi4vbW9kdWxlcy9yZXNwb25zaXZlXCI6NyxcIi4vbW9kdWxlcy9zdmctaW5qZWN0b3JcIjo4fV0sMjpbZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXt2YXIgYj1hLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLnNwbGl0KFwiIFwiKSxjPS0xIT09Yi5pbmRleE9mKFwiaWNvbmljLWZsdWlkXCIpLGQ9W10sZT1bXCJpY29uaWMtYmdcIl07QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChiLGZ1bmN0aW9uKGEpe3N3aXRjaChhKXtjYXNlXCJpY29uaWMtc21cIjpjYXNlXCJpY29uaWMtbWRcIjpjYXNlXCJpY29uaWMtbGdcIjpkLnB1c2goYSksY3x8ZS5wdXNoKGEucmVwbGFjZSgvLS8sXCItYmctXCIpKTticmVhaztjYXNlXCJpY29uaWMtZmx1aWRcIjpkLnB1c2goYSksZS5wdXNoKGEucmVwbGFjZSgvLS8sXCItYmctXCIpKTticmVhaztjYXNlXCJpY29uaWMtYmctY2lyY2xlXCI6Y2FzZVwiaWNvbmljLWJnLXJvdW5kZWQtcmVjdFwiOmNhc2VcImljb25pYy1iZy1iYWRnZVwiOmUucHVzaChhKTticmVhaztkZWZhdWx0OmQucHVzaChhKX19KSxhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZC5qb2luKFwiIFwiKSk7dmFyIGY9YS5wYXJlbnROb2RlLGc9QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChmLmNoaWxkTm9kZXMsYSksaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZS5qb2luKFwiIFwiKSksaC5hcHBlbmRDaGlsZChhKSxmLmluc2VydEJlZm9yZShoLGYuY2hpbGROb2Rlc1tnXSl9O2IuZXhwb3J0cz17YWRkQmFja2dyb3VuZDpjfX0se31dLDM6W2Z1bmN0aW9uKGEsYil7Yi5leHBvcnRzPWZ1bmN0aW9uKGEpe3JldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxmdW5jdGlvbihiKXtpZihiKWZvcih2YXIgYyBpbiBiKWIuaGFzT3duUHJvcGVydHkoYykmJihhW2NdPWJbY10pfSksYX19LHt9XSw0OltmdW5jdGlvbihhLGIpe3ZhciBjPSExLGQ9ZnVuY3Rpb24oYSl7Y29uc29sZSYmY29uc29sZS5sb2cmJmNvbnNvbGUubG9nKGEpfSxlPWZ1bmN0aW9uKGEpe2QoXCJJY29uaWMgSU5GTzogXCIrYSl9LGY9ZnVuY3Rpb24oYSl7ZChcIkljb25pYyBXQVJOSU5HOiBcIithKX0sZz1mdW5jdGlvbihhKXtjJiZkKFwiSWNvbmljIERFQlVHOiBcIithKX0saD1mdW5jdGlvbihhKXtjPWF9O2IuZXhwb3J0cz17aW5mbzplLHdhcm46ZixkZWJ1ZzpnLGVuYWJsZURlYnVnOmh9fSx7fV0sNTpbZnVuY3Rpb24oKXtBcnJheS5wcm90b3R5cGUuZm9yRWFjaHx8KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7aWYodm9pZCAwPT09dGhpc3x8bnVsbD09PXRoaXN8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGEpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgYyxkPXRoaXMubGVuZ3RoPj4+MDtmb3IoYz0wO2Q+YzsrK2MpYyBpbiB0aGlzJiZhLmNhbGwoYix0aGlzW2NdLGMsdGhpcyl9KSxmdW5jdGlvbigpe2lmKEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdHx8KEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe3RoaXMucmV0dXJuVmFsdWU9ITF9KSxFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9ufHwoRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbj1mdW5jdGlvbigpe3RoaXMuY2FuY2VsQnViYmxlPSEwfSksIUVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIpe3ZhciBhPVtdLGI9ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLGU9ZnVuY3Rpb24oYSl7YS50YXJnZXQ9YS5zcmNFbGVtZW50LGEuY3VycmVudFRhcmdldD1kLGMuaGFuZGxlRXZlbnQ/Yy5oYW5kbGVFdmVudChhKTpjLmNhbGwoZCxhKX07aWYoXCJET01Db250ZW50TG9hZGVkXCI9PWIpe3ZhciBmPWZ1bmN0aW9uKGEpe1wiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSYmZShhKX07aWYoZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmKSxhLnB1c2goe29iamVjdDp0aGlzLHR5cGU6YixsaXN0ZW5lcjpjLHdyYXBwZXI6Zn0pLFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSl7dmFyIGc9bmV3IEV2ZW50O2cuc3JjRWxlbWVudD13aW5kb3csZihnKX19ZWxzZSB0aGlzLmF0dGFjaEV2ZW50KFwib25cIitiLGUpLGEucHVzaCh7b2JqZWN0OnRoaXMsdHlwZTpiLGxpc3RlbmVyOmMsd3JhcHBlcjplfSl9LGM9ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoOyl7dmFyIGU9YVtkXTtpZihlLm9iamVjdD09dGhpcyYmZS50eXBlPT1iJiZlLmxpc3RlbmVyPT1jKXtcIkRPTUNvbnRlbnRMb2FkZWRcIj09Yj90aGlzLmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsZS53cmFwcGVyKTp0aGlzLmRldGFjaEV2ZW50KFwib25cIitiLGUud3JhcHBlcik7YnJlYWt9KytkfX07RWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1iLEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9YyxIVE1MRG9jdW1lbnQmJihIVE1MRG9jdW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9YixIVE1MRG9jdW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9YyksV2luZG93JiYoV2luZG93LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyPWIsV2luZG93LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWMpfX0oKX0se31dLDY6W2Z1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7dmFyIGI9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uXCIpO2lmKGImJlwiXCIhPT1iKXt2YXIgYyxkLGUsZixnLGgsaSxqPWEuZ2V0QXR0cmlidXRlKFwid2lkdGhcIiksaz1hLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSxsPWIuc3BsaXQoXCItXCIpLG09YS5xdWVyeVNlbGVjdG9yQWxsKFwiZy5pY29uaWMtY29udGFpbmVyXCIpO0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobSxmdW5jdGlvbihhKXtpZihjPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiKSxkPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiksYyE9PWp8fGQhPT1rKXtpZihlPWEuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLGY9MSxlKXt2YXIgYj1lLm1hdGNoKC9zY2FsZVxcKChcXGQpLyk7Zj1iJiZiWzFdP2JbMV06MX1nPU1hdGguZmxvb3IoKGovZi1jKS8yKSxoPU1hdGguZmxvb3IoKGsvZi1kKS8yKSxBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGwsZnVuY3Rpb24oYSl7c3dpdGNoKGEpe2Nhc2VcInRvcFwiOmg9MDticmVhaztjYXNlXCJib3R0b21cIjpoPWsvZi1kO2JyZWFrO2Nhc2VcImxlZnRcIjpnPTA7YnJlYWs7Y2FzZVwicmlnaHRcIjpnPWovZi1jO2JyZWFrO2Nhc2VcImNlbnRlclwiOmJyZWFrO2RlZmF1bHQ6Y29uc29sZSYmY29uc29sZS5sb2cmJmNvbnNvbGUubG9nKFwiVW5rbm93biBwb3NpdGlvbjogXCIrYSl9fSksaT0wPT09aD9nOmcrXCIgXCIraCxpPVwidHJhbnNsYXRlKFwiK2krXCIpXCIsZT8vdHJhbnNsYXRlLy50ZXN0KGUpP2U9ZS5yZXBsYWNlKC90cmFuc2xhdGVcXCguKj9cXCkvLGkpOmUrPVwiIFwiK2k6ZT1pLGEuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsZSl9fSl9fTtiLmV4cG9ydHM9e3JlZnJlc2g6Y319LHt9XSw3OltmdW5jdGlvbihhLGIpe3ZhciBjPS8oaWNvbmljLXNtXFxifGljb25pYy1tZFxcYnxpY29uaWMtbGdcXGIpLyxkPWZ1bmN0aW9uKGEsYil7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlJiZ3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhLG51bGwpLmdldFByb3BlcnR5VmFsdWUoYik7cmV0dXJuIWMmJmEuY3VycmVudFN0eWxlJiYoYz1hLmN1cnJlbnRTdHlsZVtiLnJlcGxhY2UoLyhbYS16XSlcXC0oW2Etel0pLyxmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGIrYy50b1VwcGVyQ2FzZSgpfSldfHxhLmN1cnJlbnRTdHlsZVtiXSksY30sZT1mdW5jdGlvbihhKXt2YXIgYj1hLnN0eWxlLmRpc3BsYXk7YS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjt2YXIgYz1wYXJzZUZsb2F0KGQoYSxcIndpZHRoXCIpLnNsaWNlKDAsLTIpKSxlPXBhcnNlRmxvYXQoZChhLFwiaGVpZ2h0XCIpLnNsaWNlKDAsLTIpKTtyZXR1cm4gYS5zdHlsZS5kaXNwbGF5PWIse3dpZHRoOmMsaGVpZ2h0OmV9fSxmPWZ1bmN0aW9uKCl7dmFyIGE9XCIvKiBJY29uaWMgUmVzcG9uc2l2ZSBTdXBwb3J0IFN0eWxlcyAqL1xcbi5pY29uaWMtcHJvcGVydHktZmlsbCwgLmljb25pYy1wcm9wZXJ0eS10ZXh0IHtzdHJva2U6IG5vbmUgIWltcG9ydGFudDt9XFxuLmljb25pYy1wcm9wZXJ0eS1zdHJva2Uge2ZpbGw6IG5vbmUgIWltcG9ydGFudDt9XFxuc3ZnLmljb25pYy5pY29uaWMtZmx1aWQge2hlaWdodDoxMDAlICFpbXBvcnRhbnQ7d2lkdGg6MTAwJSAhaW1wb3J0YW50O31cXG5zdmcuaWNvbmljLmljb25pYy1zbTpub3QoLmljb25pYy1zaXplLW1kKTpub3QoLmljb25pYy1zaXplLWxnKSwgc3ZnLmljb25pYy5pY29uaWMtc2l6ZS1zbXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O31cXG5zdmcuaWNvbmljLmljb25pYy1tZDpub3QoLmljb25pYy1zaXplLXNtKTpub3QoLmljb25pYy1zaXplLWxnKSwgc3ZnLmljb25pYy5pY29uaWMtc2l6ZS1tZHt3aWR0aDozMnB4O2hlaWdodDozMnB4O31cXG5zdmcuaWNvbmljLmljb25pYy1sZzpub3QoLmljb25pYy1zaXplLXNtKTpub3QoLmljb25pYy1zaXplLW1kKSwgc3ZnLmljb25pYy5pY29uaWMtc2l6ZS1sZ3t3aWR0aDoxMjhweDtoZWlnaHQ6MTI4cHg7fVxcbnN2Zy5pY29uaWMtc20gPiBnLmljb25pYy1tZCwgc3ZnLmljb25pYy1zbSA+IGcuaWNvbmljLWxnLCBzdmcuaWNvbmljLW1kID4gZy5pY29uaWMtc20sIHN2Zy5pY29uaWMtbWQgPiBnLmljb25pYy1sZywgc3ZnLmljb25pYy1sZyA+IGcuaWNvbmljLXNtLCBzdmcuaWNvbmljLWxnID4gZy5pY29uaWMtbWQge2Rpc3BsYXk6IG5vbmU7fVxcbnN2Zy5pY29uaWMuaWNvbmljLWljb24tc20gPiBnLmljb25pYy1sZywgc3ZnLmljb25pYy5pY29uaWMtaWNvbi1tZCA+IGcuaWNvbmljLWxnIHtkaXNwbGF5Om5vbmU7fVxcbnN2Zy5pY29uaWMtc206bm90KC5pY29uaWMtaWNvbi1tZCk6bm90KC5pY29uaWMtaWNvbi1sZykgPiBnLmljb25pYy1zbSwgc3ZnLmljb25pYy1tZC5pY29uaWMtaWNvbi1zbSA+IGcuaWNvbmljLXNtLCBzdmcuaWNvbmljLWxnLmljb25pYy1pY29uLXNtID4gZy5pY29uaWMtc20ge2Rpc3BsYXk6aW5saW5lO31cXG5zdmcuaWNvbmljLW1kOm5vdCguaWNvbmljLWljb24tc20pOm5vdCguaWNvbmljLWljb24tbGcpID4gZy5pY29uaWMtbWQsIHN2Zy5pY29uaWMtc20uaWNvbmljLWljb24tbWQgPiBnLmljb25pYy1tZCwgc3ZnLmljb25pYy1sZy5pY29uaWMtaWNvbi1tZCA+IGcuaWNvbmljLW1kIHtkaXNwbGF5OmlubGluZTt9XFxuc3ZnLmljb25pYy1sZzpub3QoLmljb25pYy1pY29uLXNtKTpub3QoLmljb25pYy1pY29uLW1kKSA+IGcuaWNvbmljLWxnLCBzdmcuaWNvbmljLXNtLmljb25pYy1pY29uLWxnID4gZy5pY29uaWMtbGcsIHN2Zy5pY29uaWMtbWQuaWNvbmljLWljb24tbGcgPiBnLmljb25pYy1sZyB7ZGlzcGxheTppbmxpbmU7fVwiO25hdmlnYXRvciYmbmF2aWdhdG9yLnVzZXJBZ2VudCYmL01TSUUgMTBcXC4wLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYoYSs9XCJzdmcuaWNvbmlje3pvb206MS4wMDAxO31cIik7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2IuaWQ9XCJpY29uaWMtcmVzcG9uc2l2ZS1jc3NcIixiLnR5cGU9XCJ0ZXh0L2Nzc1wiLGIuc3R5bGVTaGVldD9iLnN0eWxlU2hlZXQuY3NzVGV4dD1hOmIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpLChkb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0pLmFwcGVuZENoaWxkKGIpfSxnPWZ1bmN0aW9uKGEpe2lmKC9pY29uaWMtZmx1aWQvLnRlc3QoYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSkpe3ZhciBiLGQ9ZShhKSxmPWEudmlld0JveC5iYXNlVmFsLndpZHRoL2Eudmlld0JveC5iYXNlVmFsLmhlaWdodDtiPTE9PT1mP01hdGgubWluKGQud2lkdGgsZC5oZWlnaHQpOjE+Zj9kLndpZHRoOmQuaGVpZ2h0O3ZhciBnO2c9MzI+Yj9cImljb25pYy1zbVwiOmI+PTMyJiYxMjg+Yj9cImljb25pYy1tZFwiOlwiaWNvbmljLWxnXCI7dmFyIGg9YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSxpPWMudGVzdChoKT9oLnJlcGxhY2UoYyxnKTpoK1wiIFwiK2c7YS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGkpfX0saD1mdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5qZWN0ZWQtc3ZnLmljb25pYy1mbHVpZFwiKTtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGEsZnVuY3Rpb24oYSl7ZyhhKX0pfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7ZigpfSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixmdW5jdGlvbigpe2goKX0pLGIuZXhwb3J0cz17cmVmcmVzaDpnLHJlZnJlc2hBbGw6aH19LHt9XSw4OltmdW5jdGlvbihiLGMsZCl7IWZ1bmN0aW9uKGIsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZihhKXthPWEuc3BsaXQoXCIgXCIpO2Zvcih2YXIgYj17fSxjPWEubGVuZ3RoLGQ9W107Yy0tOyliLmhhc093blByb3BlcnR5KGFbY10pfHwoYlthW2NdXT0xLGQudW5zaGlmdChhW2NdKSk7cmV0dXJuIGQuam9pbihcIiBcIil9dmFyIGc9XCJmaWxlOlwiPT09Yi5sb2NhdGlvbi5wcm90b2NvbCxoPWUuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcImh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjQmFzaWNTdHJ1Y3R1cmVcIixcIjEuMVwiKSxpPUFycmF5LnByb3RvdHlwZS5mb3JFYWNofHxmdW5jdGlvbihhLGIpe2lmKHZvaWQgMD09PXRoaXN8fG51bGw9PT10aGlzfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBhKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIGMsZD10aGlzLmxlbmd0aD4+PjA7Zm9yKGM9MDtkPmM7KytjKWMgaW4gdGhpcyYmYS5jYWxsKGIsdGhpc1tjXSxjLHRoaXMpfSxqPXt9LGs9MCxsPVtdLG09W10sbj17fSxvPWZ1bmN0aW9uKGEpe3JldHVybiBhLmNsb25lTm9kZSghMCl9LHA9ZnVuY3Rpb24oYSxiKXttW2FdPW1bYV18fFtdLG1bYV0ucHVzaChiKX0scT1mdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPW1bYV0ubGVuZ3RoO2M+YjtiKyspIWZ1bmN0aW9uKGIpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXttW2FdW2JdKG8oalthXSkpfSwwKX0oYil9LHI9ZnVuY3Rpb24oYSxjKXtpZih2b2lkIDAhPT1qW2FdKWpbYV1pbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQ/YyhvKGpbYV0pKTpwKGEsYyk7ZWxzZXtpZighYi5YTUxIdHRwUmVxdWVzdClyZXR1cm4gYyhcIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdFwiKSwhMTtqW2FdPXt9LHAoYSxjKTt2YXIgZD1uZXcgWE1MSHR0cFJlcXVlc3Q7ZC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZig0PT09ZC5yZWFkeVN0YXRlKXtpZig0MDQ9PT1kLnN0YXR1c3x8bnVsbD09PWQucmVzcG9uc2VYTUwpcmV0dXJuIGMoXCJVbmFibGUgdG8gbG9hZCBTVkcgZmlsZTogXCIrYSksZyYmYyhcIk5vdGU6IFNWRyBpbmplY3Rpb24gYWpheCBjYWxscyBkbyBub3Qgd29yayBsb2NhbGx5IHdpdGhvdXQgYWRqdXN0aW5nIHNlY3VyaXR5IHNldHRpbmcgaW4geW91ciBicm93c2VyLiBPciBjb25zaWRlciB1c2luZyBhIGxvY2FsIHdlYnNlcnZlci5cIiksYygpLCExO2lmKCEoMjAwPT09ZC5zdGF0dXN8fGcmJjA9PT1kLnN0YXR1cykpcmV0dXJuIGMoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluamVjdGluZyB0aGUgU1ZHOiBcIitkLnN0YXR1cytcIiBcIitkLnN0YXR1c1RleHQpLCExO2lmKGQucmVzcG9uc2VYTUwgaW5zdGFuY2VvZiBEb2N1bWVudClqW2FdPWQucmVzcG9uc2VYTUwuZG9jdW1lbnRFbGVtZW50O2Vsc2UgaWYoRE9NUGFyc2VyJiZET01QYXJzZXIgaW5zdGFuY2VvZiBGdW5jdGlvbil7dmFyIGI7dHJ5e3ZhciBlPW5ldyBET01QYXJzZXI7Yj1lLnBhcnNlRnJvbVN0cmluZyhkLnJlc3BvbnNlVGV4dCxcInRleHQveG1sXCIpfWNhdGNoKGYpe2I9dm9pZCAwfWlmKCFifHxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoKXJldHVybiBjKFwiVW5hYmxlIHRvIHBhcnNlIFNWRyBmaWxlOiBcIithKSwhMTtqW2FdPWIuZG9jdW1lbnRFbGVtZW50fXEoYSl9fSxkLm9wZW4oXCJHRVRcIixhKSxkLm92ZXJyaWRlTWltZVR5cGUmJmQub3ZlcnJpZGVNaW1lVHlwZShcInRleHQveG1sXCIpLGQuc2VuZCgpfX0scz1mdW5jdGlvbihhLGMsZCxlKXt2YXIgZz1hLmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpfHxhLmdldEF0dHJpYnV0ZShcInNyY1wiKTtpZighL1xcLnN2Zy9pLnRlc3QoZykpcmV0dXJuIGUoXCJBdHRlbXB0ZWQgdG8gaW5qZWN0IGEgZmlsZSB3aXRoIGEgbm9uLXN2ZyBleHRlbnNpb246IFwiK2cpLHZvaWQgMDtpZighaCl7dmFyIGo9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZhbGxiYWNrXCIpfHxhLmdldEF0dHJpYnV0ZShcImRhdGEtcG5nXCIpO3JldHVybiBqPyhhLnNldEF0dHJpYnV0ZShcInNyY1wiLGopLGUobnVsbCkpOmQ/KGEuc2V0QXR0cmlidXRlKFwic3JjXCIsZCtcIi9cIitnLnNwbGl0KFwiL1wiKS5wb3AoKS5yZXBsYWNlKFwiLnN2Z1wiLFwiLnBuZ1wiKSksZShudWxsKSk6ZShcIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFNWRyBhbmQgbm8gUE5HIGZhbGxiYWNrIHdhcyBkZWZpbmVkLlwiKSx2b2lkIDB9LTE9PT1sLmluZGV4T2YoYSkmJihsLnB1c2goYSksYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIlwiKSxyKGcsZnVuY3Rpb24oZCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGR8fFwic3RyaW5nXCI9PXR5cGVvZiBkKXJldHVybiBlKGQpLCExO3ZhciBoPWEuZ2V0QXR0cmlidXRlKFwiaWRcIik7aCYmZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGgpO3ZhciBqPWEuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7aiYmZC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLGopO3ZhciBtPVtdLmNvbmNhdChkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxbXSxcImluamVjdGVkLXN2Z1wiLGEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFtdKS5qb2luKFwiIFwiKTtkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZihtKSk7dmFyIG89YS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtvJiZkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsbyk7dmFyIHA9W10uZmlsdGVyLmNhbGwoYS5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGEpe3JldHVybi9eZGF0YS1cXHdbXFx3XFwtXSokLy50ZXN0KGEubmFtZSl9KTtpLmNhbGwocCxmdW5jdGlvbihhKXthLm5hbWUmJmEudmFsdWUmJmQuc2V0QXR0cmlidXRlKGEubmFtZSxhLnZhbHVlKX0pO3ZhciBxLHIscyx0LHUsdj17Y2xpcFBhdGg6W1wiY2xpcC1wYXRoXCJdLFwiY29sb3ItcHJvZmlsZVwiOltcImNvbG9yLXByb2ZpbGVcIl0sY3Vyc29yOltcImN1cnNvclwiXSxmaWx0ZXI6W1wiZmlsdGVyXCJdLGxpbmVhckdyYWRpZW50OltcImZpbGxcIixcInN0cm9rZVwiXSxtYXJrZXI6W1wibWFya2VyXCIsXCJtYXJrZXItc3RhcnRcIixcIm1hcmtlci1taWRcIixcIm1hcmtlci1lbmRcIl0sbWFzazpbXCJtYXNrXCJdLHBhdHRlcm46W1wiZmlsbFwiLFwic3Ryb2tlXCJdLHJhZGlhbEdyYWRpZW50OltcImZpbGxcIixcInN0cm9rZVwiXX07T2JqZWN0LmtleXModikuZm9yRWFjaChmdW5jdGlvbihhKXtxPWEscz12W2FdLHI9ZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGVmcyBcIitxK1wiW2lkXVwiKTtmb3IodmFyIGI9MCxjPXIubGVuZ3RoO2M+YjtiKyspe3Q9cltiXS5pZCx1PXQrXCItXCIrazt2YXIgZTtpLmNhbGwocyxmdW5jdGlvbihhKXtlPWQucXVlcnlTZWxlY3RvckFsbChcIltcIithKycqPVwiJyt0KydcIl0nKTtmb3IodmFyIGI9MCxjPWUubGVuZ3RoO2M+YjtiKyspZVtiXS5zZXRBdHRyaWJ1dGUoYSxcInVybCgjXCIrdStcIilcIil9KSxyW2JdLmlkPXV9fSksZC5yZW1vdmVBdHRyaWJ1dGUoXCJ4bWxuczphXCIpO2Zvcih2YXIgdyx4LHk9ZC5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0XCIpLHo9W10sQT0wLEI9eS5sZW5ndGg7Qj5BO0ErKyl4PXlbQV0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKSx4JiZcImFwcGxpY2F0aW9uL2VjbWFzY3JpcHRcIiE9PXgmJlwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiIT09eHx8KHc9eVtBXS5pbm5lclRleHR8fHlbQV0udGV4dENvbnRlbnQsei5wdXNoKHcpLGQucmVtb3ZlQ2hpbGQoeVtBXSkpO2lmKHoubGVuZ3RoPjAmJihcImFsd2F5c1wiPT09Y3x8XCJvbmNlXCI9PT1jJiYhbltnXSkpe2Zvcih2YXIgQz0wLEQ9ei5sZW5ndGg7RD5DO0MrKyluZXcgRnVuY3Rpb24oeltDXSkoYik7bltnXT0hMH12YXIgRT1kLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVwiKTtpLmNhbGwoRSxmdW5jdGlvbihhKXthLnRleHRDb250ZW50Kz1cIlwifSksYS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChkLGEpLGRlbGV0ZSBsW2wuaW5kZXhPZihhKV0sYT1udWxsLGsrKyxlKGQpfSkpfSx0PWZ1bmN0aW9uKGEsYixjKXtiPWJ8fHt9O3ZhciBkPWIuZXZhbFNjcmlwdHN8fFwiYWx3YXlzXCIsZT1iLnBuZ0ZhbGxiYWNrfHwhMSxmPWIuZWFjaDtpZih2b2lkIDAhPT1hLmxlbmd0aCl7dmFyIGc9MDtpLmNhbGwoYSxmdW5jdGlvbihiKXtzKGIsZCxlLGZ1bmN0aW9uKGIpe2YmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJmYoYiksYyYmYS5sZW5ndGg9PT0rK2cmJmMoZyl9KX0pfWVsc2UgYT9zKGEsZCxlLGZ1bmN0aW9uKGIpe2YmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJmYoYiksYyYmYygxKSxhPW51bGx9KTpjJiZjKDApfTtcIm9iamVjdFwiPT10eXBlb2YgYyYmXCJvYmplY3RcIj09dHlwZW9mIGMuZXhwb3J0cz9jLmV4cG9ydHM9ZD10OlwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEuYW1kP2EoZnVuY3Rpb24oKXtyZXR1cm4gdH0pOlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoYi5TVkdJbmplY3Rvcj10KX0od2luZG93LGRvY3VtZW50KX0se31dfSx7fSxbMV0pKDEpfSk7IiwiY29uc3QgaGVscGVycyA9IHtcblxuICAgIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgICAgICBsZXQgdGltZW91dDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGRvbVJlYWR5KGZuKSB7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBoYXNBdWRpbyh2aWRlbykge1xuICAgICAgICAvLyBXaWxsIHJldHVybiBhIHRydXRoeSAvIGZhbHN5IHZhbHVlLiBOb3QgbmVjZXNzYXJpbHkgdHJ1ZSBvciBmYWxzZSB0eXBlLlxuICAgICAgICByZXR1cm4gdmlkZW8ubW96SGFzQXVkaW8gfHwgISF2aWRlby53ZWJraXRBdWRpb0RlY29kZWRCeXRlQ291bnQgfHwgdmlkZW8uYXVkaW9UcmFja3MgJiYgISF2aWRlby5hdWRpb1RyYWNrcy5sZW5ndGg7XG4gICAgfSxcblxuICAgIHNvcnRCeUF0dHIoJGl0ZW1zLCBhdHRyKSB7XG5cbiAgICAgICAgaWYgKCEkaXRlbXMubGVuZ3RoIHx8ICFhdHRyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRpdGVtcy5zb3J0KChhLCBiKSA9PiAoYS5nZXRBdHRyaWJ1dGUoYXR0cikgLSBiLmdldEF0dHJpYnV0ZShhdHRyKSkpO1xuXG4gICAgfSxcblxuICAgIHJlbW92ZUNsYXNzKGl0ZW1zLCBhdHRyKSB7XG5cbiAgICAgICAgY29uc3QgZWxzID0gaXRlbXM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKGF0dHIpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgcmVtb3ZlQXR0cmlidXRlKGl0ZW1zLCBhdHRyKSB7XG5cbiAgICAgICAgY29uc3QgZWxzID0gaXRlbXM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVsc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBoYXNoKHN0cikge1xuXG4gICAgICAgIGxldCBoYXNoID0gMCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBjaHIsXG4gICAgICAgICAgICBsZW47XG5cbiAgICAgICAgaWYgKCFzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Egc3RyaW5nIGdyZWF0ZXIgdGhhbiAwIGluIGxlbmd0aCBtdXN0IGJlIHBhc3NlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaHI7XG4gICAgICAgICAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGhhc2gpO1xuXG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG4iLCJjb25zdCAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xuXG5jb25zdCBjYWNoZSA9IHtcblxuICAgIGdldChzZWxlY3Rvcikge1xuXG4gICAgICAgIGNvbnN0IGVsID0gc2VsZWN0b3IudHJpbSgpO1xuXG4gICAgICAgIGlmICghZWwubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBnbG9iYWwud2Vic2l0ZSA9IGdsb2JhbC53ZWJzaXRlIHx8IHt9O1xuICAgICAgICBnbG9iYWwud2Vic2l0ZS5jYWNoZSA9IGdsb2JhbC53ZWJzaXRlLmNhY2hlIHx8IHt9O1xuXG4gICAgICAgIGlmICghZ2xvYmFsLndlYnNpdGUuY2FjaGUuaGFzT3duUHJvcGVydHkoZWwpKSB7XG4gICAgICAgICAgICBnbG9iYWwud2Vic2l0ZS5jYWNoZVtlbF0gPSAkKGVsKTtcbiAgICAgICAgICAgIGdsb2JhbC53ZWJzaXRlLmNhY2hlW2VsXS5yZXF1ZXN0ZWQgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2xvYmFsLndlYnNpdGUuY2FjaGVbZWxdLnJlcXVlc3RlZCA9IGdsb2JhbC53ZWJzaXRlLmNhY2hlW2VsXS5yZXF1ZXN0ZWQgKyAxO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9IGdsb2JhbC53ZWJzaXRlLmNhY2hlW2VsXTtcblxuICAgICAgICByZXR1cm4gJGVsO1xuXG4gICAgfSxcblxuICAgIGxpc3QoKSB7XG5cbiAgICAgICAgaWYgKCFnbG9iYWwud2Vic2l0ZS5jYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdsb2JhbC53ZWJzaXRlLmNhY2hlO1xuXG4gICAgfSxcblxuICAgIGNsZWFyKCkge1xuXG4gICAgICAgIGlmIChnbG9iYWwuaGFzT3duUHJvcGVydHkoJ3dlYnNpdGUnKSkge1xuICAgICAgICAgICAgaWYgKGdsb2JhbC53ZWJzaXRlLmhhc093blByb3BlcnR5KCdjYWNoZScpKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLndlYnNpdGUuY2FjaGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG5cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGU7XG4iLCIvKiFcbiAqIGhlYWRyb29tLmpzIHYwLjkuMyAtIEdpdmUgeW91ciBwYWdlIHNvbWUgaGVhZHJvb20uIEhpZGUgeW91ciBoZWFkZXIgdW50aWwgeW91IG5lZWQgaXRcbiAqIENvcHlyaWdodCAoYykgMjAxNiBOaWNrIFdpbGxpYW1zIC0gaHR0cDovL3dpY2t5Lm5pbGxpYS5tcy9oZWFkcm9vbS5qc1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBDT01NT05KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIEJST1dTRVJcbiAgICByb290LkhlYWRyb29tID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyogZXhwb3J0ZWQgZmVhdHVyZXMgKi9cbiAgXG4gIHZhciBmZWF0dXJlcyA9IHtcbiAgICBiaW5kIDogISEoZnVuY3Rpb24oKXt9LmJpbmQpLFxuICAgIGNsYXNzTGlzdCA6ICdjbGFzc0xpc3QnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICByQUYgOiAhISh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgfTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICBcbiAgLyoqXG4gICAqIEhhbmRsZXMgZGVib3VuY2luZyBvZiBldmVudHMgdmlhIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgKiBAc2VlIGh0dHA6Ly93d3cuaHRtbDVyb2Nrcy5jb20vZW4vdHV0b3JpYWxzL3NwZWVkL2FuaW1hdGlvbnMvXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBoYW5kbGUgd2hpY2hldmVyIGV2ZW50XG4gICAqL1xuICBmdW5jdGlvbiBEZWJvdW5jZXIgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMudGlja2luZyA9IGZhbHNlO1xuICB9XG4gIERlYm91bmNlci5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3IgOiBEZWJvdW5jZXIsXG4gIFxuICAgIC8qKlxuICAgICAqIGRpc3BhdGNoZXMgdGhlIGV2ZW50IHRvIHRoZSBzdXBwbGllZCBjYWxsYmFja1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdXBkYXRlIDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgIHRoaXMudGlja2luZyA9IGZhbHNlO1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIGVuc3VyZXMgZXZlbnRzIGRvbid0IGdldCBzdGFja2VkXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICByZXF1ZXN0VGljayA6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYoIXRoaXMudGlja2luZykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yYWZDYWxsYmFjayB8fCAodGhpcy5yYWZDYWxsYmFjayA9IHRoaXMudXBkYXRlLmJpbmQodGhpcykpKTtcbiAgICAgICAgdGhpcy50aWNraW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggdGhpcyBhcyB0aGUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICovXG4gICAgaGFuZGxlRXZlbnQgOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucmVxdWVzdFRpY2soKTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDaGVjayBpZiBvYmplY3QgaXMgcGFydCBvZiB0aGUgRE9NXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIGVsZW1lbnQgdG8gY2hlY2tcbiAgICovXG4gIGZ1bmN0aW9uIGlzRE9NRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIChvYmogPT09IHdpbmRvdyB8fCBvYmoubm9kZVR5cGUpO1xuICB9XG4gIFxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBleHRlbmRpbmcgb2JqZWN0c1xuICAgKi9cbiAgZnVuY3Rpb24gZXh0ZW5kIChvYmplY3QgLyosIG9iamVjdE4gLi4uICovKSB7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYXJndW1lbnRzIGluIGV4dGVuZCBmdW5jdGlvbicpO1xuICAgIH1cbiAgXG4gICAgdmFyIHJlc3VsdCA9IG9iamVjdCB8fCB7fSxcbiAgICAgICAga2V5LFxuICAgICAgICBpO1xuICBcbiAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmVwbGFjZW1lbnQgPSBhcmd1bWVudHNbaV0gfHwge307XG4gIFxuICAgICAgZm9yIChrZXkgaW4gcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgLy8gUmVjdXJzZSBpbnRvIG9iamVjdCBleGNlcHQgaWYgdGhlIG9iamVjdCBpcyBhIERPTSBlbGVtZW50XG4gICAgICAgIGlmKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgISBpc0RPTUVsZW1lbnQocmVzdWx0W2tleV0pKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBleHRlbmQocmVzdWx0W2tleV0sIHJlcGxhY2VtZW50W2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gcmVzdWx0W2tleV0gfHwgcmVwbGFjZW1lbnRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiBmb3Igbm9ybWFsaXppbmcgdG9sZXJhbmNlIG9wdGlvbiB0byBvYmplY3QgZm9ybWF0XG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVUb2xlcmFuY2UgKHQpIHtcbiAgICByZXR1cm4gdCA9PT0gT2JqZWN0KHQpID8gdCA6IHsgZG93biA6IHQsIHVwIDogdCB9O1xuICB9XG4gIFxuICAvKipcbiAgICogVUkgZW5oYW5jZW1lbnQgZm9yIGZpeGVkIGhlYWRlcnMuXG4gICAqIEhpZGVzIGhlYWRlciB3aGVuIHNjcm9sbGluZyBkb3duXG4gICAqIFNob3dzIGhlYWRlciB3aGVuIHNjcm9sbGluZyB1cFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtET01FbGVtZW50fSBlbGVtIHRoZSBoZWFkZXIgZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvcHRpb25zIGZvciB0aGUgd2lkZ2V0XG4gICAqL1xuICBmdW5jdGlvbiBIZWFkcm9vbSAoZWxlbSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBleHRlbmQob3B0aW9ucywgSGVhZHJvb20ub3B0aW9ucyk7XG4gIFxuICAgIHRoaXMubGFzdEtub3duU2Nyb2xsWSA9IDA7XG4gICAgdGhpcy5lbGVtICAgICAgICAgICAgID0gZWxlbTtcbiAgICB0aGlzLnRvbGVyYW5jZSAgICAgICAgPSBub3JtYWxpemVUb2xlcmFuY2Uob3B0aW9ucy50b2xlcmFuY2UpO1xuICAgIHRoaXMuY2xhc3NlcyAgICAgICAgICA9IG9wdGlvbnMuY2xhc3NlcztcbiAgICB0aGlzLm9mZnNldCAgICAgICAgICAgPSBvcHRpb25zLm9mZnNldDtcbiAgICB0aGlzLnNjcm9sbGVyICAgICAgICAgPSBvcHRpb25zLnNjcm9sbGVyO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgICAgICA9IGZhbHNlO1xuICAgIHRoaXMub25QaW4gICAgICAgICAgICA9IG9wdGlvbnMub25QaW47XG4gICAgdGhpcy5vblVucGluICAgICAgICAgID0gb3B0aW9ucy5vblVucGluO1xuICAgIHRoaXMub25Ub3AgICAgICAgICAgICA9IG9wdGlvbnMub25Ub3A7XG4gICAgdGhpcy5vbk5vdFRvcCAgICAgICAgID0gb3B0aW9ucy5vbk5vdFRvcDtcbiAgICB0aGlzLm9uQm90dG9tICAgICAgICAgPSBvcHRpb25zLm9uQm90dG9tO1xuICAgIHRoaXMub25Ob3RCb3R0b20gICAgICA9IG9wdGlvbnMub25Ob3RCb3R0b207XG4gIH1cbiAgSGVhZHJvb20ucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yIDogSGVhZHJvb20sXG4gIFxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSB3aWRnZXRcbiAgICAgKi9cbiAgICBpbml0IDogZnVuY3Rpb24oKSB7XG4gICAgICBpZighSGVhZHJvb20uY3V0c1RoZU11c3RhcmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIHRoaXMuZGVib3VuY2VyID0gbmV3IERlYm91bmNlcih0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5pbml0aWFsKTtcbiAgXG4gICAgICAvLyBkZWZlciBldmVudCByZWdpc3RyYXRpb24gdG8gaGFuZGxlIGJyb3dzZXIgXG4gICAgICAvLyBwb3RlbnRpYWxseSByZXN0b3JpbmcgcHJldmlvdXMgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuYXR0YWNoRXZlbnQuYmluZCh0aGlzKSwgMTAwKTtcbiAgXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBVbmF0dGFjaGVzIGV2ZW50cyBhbmQgcmVtb3ZlcyBhbnkgY2xhc3NlcyB0aGF0IHdlcmUgYWRkZWRcbiAgICAgKi9cbiAgICBkZXN0cm95IDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcztcbiAgXG4gICAgICB0aGlzLmluaXRpYWxpc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLnVucGlubmVkLCBjbGFzc2VzLnBpbm5lZCwgY2xhc3Nlcy50b3AsIGNsYXNzZXMubm90VG9wLCBjbGFzc2VzLmluaXRpYWwpO1xuICAgICAgdGhpcy5zY3JvbGxlci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmNlciwgZmFsc2UpO1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHRoZSBzY3JvbGwgZXZlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGF0dGFjaEV2ZW50IDogZnVuY3Rpb24oKSB7XG4gICAgICBpZighdGhpcy5pbml0aWFsaXNlZCl7XG4gICAgICAgIHRoaXMubGFzdEtub3duU2Nyb2xsWSA9IHRoaXMuZ2V0U2Nyb2xsWSgpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JvbGxlci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmNlciwgZmFsc2UpO1xuICBcbiAgICAgICAgdGhpcy5kZWJvdW5jZXIuaGFuZGxlRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qKlxuICAgICAqIFVucGlucyB0aGUgaGVhZGVyIGlmIGl0J3MgY3VycmVudGx5IHBpbm5lZFxuICAgICAqL1xuICAgIHVucGluIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2xhc3NMaXN0ID0gdGhpcy5lbGVtLmNsYXNzTGlzdCxcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcztcbiAgICAgIFxuICAgICAgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMucGlubmVkKSB8fCAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMudW5waW5uZWQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoY2xhc3Nlcy51bnBpbm5lZCk7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlcy5waW5uZWQpO1xuICAgICAgICB0aGlzLm9uVW5waW4gJiYgdGhpcy5vblVucGluLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogUGlucyB0aGUgaGVhZGVyIGlmIGl0J3MgY3VycmVudGx5IHVucGlubmVkXG4gICAgICovXG4gICAgcGluIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2xhc3NMaXN0ID0gdGhpcy5lbGVtLmNsYXNzTGlzdCxcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcztcbiAgICAgIFxuICAgICAgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMudW5waW5uZWQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlcy51bnBpbm5lZCk7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoY2xhc3Nlcy5waW5uZWQpO1xuICAgICAgICB0aGlzLm9uUGluICYmIHRoaXMub25QaW4uY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSB0b3Agc3RhdGVzXG4gICAgICovXG4gICAgdG9wIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2xhc3NMaXN0ID0gdGhpcy5lbGVtLmNsYXNzTGlzdCxcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcztcbiAgICAgIFxuICAgICAgaWYoIWNsYXNzTGlzdC5jb250YWlucyhjbGFzc2VzLnRvcCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZChjbGFzc2VzLnRvcCk7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlcy5ub3RUb3ApO1xuICAgICAgICB0aGlzLm9uVG9wICYmIHRoaXMub25Ub3AuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBub3QgdG9wIHN0YXRlXG4gICAgICovXG4gICAgbm90VG9wIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2xhc3NMaXN0ID0gdGhpcy5lbGVtLmNsYXNzTGlzdCxcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcztcbiAgICAgIFxuICAgICAgaWYoIWNsYXNzTGlzdC5jb250YWlucyhjbGFzc2VzLm5vdFRvcCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZChjbGFzc2VzLm5vdFRvcCk7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlcy50b3ApO1xuICAgICAgICB0aGlzLm9uTm90VG9wICYmIHRoaXMub25Ob3RUb3AuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgICBib3R0b20gOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLmVsZW0uY2xhc3NMaXN0LFxuICAgICAgICBjbGFzc2VzID0gdGhpcy5jbGFzc2VzO1xuICAgICAgXG4gICAgICBpZighY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMuYm90dG9tKSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzZXMuYm90dG9tKTtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLm5vdEJvdHRvbSk7XG4gICAgICAgIHRoaXMub25Cb3R0b20gJiYgdGhpcy5vbkJvdHRvbS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIG5vdCB0b3Agc3RhdGVcbiAgICAgKi9cbiAgICBub3RCb3R0b20gOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLmVsZW0uY2xhc3NMaXN0LFxuICAgICAgICBjbGFzc2VzID0gdGhpcy5jbGFzc2VzO1xuICAgICAgXG4gICAgICBpZighY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMubm90Qm90dG9tKSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzZXMubm90Qm90dG9tKTtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLmJvdHRvbSk7XG4gICAgICAgIHRoaXMub25Ob3RCb3R0b20gJiYgdGhpcy5vbk5vdEJvdHRvbS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIFkgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93LnNjcm9sbFlcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHBpeGVscyB0aGUgcGFnZSBoYXMgc2Nyb2xsZWQgYWxvbmcgdGhlIFktYXhpc1xuICAgICAqL1xuICAgIGdldFNjcm9sbFkgOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAodGhpcy5zY3JvbGxlci5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICA/IHRoaXMuc2Nyb2xsZXIucGFnZVlPZmZzZXRcbiAgICAgICAgOiAodGhpcy5zY3JvbGxlci5zY3JvbGxUb3AgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICA/IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wXG4gICAgICAgICAgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydFxuICAgICAqIEBzZWUgaHR0cDovL2FuZHlsYW5ndG9uLmNvLnVrL2Jsb2cvZGV2ZWxvcG1lbnQvZ2V0LXZpZXdwb3J0LXNpemUtd2lkdGgtYW5kLWhlaWdodC1qYXZhc2NyaXB0XG4gICAgICogQHJldHVybiB7aW50fSB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBpbiBwaXhlbHNcbiAgICAgKi9cbiAgICBnZXRWaWV3cG9ydEhlaWdodCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwaHlzaWNhbCBoZWlnaHQgb2YgdGhlIERPTSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgZWxtIHRoZSBlbGVtZW50IHRvIGNhbGN1bGF0ZSB0aGUgcGh5c2ljYWwgaGVpZ2h0IG9mIHdoaWNoXG4gICAgICogQHJldHVybiB7aW50fSAgICAgdGhlIHBoeXNpY2FsIGhlaWdodCBvZiB0aGUgZWxlbWVudCBpbiBwaXhlbHNcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50UGh5c2ljYWxIZWlnaHQgOiBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAgIGVsbS5vZmZzZXRIZWlnaHQsXG4gICAgICAgIGVsbS5jbGllbnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcGh5c2ljYWwgaGVpZ2h0IG9mIHRoZSBzY3JvbGxlciBlbGVtZW50XG4gICAgICogQHJldHVybiB7aW50fSB0aGUgcGh5c2ljYWwgaGVpZ2h0IG9mIHRoZSBzY3JvbGxlciBlbGVtZW50IGluIHBpeGVsc1xuICAgICAqL1xuICAgIGdldFNjcm9sbGVyUGh5c2ljYWxIZWlnaHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuc2Nyb2xsZXIgPT09IHdpbmRvdyB8fCB0aGlzLnNjcm9sbGVyID09PSBkb2N1bWVudC5ib2R5KVxuICAgICAgICA/IHRoaXMuZ2V0Vmlld3BvcnRIZWlnaHQoKVxuICAgICAgICA6IHRoaXMuZ2V0RWxlbWVudFBoeXNpY2FsSGVpZ2h0KHRoaXMuc2Nyb2xsZXIpO1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGhlaWdodCBvZiB0aGUgZG9jdW1lbnRcbiAgICAgKiBAc2VlIGh0dHA6Ly9qYW1lcy5wYWRvbHNleS5jb20vamF2YXNjcmlwdC9nZXQtZG9jdW1lbnQtaGVpZ2h0LWNyb3NzLWJyb3dzZXIvXG4gICAgICogQHJldHVybiB7aW50fSB0aGUgaGVpZ2h0IG9mIHRoZSBkb2N1bWVudCBpbiBwaXhlbHNcbiAgICAgKi9cbiAgICBnZXREb2N1bWVudEhlaWdodCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIFxuICAgICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICBib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIGJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICApO1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGhlaWdodCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBlbG0gdGhlIGVsZW1lbnQgdG8gY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2Ygd2hpY2hcbiAgICAgKiBAcmV0dXJuIHtpbnR9ICAgICB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGluIHBpeGVsc1xuICAgICAqL1xuICAgIGdldEVsZW1lbnRIZWlnaHQgOiBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAgIGVsbS5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGVsbS5vZmZzZXRIZWlnaHQsXG4gICAgICAgIGVsbS5jbGllbnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBzY3JvbGxlciBlbGVtZW50XG4gICAgICogQHJldHVybiB7aW50fSB0aGUgaGVpZ2h0IG9mIHRoZSBzY3JvbGxlciBlbGVtZW50IGluIHBpeGVsc1xuICAgICAqL1xuICAgIGdldFNjcm9sbGVySGVpZ2h0IDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICh0aGlzLnNjcm9sbGVyID09PSB3aW5kb3cgfHwgdGhpcy5zY3JvbGxlciA9PT0gZG9jdW1lbnQuYm9keSlcbiAgICAgICAgPyB0aGlzLmdldERvY3VtZW50SGVpZ2h0KClcbiAgICAgICAgOiB0aGlzLmdldEVsZW1lbnRIZWlnaHQodGhpcy5zY3JvbGxlcik7XG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIG91dHNpZGUgb2YgZG9jdW1lbnQgYm91bmRhcmllc1xuICAgICAqIEBwYXJhbSAge2ludH0gIGN1cnJlbnRTY3JvbGxZIHRoZSBjdXJyZW50IHkgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBvdXQgb2YgYm91bmRzLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBpc091dE9mQm91bmRzIDogZnVuY3Rpb24gKGN1cnJlbnRTY3JvbGxZKSB7XG4gICAgICB2YXIgcGFzdFRvcCAgPSBjdXJyZW50U2Nyb2xsWSA8IDAsXG4gICAgICAgIHBhc3RCb3R0b20gPSBjdXJyZW50U2Nyb2xsWSArIHRoaXMuZ2V0U2Nyb2xsZXJQaHlzaWNhbEhlaWdodCgpID4gdGhpcy5nZXRTY3JvbGxlckhlaWdodCgpO1xuICAgICAgXG4gICAgICByZXR1cm4gcGFzdFRvcCB8fCBwYXN0Qm90dG9tO1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgaWYgdGhlIHRvbGVyYW5jZSBoYXMgYmVlbiBleGNlZWRlZFxuICAgICAqIEBwYXJhbSAge2ludH0gY3VycmVudFNjcm9sbFkgdGhlIGN1cnJlbnQgc2Nyb2xsIHkgcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIHRvbGVyYW5jZSBleGNlZWRlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgdG9sZXJhbmNlRXhjZWVkZWQgOiBmdW5jdGlvbiAoY3VycmVudFNjcm9sbFksIGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKGN1cnJlbnRTY3JvbGxZLXRoaXMubGFzdEtub3duU2Nyb2xsWSkgPj0gdGhpcy50b2xlcmFuY2VbZGlyZWN0aW9uXTtcbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBkZXRlcm1pbmUgaWYgaXQgaXMgYXBwcm9wcmlhdGUgdG8gdW5waW5cbiAgICAgKiBAcGFyYW0gIHtpbnR9IGN1cnJlbnRTY3JvbGxZIHRoZSBjdXJyZW50IHkgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICogQHBhcmFtICB7Ym9vbH0gdG9sZXJhbmNlRXhjZWVkZWQgaGFzIHRoZSB0b2xlcmFuY2UgYmVlbiBleGNlZWRlZD9cbiAgICAgKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIHNob3VsZCB1bnBpbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgc2hvdWxkVW5waW4gOiBmdW5jdGlvbiAoY3VycmVudFNjcm9sbFksIHRvbGVyYW5jZUV4Y2VlZGVkKSB7XG4gICAgICB2YXIgc2Nyb2xsaW5nRG93biA9IGN1cnJlbnRTY3JvbGxZID4gdGhpcy5sYXN0S25vd25TY3JvbGxZLFxuICAgICAgICBwYXN0T2Zmc2V0ID0gY3VycmVudFNjcm9sbFkgPj0gdGhpcy5vZmZzZXQ7XG4gIFxuICAgICAgcmV0dXJuIHNjcm9sbGluZ0Rvd24gJiYgcGFzdE9mZnNldCAmJiB0b2xlcmFuY2VFeGNlZWRlZDtcbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiBkZXRlcm1pbmUgaWYgaXQgaXMgYXBwcm9wcmlhdGUgdG8gcGluXG4gICAgICogQHBhcmFtICB7aW50fSBjdXJyZW50U2Nyb2xsWSB0aGUgY3VycmVudCB5IHNjcm9sbCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSAge2Jvb2x9IHRvbGVyYW5jZUV4Y2VlZGVkIGhhcyB0aGUgdG9sZXJhbmNlIGJlZW4gZXhjZWVkZWQ/XG4gICAgICogQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBzaG91bGQgcGluLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBzaG91bGRQaW4gOiBmdW5jdGlvbiAoY3VycmVudFNjcm9sbFksIHRvbGVyYW5jZUV4Y2VlZGVkKSB7XG4gICAgICB2YXIgc2Nyb2xsaW5nVXAgID0gY3VycmVudFNjcm9sbFkgPCB0aGlzLmxhc3RLbm93blNjcm9sbFksXG4gICAgICAgIHBhc3RPZmZzZXQgPSBjdXJyZW50U2Nyb2xsWSA8PSB0aGlzLm9mZnNldDtcbiAgXG4gICAgICByZXR1cm4gKHNjcm9sbGluZ1VwICYmIHRvbGVyYW5jZUV4Y2VlZGVkKSB8fCBwYXN0T2Zmc2V0O1xuICAgIH0sXG4gIFxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdXBkYXRpbmcgdGhlIHN0YXRlIG9mIHRoZSB3aWRnZXRcbiAgICAgKi9cbiAgICB1cGRhdGUgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50U2Nyb2xsWSAgPSB0aGlzLmdldFNjcm9sbFkoKSxcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uID0gY3VycmVudFNjcm9sbFkgPiB0aGlzLmxhc3RLbm93blNjcm9sbFkgPyAnZG93bicgOiAndXAnLFxuICAgICAgICB0b2xlcmFuY2VFeGNlZWRlZCA9IHRoaXMudG9sZXJhbmNlRXhjZWVkZWQoY3VycmVudFNjcm9sbFksIHNjcm9sbERpcmVjdGlvbik7XG4gIFxuICAgICAgaWYodGhpcy5pc091dE9mQm91bmRzKGN1cnJlbnRTY3JvbGxZKSkgeyAvLyBJZ25vcmUgYm91bmN5IHNjcm9sbGluZyBpbiBPU1hcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChjdXJyZW50U2Nyb2xsWSA8PSB0aGlzLm9mZnNldCApIHtcbiAgICAgICAgdGhpcy50b3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm90VG9wKCk7XG4gICAgICB9XG4gIFxuICAgICAgaWYoY3VycmVudFNjcm9sbFkgKyB0aGlzLmdldFZpZXdwb3J0SGVpZ2h0KCkgPj0gdGhpcy5nZXRTY3JvbGxlckhlaWdodCgpKSB7XG4gICAgICAgIHRoaXMuYm90dG9tKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5ub3RCb3R0b20oKTtcbiAgICAgIH1cbiAgXG4gICAgICBpZih0aGlzLnNob3VsZFVucGluKGN1cnJlbnRTY3JvbGxZLCB0b2xlcmFuY2VFeGNlZWRlZCkpIHtcbiAgICAgICAgdGhpcy51bnBpbigpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLnNob3VsZFBpbihjdXJyZW50U2Nyb2xsWSwgdG9sZXJhbmNlRXhjZWVkZWQpKSB7XG4gICAgICAgIHRoaXMucGluKCk7XG4gICAgICB9XG4gIFxuICAgICAgdGhpcy5sYXN0S25vd25TY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogRGVmYXVsdCBvcHRpb25zXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBIZWFkcm9vbS5vcHRpb25zID0ge1xuICAgIHRvbGVyYW5jZSA6IHtcbiAgICAgIHVwIDogMCxcbiAgICAgIGRvd24gOiAwXG4gICAgfSxcbiAgICBvZmZzZXQgOiAwLFxuICAgIHNjcm9sbGVyOiB3aW5kb3csXG4gICAgY2xhc3NlcyA6IHtcbiAgICAgIHBpbm5lZCA6ICdoZWFkcm9vbS0tcGlubmVkJyxcbiAgICAgIHVucGlubmVkIDogJ2hlYWRyb29tLS11bnBpbm5lZCcsXG4gICAgICB0b3AgOiAnaGVhZHJvb20tLXRvcCcsXG4gICAgICBub3RUb3AgOiAnaGVhZHJvb20tLW5vdC10b3AnLFxuICAgICAgYm90dG9tIDogJ2hlYWRyb29tLS1ib3R0b20nLFxuICAgICAgbm90Qm90dG9tIDogJ2hlYWRyb29tLS1ub3QtYm90dG9tJyxcbiAgICAgIGluaXRpYWwgOiAnaGVhZHJvb20nXG4gICAgfVxuICB9O1xuICBIZWFkcm9vbS5jdXRzVGhlTXVzdGFyZCA9IHR5cGVvZiBmZWF0dXJlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZmVhdHVyZXMuckFGICYmIGZlYXR1cmVzLmJpbmQgJiYgZmVhdHVyZXMuY2xhc3NMaXN0O1xuXG4gIHJldHVybiBIZWFkcm9vbTtcbn0pKTsiLCJjb25zdCBIZWFkcm9vbSA9IHJlcXVpcmUoJ2hlYWRyb29tLmpzJylcblxuZnVuY3Rpb24gaW5pdCgpIHtcblxuICB2YXIgaGVhZGVyID0gbmV3IEhlYWRyb29tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpLCB7XG4gICAgICB0b2xlcmFuY2U6IDEwLFxuICAgICAgb2Zmc2V0OiAzMFxuICB9KTtcblxuICBoZWFkZXIuaW5pdCgpO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcbiIsIi8qIVxuICogY2xhc3NpZSB2MS4wLjFcbiAqIGNsYXNzIGhlbHBlciBmdW5jdGlvbnNcbiAqIGZyb20gYm9uem8gaHR0cHM6Ly9naXRodWIuY29tL2RlZC9ib256b1xuICogTUlUIGxpY2Vuc2VcbiAqIFxuICogY2xhc3NpZS5oYXMoIGVsZW0sICdteS1jbGFzcycgKSAtPiB0cnVlL2ZhbHNlXG4gKiBjbGFzc2llLmFkZCggZWxlbSwgJ215LW5ldy1jbGFzcycgKVxuICogY2xhc3NpZS5yZW1vdmUoIGVsZW0sICdteS11bndhbnRlZC1jbGFzcycgKVxuICogY2xhc3NpZS50b2dnbGUoIGVsZW0sICdteS1jbGFzcycgKVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gY2xhc3MgaGVscGVyIGZ1bmN0aW9ucyBmcm9tIGJvbnpvIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWQvYm9uem9cblxuZnVuY3Rpb24gY2xhc3NSZWcoIGNsYXNzTmFtZSApIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoXnxcXFxccyspXCIgKyBjbGFzc05hbWUgKyBcIihcXFxccyt8JClcIik7XG59XG5cbi8vIGNsYXNzTGlzdCBzdXBwb3J0IGZvciBjbGFzcyBtYW5hZ2VtZW50XG4vLyBhbHRobyB0byBiZSBmYWlyLCB0aGUgYXBpIHN1Y2tzIGJlY2F1c2UgaXQgd29uJ3QgYWNjZXB0IG11bHRpcGxlIGNsYXNzZXMgYXQgb25jZVxudmFyIGhhc0NsYXNzLCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3M7XG5cbmlmICggJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICkge1xuICBoYXNDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyggYyApO1xuICB9O1xuICBhZGRDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCggYyApO1xuICB9O1xuICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSggYyApO1xuICB9O1xufVxuZWxzZSB7XG4gIGhhc0NsYXNzID0gZnVuY3Rpb24oIGVsZW0sIGMgKSB7XG4gICAgcmV0dXJuIGNsYXNzUmVnKCBjICkudGVzdCggZWxlbS5jbGFzc05hbWUgKTtcbiAgfTtcbiAgYWRkQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICBpZiAoICFoYXNDbGFzcyggZWxlbSwgYyApICkge1xuICAgICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZSArICcgJyArIGM7XG4gICAgfVxuICB9O1xuICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZSggY2xhc3NSZWcoIGMgKSwgJyAnICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKCBlbGVtLCBjICkge1xuICB2YXIgZm4gPSBoYXNDbGFzcyggZWxlbSwgYyApID8gcmVtb3ZlQ2xhc3MgOiBhZGRDbGFzcztcbiAgZm4oIGVsZW0sIGMgKTtcbn1cblxudmFyIGNsYXNzaWUgPSB7XG4gIC8vIGZ1bGwgbmFtZXNcbiAgaGFzQ2xhc3M6IGhhc0NsYXNzLFxuICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICAvLyBzaG9ydCBuYW1lc1xuICBoYXM6IGhhc0NsYXNzLFxuICBhZGQ6IGFkZENsYXNzLFxuICByZW1vdmU6IHJlbW92ZUNsYXNzLFxuICB0b2dnbGU6IHRvZ2dsZUNsYXNzXG59O1xuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBjbGFzc2llICk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTXG4gIG1vZHVsZS5leHBvcnRzID0gY2xhc3NpZTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5jbGFzc2llID0gY2xhc3NpZTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiY29uc3QgY2xhc3NpZSA9IHJlcXVpcmUoJ2Rlc2FuZHJvLWNsYXNzaWUnKVxuXG5mdW5jdGlvbiBpbml0KCkge1xuXG4gICgoKCkgPT4ge1xuICAgICAgY29uc3QgdHJpZ2dlckJ0dG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2pzLXRyaWdnZXItb3ZlcmxheScgKTtcbiAgICAgIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdib2R5JyApO1xuICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdkaXYuYy1vdmVybGF5JyApO1xuICAgICAgLy9jb25zdCBjbG9zZUJ0dG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnZGl2LmNsb3NlJyApO1xuXG4gICAgICBjb25zdCB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgJ09UcmFuc2l0aW9uJzogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgJ21zVHJhbnNpdGlvbic6ICdNU1RyYW5zaXRpb25FbmQnLFxuICAgICAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJ1xuICB9O1xuXG4gICAgICBjb25zdCB0cmFuc0VuZEV2ZW50TmFtZSA9IHRyYW5zRW5kRXZlbnROYW1lc1sgTW9kZXJuaXpyLnByZWZpeGVkKCAndHJhbnNpdGlvbicgKSBdO1xuICAgICAgY29uc3Qgc3VwcG9ydCA9IHsgdHJhbnNpdGlvbnMgOiBNb2Rlcm5penIuY3NzdHJhbnNpdGlvbnMgfTtcblxuICAgICAgZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheSgpIHtcbiAgICAgICAgICAgICAgaWYoIGNsYXNzaWUuaGFzKCBvdmVybGF5LCAnb3BlbicgKSApIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzaWUucmVtb3ZlKCBvdmVybGF5LCAnb3BlbicgKTtcbiAgICAgICAgICAgICAgICAgIC8vY2xhc3NpZS5hZGQoIG92ZXJsYXksICdjbG9zZScgKTtcbiAgICAgICAgICAgICAgICAgIGNsYXNzaWUucmVtb3ZlKCBwYWdlV3JhcHBlciwgJ3N0b3AtYm9keScgKTtcbiAgICAgICAgICAgICAgICAgIGNsYXNzaWUucmVtb3ZlKCB0cmlnZ2VyQnR0biwgJ2MtaGVhZGVyX190bGRyLS1jbG9zZScgKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9uRW5kVHJhbnNpdGlvbkZuID0gZnVuY3Rpb24oIGV2ICkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmKCBzdXBwb3J0LnRyYW5zaXRpb25zICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggZXYucHJvcGVydHlOYW1lICE9PSAndmlzaWJpbGl0eScgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHJhbnNFbmRFdmVudE5hbWUsIG9uRW5kVHJhbnNpdGlvbkZuICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8vY2xhc3NpZS5yZW1vdmUoIG92ZXJsYXksICdjbG9zZScgKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBpZiggc3VwcG9ydC50cmFuc2l0aW9ucyApIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoIHRyYW5zRW5kRXZlbnROYW1lLCBvbkVuZFRyYW5zaXRpb25GbiApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG9uRW5kVHJhbnNpdGlvbkZuKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiggIWNsYXNzaWUuaGFzKCBvdmVybGF5LCAnY2xvc2UnICkgKSB7XG4gICAgICAgICAgICAgIGNsYXNzaWUuYWRkKCBvdmVybGF5LCAnb3BlbicgKTtcbiAgICAgICAgICAgICAgY2xhc3NpZS5hZGQoIHBhZ2VXcmFwcGVyLCAnc3RvcC1ib2R5JyApO1xuICAgICAgICAgICAgICBjbGFzc2llLmFkZCggdHJpZ2dlckJ0dG4sICdjLWhlYWRlcl9fdGxkci0tY2xvc2UnICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG92ZXJsYXkuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH1cblxuICAgICAgdHJpZ2dlckJ0dG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdG9nZ2xlT3ZlcmxheSApO1xuICAgICAgLy9jbG9zZUJ0dG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdG9nZ2xlT3ZlcmxheSApO1xuICB9KSkoKTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQ7XG4iLCIoZnVuY3Rpb24od2luZG93LCBmYWN0b3J5KSB7XG5cdHZhciBsYXp5U2l6ZXMgPSBmYWN0b3J5KHdpbmRvdywgd2luZG93LmRvY3VtZW50KTtcblx0d2luZG93LmxhenlTaXplcyA9IGxhenlTaXplcztcblx0aWYodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyl7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBsYXp5U2l6ZXM7XG5cdH1cbn0od2luZG93LCBmdW5jdGlvbiBsKHdpbmRvdywgZG9jdW1lbnQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHRpZighZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSl7cmV0dXJuO31cblxuXHR2YXIgbGF6eVNpemVzQ29uZmlnO1xuXG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cdHZhciBEYXRlID0gd2luZG93LkRhdGU7XG5cblx0dmFyIHN1cHBvcnRQaWN0dXJlID0gd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudDtcblxuXHR2YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSAnYWRkRXZlbnRMaXN0ZW5lcic7XG5cblx0dmFyIF9nZXRBdHRyaWJ1dGUgPSAnZ2V0QXR0cmlidXRlJztcblxuXHR2YXIgYWRkRXZlbnRMaXN0ZW5lciA9IHdpbmRvd1tfYWRkRXZlbnRMaXN0ZW5lcl07XG5cblx0dmFyIHNldFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dDtcblxuXHR2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0O1xuXG5cdHZhciByZXF1ZXN0SWRsZUNhbGxiYWNrID0gd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5cblx0dmFyIHJlZ1BpY3R1cmUgPSAvXnBpY3R1cmUkL2k7XG5cblx0dmFyIGxvYWRFdmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InLCAnbGF6eWluY2x1ZGVkJywgJ19sYXp5bG9hZGVkJ107XG5cblx0dmFyIHJlZ0NsYXNzQ2FjaGUgPSB7fTtcblxuXHR2YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG5cdHZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0aWYoIXJlZ0NsYXNzQ2FjaGVbY2xzXSl7XG5cdFx0XHRyZWdDbGFzc0NhY2hlW2Nsc10gPSBuZXcgUmVnRXhwKCcoXFxcXHN8XiknK2NscysnKFxcXFxzfCQpJyk7XG5cdFx0fVxuXHRcdHJldHVybiByZWdDbGFzc0NhY2hlW2Nsc10udGVzdChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpICYmIHJlZ0NsYXNzQ2FjaGVbY2xzXTtcblx0fTtcblxuXHR2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdGlmICghaGFzQ2xhc3MoZWxlLCBjbHMpKXtcblx0XHRcdGVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykudHJpbSgpICsgJyAnICsgY2xzKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHR2YXIgcmVnO1xuXHRcdGlmICgocmVnID0gaGFzQ2xhc3MoZWxlLGNscykpKSB7XG5cdFx0XHRlbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpLnJlcGxhY2UocmVnLCAnICcpKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIGFkZFJlbW92ZUxvYWRFdmVudHMgPSBmdW5jdGlvbihkb20sIGZuLCBhZGQpe1xuXHRcdHZhciBhY3Rpb24gPSBhZGQgPyBfYWRkRXZlbnRMaXN0ZW5lciA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcblx0XHRpZihhZGQpe1xuXHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhkb20sIGZuKTtcblx0XHR9XG5cdFx0bG9hZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2dCl7XG5cdFx0XHRkb21bYWN0aW9uXShldnQsIGZuKTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgdHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24oZWxlbSwgbmFtZSwgZGV0YWlsLCBub0J1YmJsZXMsIG5vQ2FuY2VsYWJsZSl7XG5cdFx0dmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG5cblx0XHRldmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgIW5vQnViYmxlcywgIW5vQ2FuY2VsYWJsZSwgZGV0YWlsIHx8IHt9KTtcblxuXHRcdGVsZW0uZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0cmV0dXJuIGV2ZW50O1xuXHR9O1xuXG5cdHZhciB1cGRhdGVQb2x5ZmlsbCA9IGZ1bmN0aW9uIChlbCwgZnVsbCl7XG5cdFx0dmFyIHBvbHlmaWxsO1xuXHRcdGlmKCAhc3VwcG9ydFBpY3R1cmUgJiYgKCBwb2x5ZmlsbCA9ICh3aW5kb3cucGljdHVyZWZpbGwgfHwgbGF6eVNpemVzQ29uZmlnLnBmKSApICl7XG5cdFx0XHRwb2x5ZmlsbCh7cmVldmFsdWF0ZTogdHJ1ZSwgZWxlbWVudHM6IFtlbF19KTtcblx0XHR9IGVsc2UgaWYoZnVsbCAmJiBmdWxsLnNyYyl7XG5cdFx0XHRlbC5zcmMgPSBmdWxsLnNyYztcblx0XHR9XG5cdH07XG5cblx0dmFyIGdldENTUyA9IGZ1bmN0aW9uIChlbGVtLCBzdHlsZSl7XG5cdFx0cmV0dXJuIChnZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpIHx8IHt9KVtzdHlsZV07XG5cdH07XG5cblx0dmFyIGdldFdpZHRoID0gZnVuY3Rpb24oZWxlbSwgcGFyZW50LCB3aWR0aCl7XG5cdFx0d2lkdGggPSB3aWR0aCB8fCBlbGVtLm9mZnNldFdpZHRoO1xuXG5cdFx0d2hpbGUod2lkdGggPCBsYXp5U2l6ZXNDb25maWcubWluU2l6ZSAmJiBwYXJlbnQgJiYgIWVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdHdpZHRoID0gIHBhcmVudC5vZmZzZXRXaWR0aDtcblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXHRcdH1cblxuXHRcdHJldHVybiB3aWR0aDtcblx0fTtcblxuXHR2YXIgckFGID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHJ1bm5pbmcsIHdhaXRpbmc7XG5cdFx0dmFyIGZucyA9IFtdO1xuXHRcdHZhciBzZWNvbmRGbnMgPSBbXTtcblxuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHJ1bkZucyA9IGZucztcblxuXHRcdFx0Zm5zID0gc2Vjb25kRm5zO1xuXG5cdFx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHdhaXRpbmcgPSBmYWxzZTtcblxuXHRcdFx0d2hpbGUocnVuRm5zLmxlbmd0aCl7XG5cdFx0XHRcdHJ1bkZucy5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0dmFyIHJhZkJhdGNoID0gZnVuY3Rpb24oZm4sIHF1ZXVlKXtcblx0XHRcdGlmKHJ1bm5pbmcgJiYgIXF1ZXVlKXtcblx0XHRcdFx0Zm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZucy5wdXNoKGZuKTtcblxuXHRcdFx0XHRpZighd2FpdGluZyl7XG5cdFx0XHRcdFx0d2FpdGluZyA9IHRydWU7XG5cdFx0XHRcdFx0KGRvY3VtZW50LmhpZGRlbiA/IHNldFRpbWVvdXQgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUpKHJ1bik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmFmQmF0Y2guX2xzRmx1c2ggPSBydW47XG5cblx0XHRyZXR1cm4gcmFmQmF0Y2g7XG5cdH0pKCk7XG5cblx0dmFyIHJBRkl0ID0gZnVuY3Rpb24oZm4sIHNpbXBsZSl7XG5cdFx0cmV0dXJuIHNpbXBsZSA/XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0ckFGKGZuKTtcblx0XHRcdH0gOlxuXHRcdFx0ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblx0XHRcdFx0ckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Zm4uYXBwbHkodGhhdCwgYXJncyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdDtcblx0fTtcblxuXHR2YXIgdGhyb3R0bGUgPSBmdW5jdGlvbihmbil7XG5cdFx0dmFyIHJ1bm5pbmc7XG5cdFx0dmFyIGxhc3RUaW1lID0gMDtcblx0XHR2YXIgZ0RlbGF5ID0gMTI1O1xuXHRcdHZhciBSSUNfREVGQVVMVF9USU1FT1VUID0gNjY2O1xuXHRcdHZhciBySUNUaW1lb3V0ID0gUklDX0RFRkFVTFRfVElNRU9VVDtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblx0XHRcdGZuKCk7XG5cdFx0fTtcblx0XHR2YXIgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjayA/XG5cdFx0XHRmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXF1ZXN0SWRsZUNhbGxiYWNrKHJ1biwge3RpbWVvdXQ6IHJJQ1RpbWVvdXR9KTtcblx0XHRcdFx0aWYocklDVGltZW91dCAhPT0gUklDX0RFRkFVTFRfVElNRU9VVCl7XG5cdFx0XHRcdFx0cklDVGltZW91dCA9IFJJQ19ERUZBVUxUX1RJTUVPVVQ7XG5cdFx0XHRcdH1cblx0XHRcdH06XG5cdFx0XHRyQUZJdChmdW5jdGlvbigpe1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJ1bik7XG5cdFx0XHR9LCB0cnVlKVxuXHRcdDtcblxuXHRcdHJldHVybiBmdW5jdGlvbihpc1ByaW9yaXR5KXtcblx0XHRcdHZhciBkZWxheTtcblx0XHRcdGlmKChpc1ByaW9yaXR5ID0gaXNQcmlvcml0eSA9PT0gdHJ1ZSkpe1xuXHRcdFx0XHRySUNUaW1lb3V0ID0gNDQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHJ1bm5pbmcpe1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJ1bm5pbmcgPSAgdHJ1ZTtcblxuXHRcdFx0ZGVsYXkgPSBnRGVsYXkgLSAoRGF0ZS5ub3coKSAtIGxhc3RUaW1lKTtcblxuXHRcdFx0aWYoZGVsYXkgPCAwKXtcblx0XHRcdFx0ZGVsYXkgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihpc1ByaW9yaXR5IHx8IChkZWxheSA8IDkgJiYgcmVxdWVzdElkbGVDYWxsYmFjaykpe1xuXHRcdFx0XHRpZGxlQ2FsbGJhY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoaWRsZUNhbGxiYWNrLCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHQvL2Jhc2VkIG9uIGh0dHA6Ly9tb2Rlcm5qYXZhc2NyaXB0LmJsb2dzcG90LmRlLzIwMTMvMDgvYnVpbGRpbmctYmV0dGVyLWRlYm91bmNlLmh0bWxcblx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYykge1xuXHRcdHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XG5cdFx0dmFyIHdhaXQgPSA5OTtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0ZnVuYygpO1xuXHRcdH07XG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGFzdCA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG5cblx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQocmVxdWVzdElkbGVDYWxsYmFjayB8fCBydW4pKHJ1bik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cblx0XHRcdGlmICghdGltZW91dCkge1xuXHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXG5cdHZhciBsb2FkZXIgPSAoZnVuY3Rpb24oKXtcblx0XHR2YXIgbGF6eWxvYWRFbGVtcywgcHJlbG9hZEVsZW1zLCBpc0NvbXBsZXRlZCwgcmVzZXRQcmVsb2FkaW5nVGltZXIsIGxvYWRNb2RlLCBzdGFydGVkO1xuXG5cdFx0dmFyIGVMdlcsIGVsdkgsIGVMdG9wLCBlTGxlZnQsIGVMcmlnaHQsIGVMYm90dG9tO1xuXG5cdFx0dmFyIGRlZmF1bHRFeHBhbmQsIHByZWxvYWRFeHBhbmQsIGhGYWM7XG5cblx0XHR2YXIgcmVnSW1nID0gL15pbWckL2k7XG5cdFx0dmFyIHJlZ0lmcmFtZSA9IC9eaWZyYW1lJC9pO1xuXG5cdFx0dmFyIHN1cHBvcnRTY3JvbGwgPSAoJ29uc2Nyb2xsJyBpbiB3aW5kb3cpICYmICEoL2dsZWJvdC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk7XG5cblx0XHR2YXIgc2hyaW5rRXhwYW5kID0gMDtcblx0XHR2YXIgY3VycmVudEV4cGFuZCA9IDA7XG5cblx0XHR2YXIgaXNMb2FkaW5nID0gMDtcblx0XHR2YXIgbG93UnVucyA9IC0xO1xuXG5cdFx0dmFyIHJlc2V0UHJlbG9hZGluZyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0aXNMb2FkaW5nLS07XG5cdFx0XHRpZihlICYmIGUudGFyZ2V0KXtcblx0XHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhlLnRhcmdldCwgcmVzZXRQcmVsb2FkaW5nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIWUgfHwgaXNMb2FkaW5nIDwgMCB8fCAhZS50YXJnZXQpe1xuXHRcdFx0XHRpc0xvYWRpbmcgPSAwO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgaXNOZXN0ZWRWaXNpYmxlID0gZnVuY3Rpb24oZWxlbSwgZWxlbUV4cGFuZCl7XG5cdFx0XHR2YXIgb3V0ZXJSZWN0O1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW07XG5cdFx0XHR2YXIgdmlzaWJsZSA9IGdldENTUyhkb2N1bWVudC5ib2R5LCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nIHx8IGdldENTUyhlbGVtLCAndmlzaWJpbGl0eScpICE9ICdoaWRkZW4nO1xuXG5cdFx0XHRlTHRvcCAtPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxib3R0b20gKz0gZWxlbUV4cGFuZDtcblx0XHRcdGVMbGVmdCAtPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxyaWdodCArPSBlbGVtRXhwYW5kO1xuXG5cdFx0XHR3aGlsZSh2aXNpYmxlICYmIChwYXJlbnQgPSBwYXJlbnQub2Zmc2V0UGFyZW50KSAmJiBwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSAmJiBwYXJlbnQgIT0gZG9jRWxlbSl7XG5cdFx0XHRcdHZpc2libGUgPSAoKGdldENTUyhwYXJlbnQsICdvcGFjaXR5JykgfHwgMSkgPiAwKTtcblxuXHRcdFx0XHRpZih2aXNpYmxlICYmIGdldENTUyhwYXJlbnQsICdvdmVyZmxvdycpICE9ICd2aXNpYmxlJyl7XG5cdFx0XHRcdFx0b3V0ZXJSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHZpc2libGUgPSBlTHJpZ2h0ID4gb3V0ZXJSZWN0LmxlZnQgJiZcblx0XHRcdFx0XHRcdGVMbGVmdCA8IG91dGVyUmVjdC5yaWdodCAmJlxuXHRcdFx0XHRcdFx0ZUxib3R0b20gPiBvdXRlclJlY3QudG9wIC0gMSAmJlxuXHRcdFx0XHRcdFx0ZUx0b3AgPCBvdXRlclJlY3QuYm90dG9tICsgMVxuXHRcdFx0XHRcdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmlzaWJsZTtcblx0XHR9O1xuXG5cdFx0dmFyIGNoZWNrRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlTGxlbiwgaSwgcmVjdCwgYXV0b0xvYWRFbGVtLCBsb2FkZWRTb21ldGhpbmcsIGVsZW1FeHBhbmQsIGVsZW1OZWdhdGl2ZUV4cGFuZCwgZWxlbUV4cGFuZFZhbCwgYmVmb3JlRXhwYW5kVmFsO1xuXG5cdFx0XHRpZigobG9hZE1vZGUgPSBsYXp5U2l6ZXNDb25maWcubG9hZE1vZGUpICYmIGlzTG9hZGluZyA8IDggJiYgKGVMbGVuID0gbGF6eWxvYWRFbGVtcy5sZW5ndGgpKXtcblxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0XHRsb3dSdW5zKys7XG5cblx0XHRcdFx0aWYocHJlbG9hZEV4cGFuZCA9PSBudWxsKXtcblx0XHRcdFx0XHRpZighKCdleHBhbmQnIGluIGxhenlTaXplc0NvbmZpZykpe1xuXHRcdFx0XHRcdFx0bGF6eVNpemVzQ29uZmlnLmV4cGFuZCA9IGRvY0VsZW0uY2xpZW50SGVpZ2h0ID4gNTAwICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPiA1MDAgPyA1MDAgOiAzNzA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZGVmYXVsdEV4cGFuZCA9IGxhenlTaXplc0NvbmZpZy5leHBhbmQ7XG5cdFx0XHRcdFx0cHJlbG9hZEV4cGFuZCA9IGRlZmF1bHRFeHBhbmQgKiBsYXp5U2l6ZXNDb25maWcuZXhwRmFjdG9yO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoY3VycmVudEV4cGFuZCA8IHByZWxvYWRFeHBhbmQgJiYgaXNMb2FkaW5nIDwgMSAmJiBsb3dSdW5zID4gMiAmJiBsb2FkTW9kZSA+IDIgJiYgIWRvY3VtZW50LmhpZGRlbil7XG5cdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IHByZWxvYWRFeHBhbmQ7XG5cdFx0XHRcdFx0bG93UnVucyA9IDA7XG5cdFx0XHRcdH0gZWxzZSBpZihsb2FkTW9kZSA+IDEgJiYgbG93UnVucyA+IDEgJiYgaXNMb2FkaW5nIDwgNil7XG5cdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IGRlZmF1bHRFeHBhbmQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IHNocmlua0V4cGFuZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvcig7IGkgPCBlTGxlbjsgaSsrKXtcblxuXHRcdFx0XHRcdGlmKCFsYXp5bG9hZEVsZW1zW2ldIHx8IGxhenlsb2FkRWxlbXNbaV0uX2xhenlSYWNlKXtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighc3VwcG9ydFNjcm9sbCl7dW52ZWlsRWxlbWVudChsYXp5bG9hZEVsZW1zW2ldKTtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighKGVsZW1FeHBhbmRWYWwgPSBsYXp5bG9hZEVsZW1zW2ldW19nZXRBdHRyaWJ1dGVdKCdkYXRhLWV4cGFuZCcpKSB8fCAhKGVsZW1FeHBhbmQgPSBlbGVtRXhwYW5kVmFsICogMSkpe1xuXHRcdFx0XHRcdFx0ZWxlbUV4cGFuZCA9IGN1cnJlbnRFeHBhbmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoYmVmb3JlRXhwYW5kVmFsICE9PSBlbGVtRXhwYW5kKXtcblx0XHRcdFx0XHRcdGVMdlcgPSBpbm5lcldpZHRoICsgKGVsZW1FeHBhbmQgKiBoRmFjKTtcblx0XHRcdFx0XHRcdGVsdkggPSBpbm5lckhlaWdodCArIGVsZW1FeHBhbmQ7XG5cdFx0XHRcdFx0XHRlbGVtTmVnYXRpdmVFeHBhbmQgPSBlbGVtRXhwYW5kICogLTE7XG5cdFx0XHRcdFx0XHRiZWZvcmVFeHBhbmRWYWwgPSBlbGVtRXhwYW5kO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlY3QgPSBsYXp5bG9hZEVsZW1zW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHRcdFx0aWYgKChlTGJvdHRvbSA9IHJlY3QuYm90dG9tKSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgJiZcblx0XHRcdFx0XHRcdChlTHRvcCA9IHJlY3QudG9wKSA8PSBlbHZIICYmXG5cdFx0XHRcdFx0XHQoZUxyaWdodCA9IHJlY3QucmlnaHQpID49IGVsZW1OZWdhdGl2ZUV4cGFuZCAqIGhGYWMgJiZcblx0XHRcdFx0XHRcdChlTGxlZnQgPSByZWN0LmxlZnQpIDw9IGVMdlcgJiZcblx0XHRcdFx0XHRcdChlTGJvdHRvbSB8fCBlTHJpZ2h0IHx8IGVMbGVmdCB8fCBlTHRvcCkgJiZcblx0XHRcdFx0XHRcdCgoaXNDb21wbGV0ZWQgJiYgaXNMb2FkaW5nIDwgMyAmJiAhZWxlbUV4cGFuZFZhbCAmJiAobG9hZE1vZGUgPCAzIHx8IGxvd1J1bnMgPCA0KSkgfHwgaXNOZXN0ZWRWaXNpYmxlKGxhenlsb2FkRWxlbXNbaV0sIGVsZW1FeHBhbmQpKSl7XG5cdFx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGxhenlsb2FkRWxlbXNbaV0pO1xuXHRcdFx0XHRcdFx0bG9hZGVkU29tZXRoaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmKGlzTG9hZGluZyA+IDkpe2JyZWFrO31cblx0XHRcdFx0XHR9IGVsc2UgaWYoIWxvYWRlZFNvbWV0aGluZyAmJiBpc0NvbXBsZXRlZCAmJiAhYXV0b0xvYWRFbGVtICYmXG5cdFx0XHRcdFx0XHRpc0xvYWRpbmcgPCA0ICYmIGxvd1J1bnMgPCA0ICYmIGxvYWRNb2RlID4gMiAmJlxuXHRcdFx0XHRcdFx0KHByZWxvYWRFbGVtc1swXSB8fCBsYXp5U2l6ZXNDb25maWcucHJlbG9hZEFmdGVyTG9hZCkgJiZcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgKCFlbGVtRXhwYW5kVmFsICYmICgoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApIHx8IGxhenlsb2FkRWxlbXNbaV1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ29uZmlnLnNpemVzQXR0cikgIT0gJ2F1dG8nKSkpKXtcblx0XHRcdFx0XHRcdGF1dG9Mb2FkRWxlbSA9IHByZWxvYWRFbGVtc1swXSB8fCBsYXp5bG9hZEVsZW1zW2ldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGF1dG9Mb2FkRWxlbSAmJiAhbG9hZGVkU29tZXRoaW5nKXtcblx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGF1dG9Mb2FkRWxlbSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHRocm90dGxlZENoZWNrRWxlbWVudHMgPSB0aHJvdHRsZShjaGVja0VsZW1lbnRzKTtcblxuXHRcdHZhciBzd2l0Y2hMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbihlKXtcblx0XHRcdGFkZENsYXNzKGUudGFyZ2V0LCBsYXp5U2l6ZXNDb25maWcubG9hZGVkQ2xhc3MpO1xuXHRcdFx0cmVtb3ZlQ2xhc3MoZS50YXJnZXQsIGxhenlTaXplc0NvbmZpZy5sb2FkaW5nQ2xhc3MpO1xuXHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhlLnRhcmdldCwgcmFmU3dpdGNoTG9hZGluZ0NsYXNzKTtcblx0XHR9O1xuXHRcdHZhciByYWZlZFN3aXRjaExvYWRpbmdDbGFzcyA9IHJBRkl0KHN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0dmFyIHJhZlN3aXRjaExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0cmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3Moe3RhcmdldDogZS50YXJnZXR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGNoYW5nZUlmcmFtZVNyYyA9IGZ1bmN0aW9uKGVsZW0sIHNyYyl7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRlbGVtLmNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVwbGFjZShzcmMpO1xuXHRcdFx0fSBjYXRjaChlKXtcblx0XHRcdFx0ZWxlbS5zcmMgPSBzcmM7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBoYW5kbGVTb3VyY2VzID0gZnVuY3Rpb24oc291cmNlKXtcblx0XHRcdHZhciBjdXN0b21NZWRpYSwgcGFyZW50O1xuXG5cdFx0XHR2YXIgc291cmNlU3Jjc2V0ID0gc291cmNlW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NvbmZpZy5zcmNzZXRBdHRyKTtcblxuXHRcdFx0aWYoIChjdXN0b21NZWRpYSA9IGxhenlTaXplc0NvbmZpZy5jdXN0b21NZWRpYVtzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ2RhdGEtbWVkaWEnKSB8fCBzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ21lZGlhJyldKSApe1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKCdtZWRpYScsIGN1c3RvbU1lZGlhKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoc291cmNlU3Jjc2V0KXtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnc3Jjc2V0Jywgc291cmNlU3Jjc2V0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly9odHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMTcwNTcyXG5cdFx0XHRpZihjdXN0b21NZWRpYSl7XG5cdFx0XHRcdHBhcmVudCA9IHNvdXJjZS5wYXJlbnROb2RlO1xuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHNvdXJjZS5jbG9uZU5vZGUoKSwgc291cmNlKTtcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHNvdXJjZSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBsYXp5VW52ZWlsID0gckFGSXQoZnVuY3Rpb24gKGVsZW0sIGRldGFpbCwgaXNBdXRvLCBzaXplcywgaXNJbWcpe1xuXHRcdFx0dmFyIHNyYywgc3Jjc2V0LCBwYXJlbnQsIGlzUGljdHVyZSwgZXZlbnQsIGZpcmVzTG9hZDtcblxuXHRcdFx0aWYoIShldmVudCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWJlZm9yZXVudmVpbCcsIGRldGFpbCkpLmRlZmF1bHRQcmV2ZW50ZWQpe1xuXG5cdFx0XHRcdGlmKHNpemVzKXtcblx0XHRcdFx0XHRpZihpc0F1dG8pe1xuXHRcdFx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ29uZmlnLmF1dG9zaXplc0NsYXNzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgc2l6ZXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNyY3NldCA9IGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ29uZmlnLnNyY3NldEF0dHIpO1xuXHRcdFx0XHRzcmMgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NvbmZpZy5zcmNBdHRyKTtcblxuXHRcdFx0XHRpZihpc0ltZykge1xuXHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRpc1BpY3R1cmUgPSBwYXJlbnQgJiYgcmVnUGljdHVyZS50ZXN0KHBhcmVudC5ub2RlTmFtZSB8fCAnJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmaXJlc0xvYWQgPSBkZXRhaWwuZmlyZXNMb2FkIHx8ICgoJ3NyYycgaW4gZWxlbSkgJiYgKHNyY3NldCB8fCBzcmMgfHwgaXNQaWN0dXJlKSk7XG5cblx0XHRcdFx0ZXZlbnQgPSB7dGFyZ2V0OiBlbGVtfTtcblxuXHRcdFx0XHRpZihmaXJlc0xvYWQpe1xuXHRcdFx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZWxlbSwgcmVzZXRQcmVsb2FkaW5nLCB0cnVlKTtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQocmVzZXRQcmVsb2FkaW5nVGltZXIpO1xuXHRcdFx0XHRcdHJlc2V0UHJlbG9hZGluZ1RpbWVyID0gc2V0VGltZW91dChyZXNldFByZWxvYWRpbmcsIDI1MDApO1xuXG5cdFx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ29uZmlnLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhlbGVtLCByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoaXNQaWN0dXJlKXtcblx0XHRcdFx0XHRmb3JFYWNoLmNhbGwocGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzb3VyY2UnKSwgaGFuZGxlU291cmNlcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihzcmNzZXQpe1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzcmNzZXQpO1xuXHRcdFx0XHR9IGVsc2UgaWYoc3JjICYmICFpc1BpY3R1cmUpe1xuXHRcdFx0XHRcdGlmKHJlZ0lmcmFtZS50ZXN0KGVsZW0ubm9kZU5hbWUpKXtcblx0XHRcdFx0XHRcdGNoYW5nZUlmcmFtZVNyYyhlbGVtLCBzcmMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbGVtLnNyYyA9IHNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihzcmNzZXQgfHwgaXNQaWN0dXJlKXtcblx0XHRcdFx0XHR1cGRhdGVQb2x5ZmlsbChlbGVtLCB7c3JjOiBzcmN9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihlbGVtLl9sYXp5UmFjZSl7XG5cdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5UmFjZTtcblx0XHRcdH1cblx0XHRcdHJlbW92ZUNsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5sYXp5Q2xhc3MpO1xuXG5cdFx0XHRyQUYoZnVuY3Rpb24oKXtcblx0XHRcdFx0aWYoICFmaXJlc0xvYWQgfHwgZWxlbS5jb21wbGV0ZSApe1xuXHRcdFx0XHRcdGlmKGZpcmVzTG9hZCl7XG5cdFx0XHRcdFx0XHRyZXNldFByZWxvYWRpbmcoZXZlbnQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3dpdGNoTG9hZGluZ0NsYXNzKGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fSk7XG5cblx0XHR2YXIgdW52ZWlsRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtKXtcblx0XHRcdHZhciBkZXRhaWw7XG5cblx0XHRcdHZhciBpc0ltZyA9IHJlZ0ltZy50ZXN0KGVsZW0ubm9kZU5hbWUpO1xuXG5cdFx0XHQvL2FsbG93IHVzaW5nIHNpemVzPVwiYXV0b1wiLCBidXQgZG9uJ3QgdXNlLiBpdCdzIGludmFsaWQuIFVzZSBkYXRhLXNpemVzPVwiYXV0b1wiIG9yIGEgdmFsaWQgdmFsdWUgZm9yIHNpemVzIGluc3RlYWQgKGkuZS46IHNpemVzPVwiODB2d1wiKVxuXHRcdFx0dmFyIHNpemVzID0gaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ29uZmlnLnNpemVzQXR0cikgfHwgZWxlbVtfZ2V0QXR0cmlidXRlXSgnc2l6ZXMnKSk7XG5cdFx0XHR2YXIgaXNBdXRvID0gc2l6ZXMgPT0gJ2F1dG8nO1xuXG5cdFx0XHRpZiggKGlzQXV0byB8fCAhaXNDb21wbGV0ZWQpICYmIGlzSW1nICYmIChlbGVtLnNyYyB8fCBlbGVtLnNyY3NldCkgJiYgIWVsZW0uY29tcGxldGUgJiYgIWhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5lcnJvckNsYXNzKSl7cmV0dXJuO31cblxuXHRcdFx0ZGV0YWlsID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5dW52ZWlscmVhZCcpLmRldGFpbDtcblxuXHRcdFx0aWYoaXNBdXRvKXtcblx0XHRcdFx0IGF1dG9TaXplci51cGRhdGVFbGVtKGVsZW0sIHRydWUsIGVsZW0ub2Zmc2V0V2lkdGgpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLl9sYXp5UmFjZSA9IHRydWU7XG5cdFx0XHRpc0xvYWRpbmcrKztcblxuXHRcdFx0bGF6eVVudmVpbChlbGVtLCBkZXRhaWwsIGlzQXV0bywgc2l6ZXMsIGlzSW1nKTtcblx0XHR9O1xuXG5cdFx0dmFyIG9ubG9hZCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihpc0NvbXBsZXRlZCl7cmV0dXJuO31cblx0XHRcdGlmKERhdGUubm93KCkgLSBzdGFydGVkIDwgOTk5KXtcblx0XHRcdFx0c2V0VGltZW91dChvbmxvYWQsIDk5OSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBhZnRlclNjcm9sbCA9IGRlYm91bmNlKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGxhenlTaXplc0NvbmZpZy5sb2FkTW9kZSA9IDM7XG5cdFx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpc0NvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdGxhenlTaXplc0NvbmZpZy5sb2FkTW9kZSA9IDM7XG5cblx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0aWYobGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlID09IDMpe1xuXHRcdFx0XHRcdGxhenlTaXplc0NvbmZpZy5sb2FkTW9kZSA9IDI7XG5cdFx0XHRcdH1cblx0XHRcdFx0YWZ0ZXJTY3JvbGwoKTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XzogZnVuY3Rpb24oKXtcblx0XHRcdFx0c3RhcnRlZCA9IERhdGUubm93KCk7XG5cblx0XHRcdFx0bGF6eWxvYWRFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ29uZmlnLmxhenlDbGFzcyk7XG5cdFx0XHRcdHByZWxvYWRFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ29uZmlnLmxhenlDbGFzcyArICcgJyArIGxhenlTaXplc0NvbmZpZy5wcmVsb2FkQ2xhc3MpO1xuXHRcdFx0XHRoRmFjID0gbGF6eVNpemVzQ29uZmlnLmhGYWM7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0aWYod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpe1xuXHRcdFx0XHRcdG5ldyBNdXRhdGlvbk9ic2VydmVyKCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzICkub2JzZXJ2ZSggZG9jRWxlbSwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZX0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2NFbGVtW19hZGRFdmVudExpc3RlbmVyXSgnRE9NTm9kZUluc2VydGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdFx0ZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTUF0dHJNb2RpZmllZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHRcdHNldEludGVydmFsKHRocm90dGxlZENoZWNrRWxlbWVudHMsIDk5OSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0Ly8sICdmdWxsc2NyZWVuY2hhbmdlJ1xuXHRcdFx0XHRbJ2ZvY3VzJywgJ21vdXNlb3ZlcicsICdjbGljaycsICdsb2FkJywgJ3RyYW5zaXRpb25lbmQnLCAnYW5pbWF0aW9uZW5kJywgJ3dlYmtpdEFuaW1hdGlvbkVuZCddLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKG5hbWUsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZigoL2QkfF5jLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSl7XG5cdFx0XHRcdFx0b25sb2FkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKCdET01Db250ZW50TG9hZGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChvbmxvYWQsIDIwMDAwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGxhenlsb2FkRWxlbXMubGVuZ3RoKXtcblx0XHRcdFx0XHRjaGVja0VsZW1lbnRzKCk7XG5cdFx0XHRcdFx0ckFGLl9sc0ZsdXNoKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tFbGVtczogdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyxcblx0XHRcdHVudmVpbDogdW52ZWlsRWxlbWVudFxuXHRcdH07XG5cdH0pKCk7XG5cblxuXHR2YXIgYXV0b1NpemVyID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGF1dG9zaXplc0VsZW1zO1xuXG5cdFx0dmFyIHNpemVFbGVtZW50ID0gckFGSXQoZnVuY3Rpb24oZWxlbSwgcGFyZW50LCBldmVudCwgd2lkdGgpe1xuXHRcdFx0dmFyIHNvdXJjZXMsIGksIGxlbjtcblx0XHRcdGVsZW0uX2xhenlzaXplc1dpZHRoID0gd2lkdGg7XG5cdFx0XHR3aWR0aCArPSAncHgnO1xuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCB3aWR0aCk7XG5cblx0XHRcdGlmKHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpKXtcblx0XHRcdFx0c291cmNlcyA9IHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyk7XG5cdFx0XHRcdGZvcihpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG5cdFx0XHRcdFx0c291cmNlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFldmVudC5kZXRhaWwuZGF0YUF0dHIpe1xuXHRcdFx0XHR1cGRhdGVQb2x5ZmlsbChlbGVtLCBldmVudC5kZXRhaWwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBnZXRTaXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtLCBkYXRhQXR0ciwgd2lkdGgpe1xuXHRcdFx0dmFyIGV2ZW50O1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblxuXHRcdFx0aWYocGFyZW50KXtcblx0XHRcdFx0d2lkdGggPSBnZXRXaWR0aChlbGVtLCBwYXJlbnQsIHdpZHRoKTtcblx0XHRcdFx0ZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmVzaXplcycsIHt3aWR0aDogd2lkdGgsIGRhdGFBdHRyOiAhIWRhdGFBdHRyfSk7XG5cblx0XHRcdFx0aWYoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuXHRcdFx0XHRcdHdpZHRoID0gZXZlbnQuZGV0YWlsLndpZHRoO1xuXG5cdFx0XHRcdFx0aWYod2lkdGggJiYgd2lkdGggIT09IGVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdFx0XHRcdHNpemVFbGVtZW50KGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGk7XG5cdFx0XHR2YXIgbGVuID0gYXV0b3NpemVzRWxlbXMubGVuZ3RoO1xuXHRcdFx0aWYobGVuKXtcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0Zm9yKDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdFx0XHRnZXRTaXplRWxlbWVudChhdXRvc2l6ZXNFbGVtc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBkZWJvdW5jZSh1cGRhdGVFbGVtZW50c1NpemVzKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRfOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRhdXRvc2l6ZXNFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ29uZmlnLmF1dG9zaXplc0NsYXNzKTtcblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tFbGVtczogZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyxcblx0XHRcdHVwZGF0ZUVsZW06IGdldFNpemVFbGVtZW50XG5cdFx0fTtcblx0fSkoKTtcblxuXHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdFx0aWYoIWluaXQuaSl7XG5cdFx0XHRpbml0LmkgPSB0cnVlO1xuXHRcdFx0YXV0b1NpemVyLl8oKTtcblx0XHRcdGxvYWRlci5fKCk7XG5cdFx0fVxuXHR9O1xuXG5cdChmdW5jdGlvbigpe1xuXHRcdHZhciBwcm9wO1xuXG5cdFx0dmFyIGxhenlTaXplc0RlZmF1bHRzID0ge1xuXHRcdFx0bGF6eUNsYXNzOiAnbGF6eWxvYWQnLFxuXHRcdFx0bG9hZGVkQ2xhc3M6ICdsYXp5bG9hZGVkJyxcblx0XHRcdGxvYWRpbmdDbGFzczogJ2xhenlsb2FkaW5nJyxcblx0XHRcdHByZWxvYWRDbGFzczogJ2xhenlwcmVsb2FkJyxcblx0XHRcdGVycm9yQ2xhc3M6ICdsYXp5ZXJyb3InLFxuXHRcdFx0Ly9zdHJpY3RDbGFzczogJ2xhenlzdHJpY3QnLFxuXHRcdFx0YXV0b3NpemVzQ2xhc3M6ICdsYXp5YXV0b3NpemVzJyxcblx0XHRcdHNyY0F0dHI6ICdkYXRhLXNyYycsXG5cdFx0XHRzcmNzZXRBdHRyOiAnZGF0YS1zcmNzZXQnLFxuXHRcdFx0c2l6ZXNBdHRyOiAnZGF0YS1zaXplcycsXG5cdFx0XHQvL3ByZWxvYWRBZnRlckxvYWQ6IGZhbHNlLFxuXHRcdFx0bWluU2l6ZTogNDAsXG5cdFx0XHRjdXN0b21NZWRpYToge30sXG5cdFx0XHRpbml0OiB0cnVlLFxuXHRcdFx0ZXhwRmFjdG9yOiAxLjUsXG5cdFx0XHRoRmFjOiAwLjgsXG5cdFx0XHRsb2FkTW9kZTogMlxuXHRcdH07XG5cblx0XHRsYXp5U2l6ZXNDb25maWcgPSB3aW5kb3cubGF6eVNpemVzQ29uZmlnIHx8IHdpbmRvdy5sYXp5c2l6ZXNDb25maWcgfHwge307XG5cblx0XHRmb3IocHJvcCBpbiBsYXp5U2l6ZXNEZWZhdWx0cyl7XG5cdFx0XHRpZighKHByb3AgaW4gbGF6eVNpemVzQ29uZmlnKSl7XG5cdFx0XHRcdGxhenlTaXplc0NvbmZpZ1twcm9wXSA9IGxhenlTaXplc0RlZmF1bHRzW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHdpbmRvdy5sYXp5U2l6ZXNDb25maWcgPSBsYXp5U2l6ZXNDb25maWc7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihsYXp5U2l6ZXNDb25maWcuaW5pdCl7XG5cdFx0XHRcdGluaXQoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSkoKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNmZzogbGF6eVNpemVzQ29uZmlnLFxuXHRcdGF1dG9TaXplcjogYXV0b1NpemVyLFxuXHRcdGxvYWRlcjogbG9hZGVyLFxuXHRcdGluaXQ6IGluaXQsXG5cdFx0dVA6IHVwZGF0ZVBvbHlmaWxsLFxuXHRcdGFDOiBhZGRDbGFzcyxcblx0XHRyQzogcmVtb3ZlQ2xhc3MsXG5cdFx0aEM6IGhhc0NsYXNzLFxuXHRcdGZpcmU6IHRyaWdnZXJFdmVudCxcblx0XHRnVzogZ2V0V2lkdGgsXG5cdFx0ckFGOiByQUYsXG5cdH07XG59XG4pKTtcbiIsIi8qXG5UaGlzIHBsdWdpbiBleHRlbmRzIGxhenlTaXplcyB0byBsYXp5TG9hZDpcbmJhY2tncm91bmQgaW1hZ2VzLCB2aWRlb3MvcG9zdGVycyBhbmQgc2NyaXB0c1xuXG5CYWNrZ3JvdW5kLUltYWdlOlxuRm9yIGJhY2tncm91bmQgaW1hZ2VzLCB1c2UgZGF0YS1iZyBhdHRyaWJ1dGU6XG48ZGl2IGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLWJnPVwiYmctaW1nLmpwZ1wiPjwvZGl2PlxuXG4gVmlkZW86XG4gRm9yIHZpZGVvL2F1ZGlvIHVzZSBkYXRhLXBvc3RlciBhbmQgcHJlbG9hZD1cIm5vbmVcIjpcbiA8dmlkZW8gY2xhc3M9XCJsYXp5bG9hZFwiIGRhdGEtcG9zdGVyPVwicG9zdGVyLmpwZ1wiIHByZWxvYWQ9XCJub25lXCI+XG4gPCEtLSBzb3VyY2VzIC0tPlxuIDwvdmlkZW8+XG5cbiBTY3JpcHRzOlxuIEZvciBzY3JpcHRzIHVzZSBkYXRhLXNjcmlwdDpcbiA8ZGl2IGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLXNjcmlwdD1cIm1vZHVsZS1uYW1lLmpzXCI+PC9kaXY+XG5cblxuIFNjcmlwdCBtb2R1bGVzIHVzaW5nIHJlcXVpcmU6XG4gRm9yIG1vZHVsZXMgdXNpbmcgcmVxdWlyZSB1c2UgZGF0YS1yZXF1aXJlOlxuIDxkaXYgY2xhc3M9XCJsYXp5bG9hZFwiIGRhdGEtcmVxdWlyZT1cIm1vZHVsZS1uYW1lXCI+PC9kaXY+XG4qL1xuXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCl7XG5cdC8qanNoaW50IGVxbnVsbDp0cnVlICovXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGJnTG9hZCwgcmVnQmdVcmxFc2NhcGU7XG5cdHZhciB1bmlxdWVVcmxzID0ge307XG5cblx0aWYoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcil7XG5cdFx0cmVnQmdVcmxFc2NhcGUgPSAvXFwofFxcKXwnLztcblxuXHRcdGJnTG9hZCA9IGZ1bmN0aW9uICh1cmwsIGNiKXtcblx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRpbWcub25sb2FkID0gbnVsbDtcblx0XHRcdFx0aW1nLm9uZXJyb3IgPSBudWxsO1xuXHRcdFx0XHRpbWcgPSBudWxsO1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0fTtcblx0XHRcdGltZy5vbmVycm9yID0gaW1nLm9ubG9hZDtcblxuXHRcdFx0aW1nLnNyYyA9IHVybDtcblxuXHRcdFx0aWYoaW1nICYmIGltZy5jb21wbGV0ZSAmJiBpbWcub25sb2FkKXtcblx0XHRcdFx0aW1nLm9ubG9hZCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRhZGRFdmVudExpc3RlbmVyKCdsYXp5YmVmb3JldW52ZWlsJywgZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgdG1wLCBsb2FkLCBiZywgcG9zdGVyO1xuXHRcdFx0aWYoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuXG5cdFx0XHRcdGlmKGUudGFyZ2V0LnByZWxvYWQgPT0gJ25vbmUnKXtcblx0XHRcdFx0XHRlLnRhcmdldC5wcmVsb2FkID0gJ2F1dG8nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG1wID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKTtcblx0XHRcdFx0aWYodG1wKXtcblx0XHRcdFx0XHRhZGRTdHlsZVNjcmlwdCh0bXAsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaGFuZGxlIGRhdGEtc2NyaXB0XG5cdFx0XHRcdHRtcCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JpcHQnKTtcblx0XHRcdFx0aWYodG1wKXtcblx0XHRcdFx0XHRhZGRTdHlsZVNjcmlwdCh0bXApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaGFuZGxlIGRhdGEtcmVxdWlyZVxuXHRcdFx0XHR0bXAgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVxdWlyZScpO1xuXHRcdFx0XHRpZih0bXApe1xuXHRcdFx0XHRcdGlmKGxhenlTaXplcy5jZmcucmVxdWlyZUpzKXtcblx0XHRcdFx0XHRcdGxhenlTaXplcy5jZmcucmVxdWlyZUpzKFt0bXBdKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YWRkU3R5bGVTY3JpcHQodG1wKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBoYW5kbGUgZGF0YS1iZ1xuXHRcdFx0XHRiZyA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1iZycpO1xuXHRcdFx0XHRpZiAoYmcpIHtcblx0XHRcdFx0XHRlLmRldGFpbC5maXJlc0xvYWQgPSB0cnVlO1xuXHRcdFx0XHRcdGxvYWQgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0ZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgKHJlZ0JnVXJsRXNjYXBlLnRlc3QoYmcpID8gSlNPTi5zdHJpbmdpZnkoYmcpIDogYmcgKSArICcpJztcblx0XHRcdFx0XHRcdGUuZGV0YWlsLmZpcmVzTG9hZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0bGF6eVNpemVzLmZpcmUoZS50YXJnZXQsICdfbGF6eWxvYWRlZCcsIHt9LCB0cnVlLCB0cnVlKTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0YmdMb2FkKGJnLCBsb2FkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGhhbmRsZSBkYXRhLXBvc3RlclxuXHRcdFx0XHRwb3N0ZXIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdGVyJyk7XG5cdFx0XHRcdGlmKHBvc3Rlcil7XG5cdFx0XHRcdFx0ZS5kZXRhaWwuZmlyZXNMb2FkID0gdHJ1ZTtcblx0XHRcdFx0XHRsb2FkID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdGUudGFyZ2V0LnBvc3RlciA9IHBvc3Rlcjtcblx0XHRcdFx0XHRcdGUuZGV0YWlsLmZpcmVzTG9hZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0bGF6eVNpemVzLmZpcmUoZS50YXJnZXQsICdfbGF6eWxvYWRlZCcsIHt9LCB0cnVlLCB0cnVlKTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0YmdMb2FkKHBvc3RlciwgbG9hZCk7XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkU3R5bGVTY3JpcHQoc3JjLCBzdHlsZSl7XG5cdFx0aWYodW5pcXVlVXJsc1tzcmNdKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlID8gJ2xpbmsnIDogJ3NjcmlwdCcpO1xuXHRcdHZhciBpbnNlcnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuXG5cdFx0aWYoc3R5bGUpe1xuXHRcdFx0ZWxlbS5yZWwgPSAnc3R5bGVzaGVldCc7XG5cdFx0XHRlbGVtLmhyZWYgPSBzcmM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW0uc3JjID0gc3JjO1xuXHRcdH1cblx0XHR1bmlxdWVVcmxzW3NyY10gPSB0cnVlO1xuXHRcdHVuaXF1ZVVybHNbZWxlbS5zcmMgfHwgZWxlbS5ocmVmXSA9IHRydWU7XG5cdFx0aW5zZXJ0RWxlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtLCBpbnNlcnRFbGVtKTtcblx0fVxufSkod2luZG93LCBkb2N1bWVudCk7XG4iLCJjb25zdCBsYXp5c2l6ZXMgPSByZXF1aXJlKCdsYXp5c2l6ZXMnKTtcblxucmVxdWlyZSgnLi4vcGx1Z2lucy9scy51bnZlaWxob29rcy5qcycpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXG4gICAgbGF6eXNpemVzLmNmZy5sb2FkTW9kZSA9IDE7XG4gICAgbGF6eXNpemVzLmNmZy5leHBhbmQgPSAzMDA7XG5cbiAgICByZXR1cm47XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xuIiwiLy9cbi8vIFNtb290aFNjcm9sbCBmb3Igd2Vic2l0ZXMgdjEuNC42IChCYWxhenMgR2FsYW1ib3NpKVxuLy8gaHR0cDovL3d3dy5zbW9vdGhzY3JvbGwubmV0L1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4vL1xuLy8gWW91IG1heSB1c2UgaXQgaW4geW91ciB0aGVtZSBpZiB5b3UgY3JlZGl0IG1lLiBcbi8vIEl0IGlzIGFsc28gZnJlZSB0byB1c2Ugb24gYW55IGluZGl2aWR1YWwgd2Vic2l0ZS5cbi8vXG4vLyBFeGNlcHRpb246XG4vLyBUaGUgb25seSByZXN0cmljdGlvbiBpcyB0byBub3QgcHVibGlzaCBhbnkgIFxuLy8gZXh0ZW5zaW9uIGZvciBicm93c2VycyBvciBuYXRpdmUgYXBwbGljYXRpb25cbi8vIHdpdGhvdXQgZ2V0dGluZyBhIHdyaXR0ZW4gcGVybWlzc2lvbiBmaXJzdC5cbi8vXG5cbihmdW5jdGlvbiAoKSB7XG4gIFxuLy8gU2Nyb2xsIFZhcmlhYmxlcyAodHdlYWthYmxlKVxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuXG4gICAgLy8gU2Nyb2xsaW5nIENvcmVcbiAgICBmcmFtZVJhdGUgICAgICAgIDogMTUwLCAvLyBbSHpdXG4gICAgYW5pbWF0aW9uVGltZSAgICA6IDQwMCwgLy8gW21zXVxuICAgIHN0ZXBTaXplICAgICAgICAgOiAxMDAsIC8vIFtweF1cblxuICAgIC8vIFB1bHNlIChsZXNzIHR3ZWFrYWJsZSlcbiAgICAvLyByYXRpbyBvZiBcInRhaWxcIiB0byBcImFjY2VsZXJhdGlvblwiXG4gICAgcHVsc2VBbGdvcml0aG0gICA6IHRydWUsXG4gICAgcHVsc2VTY2FsZSAgICAgICA6IDQsXG4gICAgcHVsc2VOb3JtYWxpemUgICA6IDEsXG5cbiAgICAvLyBBY2NlbGVyYXRpb25cbiAgICBhY2NlbGVyYXRpb25EZWx0YSA6IDUwLCAgLy8gNTBcbiAgICBhY2NlbGVyYXRpb25NYXggICA6IDMsICAgLy8gM1xuXG4gICAgLy8gS2V5Ym9hcmQgU2V0dGluZ3NcbiAgICBrZXlib2FyZFN1cHBvcnQgICA6IHRydWUsICAvLyBvcHRpb25cbiAgICBhcnJvd1Njcm9sbCAgICAgICA6IDUwLCAgICAvLyBbcHhdXG5cbiAgICAvLyBPdGhlclxuICAgIGZpeGVkQmFja2dyb3VuZCAgIDogdHJ1ZSwgXG4gICAgZXhjbHVkZWQgICAgICAgICAgOiAnJyAgICBcbn07XG5cbnZhciBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG5cblxuLy8gT3RoZXIgVmFyaWFibGVzXG52YXIgaXNFeGNsdWRlZCA9IGZhbHNlO1xudmFyIGlzRnJhbWUgPSBmYWxzZTtcbnZhciBkaXJlY3Rpb24gPSB7IHg6IDAsIHk6IDAgfTtcbnZhciBpbml0RG9uZSAgPSBmYWxzZTtcbnZhciByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xudmFyIGFjdGl2ZUVsZW1lbnQ7XG52YXIgb2JzZXJ2ZXI7XG52YXIgcmVmcmVzaFNpemU7XG52YXIgZGVsdGFCdWZmZXIgPSBbXTtcbnZhciBpc01hYyA9IC9eTWFjLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG5cbnZhciBrZXkgPSB7IGxlZnQ6IDM3LCB1cDogMzgsIHJpZ2h0OiAzOSwgZG93bjogNDAsIHNwYWNlYmFyOiAzMiwgXG4gICAgICAgICAgICBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsIGVuZDogMzUsIGhvbWU6IDM2IH07XG52YXIgYXJyb3dLZXlzID0geyAzNzogMSwgMzg6IDEsIDM5OiAxLCA0MDogMSB9O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIElOSVRJQUxJWkVcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBUZXN0cyBpZiBzbW9vdGggc2Nyb2xsaW5nIGlzIGFsbG93ZWQuIFNodXRzIGRvd24gZXZlcnl0aGluZyBpZiBub3QuXG4gKi9cbmZ1bmN0aW9uIGluaXRUZXN0KCkge1xuICAgIGlmIChvcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xuICAgICAgICBhZGRFdmVudCgna2V5ZG93bicsIGtleWRvd24pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBTZXRzIHVwIHNjcm9sbHMgYXJyYXksIGRldGVybWluZXMgaWYgZnJhbWVzIGFyZSBpbnZvbHZlZC5cbiAqL1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgXG4gICAgaWYgKGluaXREb25lIHx8ICFkb2N1bWVudC5ib2R5KSByZXR1cm47XG5cbiAgICBpbml0RG9uZSA9IHRydWU7XG5cbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDsgXG4gICAgdmFyIHNjcm9sbEhlaWdodCA9IGJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgIFxuICAgIC8vIGNoZWNrIGNvbXBhdCBtb2RlIGZvciByb290IGVsZW1lbnRcbiAgICByb290ID0gKGRvY3VtZW50LmNvbXBhdE1vZGUuaW5kZXhPZignQ1NTJykgPj0gMCkgPyBodG1sIDogYm9keTtcbiAgICBhY3RpdmVFbGVtZW50ID0gYm9keTtcbiAgICBcbiAgICBpbml0VGVzdCgpO1xuXG4gICAgLy8gQ2hlY2tzIGlmIHRoaXMgc2NyaXB0IGlzIHJ1bm5pbmcgaW4gYSBmcmFtZVxuICAgIGlmICh0b3AgIT0gc2VsZikge1xuICAgICAgICBpc0ZyYW1lID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYWZhcmkgMTAgZml4ZWQgaXQsIENocm9tZSBmaXhlZCBpdCBpbiB2NDU6XG4gICAgICogVGhpcyBmaXhlcyBhIGJ1ZyB3aGVyZSB0aGUgYXJlYXMgbGVmdCBhbmQgcmlnaHQgdG8gXG4gICAgICogdGhlIGNvbnRlbnQgZG9lcyBub3QgdHJpZ2dlciB0aGUgb25tb3VzZXdoZWVsIGV2ZW50XG4gICAgICogb24gc29tZSBwYWdlcy4gZS5nLjogaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJSB9XG4gICAgICovXG4gICAgZWxzZSBpZiAoaXNPbGRTYWZhcmkgJiZcbiAgICAgICAgICAgICBzY3JvbGxIZWlnaHQgPiB3aW5kb3dIZWlnaHQgJiZcbiAgICAgICAgICAgIChib2R5Lm9mZnNldEhlaWdodCA8PSB3aW5kb3dIZWlnaHQgfHwgXG4gICAgICAgICAgICAgaHRtbC5vZmZzZXRIZWlnaHQgPD0gd2luZG93SGVpZ2h0KSkge1xuXG4gICAgICAgIHZhciBmdWxsUGFnZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnVsbFBhZ2VFbGVtLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246YWJzb2x1dGU7IHotaW5kZXg6LTEwMDAwOyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndG9wOjA7IGxlZnQ6MDsgcmlnaHQ6MDsgaGVpZ2h0OicgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZ1bGxQYWdlRWxlbSk7XG4gICAgICAgIFxuICAgICAgICAvLyBET00gY2hhbmdlZCAodGhyb3R0bGVkKSB0byBmaXggaGVpZ2h0XG4gICAgICAgIHZhciBwZW5kaW5nUmVmcmVzaDtcbiAgICAgICAgcmVmcmVzaFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocGVuZGluZ1JlZnJlc2gpIHJldHVybjsgLy8gY291bGQgYWxzbyBiZTogY2xlYXJUaW1lb3V0KHBlbmRpbmdSZWZyZXNoKTtcbiAgICAgICAgICAgIHBlbmRpbmdSZWZyZXNoID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRXhjbHVkZWQpIHJldHVybjsgLy8gY291bGQgYmUgcnVubmluZyBhZnRlciBjbGVhbnVwXG4gICAgICAgICAgICAgICAgZnVsbFBhZ2VFbGVtLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICAgICAgICBmdWxsUGFnZUVsZW0uc3R5bGUuaGVpZ2h0ID0gcm9vdC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHBlbmRpbmdSZWZyZXNoID0gbnVsbDtcbiAgICAgICAgICAgIH0sIDUwMCk7IC8vIGFjdCByYXJlbHkgdG8gc3RheSBmYXN0XG4gICAgICAgIH07XG4gIFxuICAgICAgICBzZXRUaW1lb3V0KHJlZnJlc2hTaXplLCAxMCk7XG5cbiAgICAgICAgYWRkRXZlbnQoJ3Jlc2l6ZScsIHJlZnJlc2hTaXplKTtcblxuICAgICAgICAvLyBUT0RPOiBhdHRyaWJ1dGVGaWx0ZXI/XG4gICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLCBcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiBmYWxzZSBcbiAgICAgICAgICAgIC8vIHN1YnRyZWU6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHJlZnJlc2hTaXplKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShib2R5LCBjb25maWcpO1xuXG4gICAgICAgIGlmIChyb290Lm9mZnNldEhlaWdodCA8PSB3aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBjbGVhcmZpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgIFxuICAgICAgICAgICAgY2xlYXJmaXguc3R5bGUuY2xlYXIgPSAnYm90aCc7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNsZWFyZml4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRpc2FibGUgZml4ZWQgYmFja2dyb3VuZFxuICAgIGlmICghb3B0aW9ucy5maXhlZEJhY2tncm91bmQgJiYgIWlzRXhjbHVkZWQpIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQXR0YWNobWVudCA9ICdzY3JvbGwnO1xuICAgICAgICBodG1sLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gJ3Njcm9sbCc7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzIGFuZCBvdGhlciB0cmFjZXMgbGVmdCBvbiB0aGUgcGFnZS5cbiAqL1xuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBvYnNlcnZlciAmJiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgcmVtb3ZlRXZlbnQod2hlZWxFdmVudCwgd2hlZWwpO1xuICAgIHJlbW92ZUV2ZW50KCdtb3VzZWRvd24nLCBtb3VzZWRvd24pO1xuICAgIHJlbW92ZUV2ZW50KCdrZXlkb3duJywga2V5ZG93bik7XG4gICAgcmVtb3ZlRXZlbnQoJ3Jlc2l6ZScsIHJlZnJlc2hTaXplKTtcbiAgICByZW1vdmVFdmVudCgnbG9hZCcsIGluaXQpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFNDUk9MTElORyBcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gXG52YXIgcXVlID0gW107XG52YXIgcGVuZGluZyA9IGZhbHNlO1xudmFyIGxhc3RTY3JvbGwgPSBEYXRlLm5vdygpO1xuXG4vKipcbiAqIFB1c2hlcyBzY3JvbGwgYWN0aW9ucyB0byB0aGUgc2Nyb2xsaW5nIHF1ZXVlLlxuICovXG5mdW5jdGlvbiBzY3JvbGxBcnJheShlbGVtLCBsZWZ0LCB0b3ApIHtcbiAgICBcbiAgICBkaXJlY3Rpb25DaGVjayhsZWZ0LCB0b3ApO1xuXG4gICAgaWYgKG9wdGlvbnMuYWNjZWxlcmF0aW9uTWF4ICE9IDEpIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBlbGFwc2VkID0gbm93IC0gbGFzdFNjcm9sbDtcbiAgICAgICAgaWYgKGVsYXBzZWQgPCBvcHRpb25zLmFjY2VsZXJhdGlvbkRlbHRhKSB7XG4gICAgICAgICAgICB2YXIgZmFjdG9yID0gKDEgKyAoNTAgLyBlbGFwc2VkKSkgLyAyO1xuICAgICAgICAgICAgaWYgKGZhY3RvciA+IDEpIHtcbiAgICAgICAgICAgICAgICBmYWN0b3IgPSBNYXRoLm1pbihmYWN0b3IsIG9wdGlvbnMuYWNjZWxlcmF0aW9uTWF4KTtcbiAgICAgICAgICAgICAgICBsZWZ0ICo9IGZhY3RvcjtcbiAgICAgICAgICAgICAgICB0b3AgICo9IGZhY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYXN0U2Nyb2xsID0gRGF0ZS5ub3coKTtcbiAgICB9ICAgICAgICAgIFxuICAgIFxuICAgIC8vIHB1c2ggYSBzY3JvbGwgY29tbWFuZFxuICAgIHF1ZS5wdXNoKHtcbiAgICAgICAgeDogbGVmdCwgXG4gICAgICAgIHk6IHRvcCwgXG4gICAgICAgIGxhc3RYOiAobGVmdCA8IDApID8gMC45OSA6IC0wLjk5LFxuICAgICAgICBsYXN0WTogKHRvcCAgPCAwKSA/IDAuOTkgOiAtMC45OSwgXG4gICAgICAgIHN0YXJ0OiBEYXRlLm5vdygpXG4gICAgfSk7XG4gICAgICAgIFxuICAgIC8vIGRvbid0IGFjdCBpZiB0aGVyZSdzIGEgcGVuZGluZyBxdWV1ZVxuICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9ICBcblxuICAgIHZhciBzY3JvbGxXaW5kb3cgPSAoZWxlbSA9PT0gZG9jdW1lbnQuYm9keSk7XG4gICAgXG4gICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICBcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBzY3JvbGxYID0gMDtcbiAgICAgICAgdmFyIHNjcm9sbFkgPSAwOyBcbiAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBxdWVbaV07XG4gICAgICAgICAgICB2YXIgZWxhcHNlZCAgPSBub3cgLSBpdGVtLnN0YXJ0O1xuICAgICAgICAgICAgdmFyIGZpbmlzaGVkID0gKGVsYXBzZWQgPj0gb3B0aW9ucy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gc2Nyb2xsIHBvc2l0aW9uOiBbMCwgMV1cbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IChmaW5pc2hlZCkgPyAxIDogZWxhcHNlZCAvIG9wdGlvbnMuYW5pbWF0aW9uVGltZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZWFzaW5nIFtvcHRpb25hbF1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnB1bHNlQWxnb3JpdGhtKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwdWxzZShwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIG9ubHkgbmVlZCB0aGUgZGlmZmVyZW5jZVxuICAgICAgICAgICAgdmFyIHggPSAoaXRlbS54ICogcG9zaXRpb24gLSBpdGVtLmxhc3RYKSA+PiAwO1xuICAgICAgICAgICAgdmFyIHkgPSAoaXRlbS55ICogcG9zaXRpb24gLSBpdGVtLmxhc3RZKSA+PiAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhZGQgdGhpcyB0byB0aGUgdG90YWwgc2Nyb2xsaW5nXG4gICAgICAgICAgICBzY3JvbGxYICs9IHg7XG4gICAgICAgICAgICBzY3JvbGxZICs9IHk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBsYXN0IHZhbHVlc1xuICAgICAgICAgICAgaXRlbS5sYXN0WCArPSB4O1xuICAgICAgICAgICAgaXRlbS5sYXN0WSArPSB5O1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBhbmQgc3RlcCBiYWNrIGlmIGl0J3Mgb3ZlclxuICAgICAgICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgcXVlLnNwbGljZShpLCAxKTsgaS0tO1xuICAgICAgICAgICAgfSAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzY3JvbGwgbGVmdCBhbmQgdG9wXG4gICAgICAgIGlmIChzY3JvbGxXaW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeShzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsWCkgZWxlbS5zY3JvbGxMZWZ0ICs9IHNjcm9sbFg7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsWSkgZWxlbS5zY3JvbGxUb3AgICs9IHNjcm9sbFk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gY2xlYW4gdXAgaWYgdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gZG9cbiAgICAgICAgaWYgKCFsZWZ0ICYmICF0b3ApIHtcbiAgICAgICAgICAgIHF1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAocXVlLmxlbmd0aCkgeyBcbiAgICAgICAgICAgIHJlcXVlc3RGcmFtZShzdGVwLCBlbGVtLCAoMTAwMCAvIG9wdGlvbnMuZnJhbWVSYXRlICsgMSkpOyBcbiAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICBwZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vIHN0YXJ0IGEgbmV3IHF1ZXVlIG9mIGFjdGlvbnNcbiAgICByZXF1ZXN0RnJhbWUoc3RlcCwgZWxlbSwgMCk7XG4gICAgcGVuZGluZyA9IHRydWU7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBFVkVOVFNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBNb3VzZSB3aGVlbCBoYW5kbGVyLlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHdoZWVsKGV2ZW50KSB7XG5cbiAgICBpZiAoIWluaXREb25lKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICB9XG4gICAgXG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgIC8vIGxlYXZlIGVhcmx5IGlmIGRlZmF1bHQgYWN0aW9uIGlzIHByZXZlbnRlZCAgIFxuICAgIC8vIG9yIGl0J3MgYSB6b29taW5nIGV2ZW50IHdpdGggQ1RSTCBcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCBldmVudC5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICAvLyBsZWF2ZSBlbWJlZGRlZCBjb250ZW50IGFsb25lIChmbGFzaCAmIHBkZilcbiAgICBpZiAoaXNOb2RlTmFtZShhY3RpdmVFbGVtZW50LCAnZW1iZWQnKSB8fCBcbiAgICAgICAoaXNOb2RlTmFtZSh0YXJnZXQsICdlbWJlZCcpICYmIC9cXC5wZGYvaS50ZXN0KHRhcmdldC5zcmMpKSB8fFxuICAgICAgICBpc05vZGVOYW1lKGFjdGl2ZUVsZW1lbnQsICdvYmplY3QnKSB8fFxuICAgICAgICB0YXJnZXQuc2hhZG93Um9vdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgZGVsdGFYID0gLWV2ZW50LndoZWVsRGVsdGFYIHx8IGV2ZW50LmRlbHRhWCB8fCAwO1xuICAgIHZhciBkZWx0YVkgPSAtZXZlbnQud2hlZWxEZWx0YVkgfHwgZXZlbnQuZGVsdGFZIHx8IDA7XG4gICAgXG4gICAgaWYgKGlzTWFjKSB7XG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhWCAmJiBpc0RpdmlzaWJsZShldmVudC53aGVlbERlbHRhWCwgMTIwKSkge1xuICAgICAgICAgICAgZGVsdGFYID0gLTEyMCAqIChldmVudC53aGVlbERlbHRhWCAvIE1hdGguYWJzKGV2ZW50LndoZWVsRGVsdGFYKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGFZICYmIGlzRGl2aXNpYmxlKGV2ZW50LndoZWVsRGVsdGFZLCAxMjApKSB7XG4gICAgICAgICAgICBkZWx0YVkgPSAtMTIwICogKGV2ZW50LndoZWVsRGVsdGFZIC8gTWF0aC5hYnMoZXZlbnQud2hlZWxEZWx0YVkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyB1c2Ugd2hlZWxEZWx0YSBpZiBkZWx0YVgvWSBpcyBub3QgYXZhaWxhYmxlXG4gICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgICBkZWx0YVkgPSAtZXZlbnQud2hlZWxEZWx0YSB8fCAwO1xuICAgIH1cblxuICAgIC8vIGxpbmUgYmFzZWQgc2Nyb2xsaW5nIChGaXJlZm94IG1vc3RseSlcbiAgICBpZiAoZXZlbnQuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAgIGRlbHRhWCAqPSA0MDtcbiAgICAgICAgZGVsdGFZICo9IDQwO1xuICAgIH1cblxuICAgIHZhciBvdmVyZmxvd2luZyA9IG92ZXJmbG93aW5nQW5jZXN0b3IodGFyZ2V0KTtcblxuICAgIC8vIG5vdGhpbmcgdG8gZG8gaWYgdGhlcmUncyBubyBlbGVtZW50IHRoYXQncyBzY3JvbGxhYmxlXG4gICAgaWYgKCFvdmVyZmxvd2luZykge1xuICAgICAgICAvLyBleGNlcHQgQ2hyb21lIGlmcmFtZXMgc2VlbSB0byBlYXQgd2hlZWwgZXZlbnRzLCB3aGljaCB3ZSBuZWVkIHRvIFxuICAgICAgICAvLyBwcm9wYWdhdGUgdXAsIGlmIHRoZSBpZnJhbWUgaGFzIG5vdGhpbmcgb3ZlcmZsb3dpbmcgdG8gc2Nyb2xsXG4gICAgICAgIGlmIChpc0ZyYW1lICYmIGlzQ2hyb21lKSAge1xuICAgICAgICAgICAgLy8gY2hhbmdlIHRhcmdldCB0byBpZnJhbWUgZWxlbWVudCBpdHNlbGYgZm9yIHRoZSBwYXJlbnQgZnJhbWVcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgXCJ0YXJnZXRcIiwge3ZhbHVlOiB3aW5kb3cuZnJhbWVFbGVtZW50fSk7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LndoZWVsKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLy8gY2hlY2sgaWYgaXQncyBhIHRvdWNocGFkIHNjcm9sbCB0aGF0IHNob3VsZCBiZSBpZ25vcmVkXG4gICAgaWYgKGlzVG91Y2hwYWQoZGVsdGFZKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBzY2FsZSBieSBzdGVwIHNpemVcbiAgICAvLyBkZWx0YSBpcyAxMjAgbW9zdCBvZiB0aGUgdGltZVxuICAgIC8vIHN5bmFwdGljcyBzZWVtcyB0byBzZW5kIDEgc29tZXRpbWVzXG4gICAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPiAxLjIpIHtcbiAgICAgICAgZGVsdGFYICo9IG9wdGlvbnMuc3RlcFNpemUgLyAxMjA7XG4gICAgfVxuICAgIGlmIChNYXRoLmFicyhkZWx0YVkpID4gMS4yKSB7XG4gICAgICAgIGRlbHRhWSAqPSBvcHRpb25zLnN0ZXBTaXplIC8gMTIwO1xuICAgIH1cbiAgICBcbiAgICBzY3JvbGxBcnJheShvdmVyZmxvd2luZywgZGVsdGFYLCBkZWx0YVkpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2NoZWR1bGVDbGVhckNhY2hlKCk7XG59XG5cbi8qKlxuICogS2V5ZG93biBldmVudCBoYW5kbGVyLlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcblxuICAgIHZhciB0YXJnZXQgICA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgbW9kaWZpZXIgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IFxuICAgICAgICAgICAgICAgICAgKGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleUNvZGUgIT09IGtleS5zcGFjZWJhcik7XG4gICAgXG4gICAgLy8gb3VyIG93biB0cmFja2VkIGFjdGl2ZSBlbGVtZW50IGNvdWxkJ3ZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gZG8gbm90aGluZyBpZiB1c2VyIGlzIGVkaXRpbmcgdGV4dFxuICAgIC8vIG9yIHVzaW5nIGEgbW9kaWZpZXIga2V5IChleGNlcHQgc2hpZnQpXG4gICAgLy8gb3IgaW4gYSBkcm9wZG93blxuICAgIC8vIG9yIGluc2lkZSBpbnRlcmFjdGl2ZSBlbGVtZW50c1xuICAgIHZhciBpbnB1dE5vZGVOYW1lcyA9IC9eKHRleHRhcmVhfHNlbGVjdHxlbWJlZHxvYmplY3QpJC9pO1xuICAgIHZhciBidXR0b25UeXBlcyA9IC9eKGJ1dHRvbnxzdWJtaXR8cmFkaW98Y2hlY2tib3h8ZmlsZXxjb2xvcnxpbWFnZSkkL2k7XG4gICAgaWYgKCBldmVudC5kZWZhdWx0UHJldmVudGVkIHx8XG4gICAgICAgICBpbnB1dE5vZGVOYW1lcy50ZXN0KHRhcmdldC5ub2RlTmFtZSkgfHxcbiAgICAgICAgIGlzTm9kZU5hbWUodGFyZ2V0LCAnaW5wdXQnKSAmJiAhYnV0dG9uVHlwZXMudGVzdCh0YXJnZXQudHlwZSkgfHxcbiAgICAgICAgIGlzTm9kZU5hbWUoYWN0aXZlRWxlbWVudCwgJ3ZpZGVvJykgfHxcbiAgICAgICAgIGlzSW5zaWRlWW91dHViZVZpZGVvKGV2ZW50KSB8fFxuICAgICAgICAgdGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlIHx8IFxuICAgICAgICAgbW9kaWZpZXIgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBbc3BhY2ViYXJdIHNob3VsZCB0cmlnZ2VyIGJ1dHRvbiBwcmVzcywgbGVhdmUgaXQgYWxvbmVcbiAgICBpZiAoKGlzTm9kZU5hbWUodGFyZ2V0LCAnYnV0dG9uJykgfHxcbiAgICAgICAgIGlzTm9kZU5hbWUodGFyZ2V0LCAnaW5wdXQnKSAmJiBidXR0b25UeXBlcy50ZXN0KHRhcmdldC50eXBlKSkgJiZcbiAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0ga2V5LnNwYWNlYmFyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBbYXJyd293IGtleXNdIG9uIHJhZGlvIGJ1dHRvbnMgc2hvdWxkIGJlIGxlZnQgYWxvbmVcbiAgICBpZiAoaXNOb2RlTmFtZSh0YXJnZXQsICdpbnB1dCcpICYmIHRhcmdldC50eXBlID09ICdyYWRpbycgJiZcbiAgICAgICAgYXJyb3dLZXlzW2V2ZW50LmtleUNvZGVdKSAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhciBzaGlmdCwgeCA9IDAsIHkgPSAwO1xuICAgIHZhciBvdmVyZmxvd2luZyA9IG92ZXJmbG93aW5nQW5jZXN0b3IoYWN0aXZlRWxlbWVudCk7XG5cbiAgICBpZiAoIW92ZXJmbG93aW5nKSB7XG4gICAgICAgIC8vIENocm9tZSBpZnJhbWVzIHNlZW0gdG8gZWF0IGtleSBldmVudHMsIHdoaWNoIHdlIG5lZWQgdG8gXG4gICAgICAgIC8vIHByb3BhZ2F0ZSB1cCwgaWYgdGhlIGlmcmFtZSBoYXMgbm90aGluZyBvdmVyZmxvd2luZyB0byBzY3JvbGxcbiAgICAgICAgcmV0dXJuIChpc0ZyYW1lICYmIGlzQ2hyb21lKSA/IHBhcmVudC5rZXlkb3duKGV2ZW50KSA6IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGNsaWVudEhlaWdodCA9IG92ZXJmbG93aW5nLmNsaWVudEhlaWdodDsgXG5cbiAgICBpZiAob3ZlcmZsb3dpbmcgPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5LnVwOlxuICAgICAgICAgICAgeSA9IC1vcHRpb25zLmFycm93U2Nyb2xsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5LmRvd246XG4gICAgICAgICAgICB5ID0gb3B0aW9ucy5hcnJvd1Njcm9sbDtcbiAgICAgICAgICAgIGJyZWFrOyAgICAgICAgIFxuICAgICAgICBjYXNlIGtleS5zcGFjZWJhcjogLy8gKCsgc2hpZnQpXG4gICAgICAgICAgICBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5ID8gMSA6IC0xO1xuICAgICAgICAgICAgeSA9IC1zaGlmdCAqIGNsaWVudEhlaWdodCAqIDAuOTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleS5wYWdldXA6XG4gICAgICAgICAgICB5ID0gLWNsaWVudEhlaWdodCAqIDAuOTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleS5wYWdlZG93bjpcbiAgICAgICAgICAgIHkgPSBjbGllbnRIZWlnaHQgKiAwLjk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXkuaG9tZTpcbiAgICAgICAgICAgIHkgPSAtb3ZlcmZsb3dpbmcuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5LmVuZDpcbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSBvdmVyZmxvd2luZy5zY3JvbGxIZWlnaHQgLSBvdmVyZmxvd2luZy5zY3JvbGxUb3A7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsUmVtYWluaW5nID0gc2Nyb2xsIC0gY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgeSA9IChzY3JvbGxSZW1haW5pbmcgPiAwKSA/IHNjcm9sbFJlbWFpbmluZyArIDEwIDogMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleS5sZWZ0OlxuICAgICAgICAgICAgeCA9IC1vcHRpb25zLmFycm93U2Nyb2xsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5LnJpZ2h0OlxuICAgICAgICAgICAgeCA9IG9wdGlvbnMuYXJyb3dTY3JvbGw7XG4gICAgICAgICAgICBicmVhazsgICAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBhIGtleSB3ZSBkb24ndCBjYXJlIGFib3V0XG4gICAgfVxuXG4gICAgc2Nyb2xsQXJyYXkob3ZlcmZsb3dpbmcsIHgsIHkpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2NoZWR1bGVDbGVhckNhY2hlKCk7XG59XG5cbi8qKlxuICogTW91c2Vkb3duIGV2ZW50IG9ubHkgZm9yIHVwZGF0aW5nIGFjdGl2ZUVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gbW91c2Vkb3duKGV2ZW50KSB7XG4gICAgYWN0aXZlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE9WRVJGTE9XXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciB1bmlxdWVJRCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsLnVuaXF1ZUlEIHx8IChlbC51bmlxdWVJRCA9IGkrKyk7XG4gICAgfTtcbn0pKCk7XG5cbnZhciBjYWNoZSA9IHt9OyAvLyBjbGVhcmVkIG91dCBhZnRlciBhIHNjcm9sbGluZyBzZXNzaW9uXG52YXIgY2xlYXJDYWNoZVRpbWVyO1xuXG4vL3NldEludGVydmFsKGZ1bmN0aW9uICgpIHsgY2FjaGUgPSB7fTsgfSwgMTAgKiAxMDAwKTtcblxuZnVuY3Rpb24gc2NoZWR1bGVDbGVhckNhY2hlKCkge1xuICAgIGNsZWFyVGltZW91dChjbGVhckNhY2hlVGltZXIpO1xuICAgIGNsZWFyQ2FjaGVUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgY2FjaGUgPSB7fTsgfSwgMSoxMDAwKTtcbn1cblxuZnVuY3Rpb24gc2V0Q2FjaGUoZWxlbXMsIG92ZXJmbG93aW5nKSB7XG4gICAgZm9yICh2YXIgaSA9IGVsZW1zLmxlbmd0aDsgaS0tOylcbiAgICAgICAgY2FjaGVbdW5pcXVlSUQoZWxlbXNbaV0pXSA9IG92ZXJmbG93aW5nO1xuICAgIHJldHVybiBvdmVyZmxvd2luZztcbn1cblxuLy8gIChib2R5KSAgICAgICAgICAgICAgICAocm9vdClcbi8vICAgICAgICAgfCBoaWRkZW4gfCB2aXNpYmxlIHwgc2Nyb2xsIHwgIGF1dG8gIHxcbi8vIGhpZGRlbiAgfCAgIG5vICAgfCAgICBubyAgIHwgICBZRVMgIHwgICBZRVMgIHxcbi8vIHZpc2libGUgfCAgIG5vICAgfCAgIFlFUyAgIHwgICBZRVMgIHwgICBZRVMgIHxcbi8vIHNjcm9sbCAgfCAgIG5vICAgfCAgIFlFUyAgIHwgICBZRVMgIHwgICBZRVMgIHxcbi8vIGF1dG8gICAgfCAgIG5vICAgfCAgIFlFUyAgIHwgICBZRVMgIHwgICBZRVMgIHxcblxuZnVuY3Rpb24gb3ZlcmZsb3dpbmdBbmNlc3RvcihlbCkge1xuICAgIHZhciBlbGVtcyA9IFtdO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgcm9vdFNjcm9sbEhlaWdodCA9IHJvb3Quc2Nyb2xsSGVpZ2h0O1xuICAgIGRvIHtcbiAgICAgICAgdmFyIGNhY2hlZCA9IGNhY2hlW3VuaXF1ZUlEKGVsKV07XG4gICAgICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRDYWNoZShlbGVtcywgY2FjaGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtcy5wdXNoKGVsKTtcbiAgICAgICAgaWYgKHJvb3RTY3JvbGxIZWlnaHQgPT09IGVsLnNjcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgdmFyIHRvcE92ZXJmbG93c05vdEhpZGRlbiA9IG92ZXJmbG93Tm90SGlkZGVuKHJvb3QpICYmIG92ZXJmbG93Tm90SGlkZGVuKGJvZHkpO1xuICAgICAgICAgICAgdmFyIGlzT3ZlcmZsb3dDU1MgPSB0b3BPdmVyZmxvd3NOb3RIaWRkZW4gfHwgb3ZlcmZsb3dBdXRvT3JTY3JvbGwocm9vdCk7XG4gICAgICAgICAgICBpZiAoaXNGcmFtZSAmJiBpc0NvbnRlbnRPdmVyZmxvd2luZyhyb290KSB8fCBcbiAgICAgICAgICAgICAgICFpc0ZyYW1lICYmIGlzT3ZlcmZsb3dDU1MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Q2FjaGUoZWxlbXMsIGdldFNjcm9sbFJvb3QoKSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzQ29udGVudE92ZXJmbG93aW5nKGVsKSAmJiBvdmVyZmxvd0F1dG9PclNjcm9sbChlbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRDYWNoZShlbGVtcywgZWwpO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoZWwgPSBlbC5wYXJlbnRFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaXNDb250ZW50T3ZlcmZsb3dpbmcoZWwpIHtcbiAgICByZXR1cm4gKGVsLmNsaWVudEhlaWdodCArIDEwIDwgZWwuc2Nyb2xsSGVpZ2h0KTtcbn1cblxuLy8gdHlwaWNhbGx5IGZvciA8Ym9keT4gYW5kIDxodG1sPlxuZnVuY3Rpb24gb3ZlcmZsb3dOb3RIaWRkZW4oZWwpIHtcbiAgICB2YXIgb3ZlcmZsb3cgPSBnZXRDb21wdXRlZFN0eWxlKGVsLCAnJykuZ2V0UHJvcGVydHlWYWx1ZSgnb3ZlcmZsb3cteScpO1xuICAgIHJldHVybiAob3ZlcmZsb3cgIT09ICdoaWRkZW4nKTtcbn1cblxuLy8gZm9yIGFsbCBvdGhlciBlbGVtZW50c1xuZnVuY3Rpb24gb3ZlcmZsb3dBdXRvT3JTY3JvbGwoZWwpIHtcbiAgICB2YXIgb3ZlcmZsb3cgPSBnZXRDb21wdXRlZFN0eWxlKGVsLCAnJykuZ2V0UHJvcGVydHlWYWx1ZSgnb3ZlcmZsb3cteScpO1xuICAgIHJldHVybiAob3ZlcmZsb3cgPT09ICdzY3JvbGwnIHx8IG92ZXJmbG93ID09PSAnYXV0bycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogSEVMUEVSU1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBhZGRFdmVudCh0eXBlLCBmbikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KHR5cGUsIGZuKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGZhbHNlKTsgIFxufVxuXG5mdW5jdGlvbiBpc05vZGVOYW1lKGVsLCB0YWcpIHtcbiAgICByZXR1cm4gKGVsLm5vZGVOYW1lfHwnJykudG9Mb3dlckNhc2UoKSA9PT0gdGFnLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGlvbkNoZWNrKHgsIHkpIHtcbiAgICB4ID0gKHggPiAwKSA/IDEgOiAtMTtcbiAgICB5ID0gKHkgPiAwKSA/IDEgOiAtMTtcbiAgICBpZiAoZGlyZWN0aW9uLnggIT09IHggfHwgZGlyZWN0aW9uLnkgIT09IHkpIHtcbiAgICAgICAgZGlyZWN0aW9uLnggPSB4O1xuICAgICAgICBkaXJlY3Rpb24ueSA9IHk7XG4gICAgICAgIHF1ZSA9IFtdO1xuICAgICAgICBsYXN0U2Nyb2xsID0gMDtcbiAgICB9XG59XG5cbnZhciBkZWx0YUJ1ZmZlclRpbWVyO1xuXG5pZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuU1NfZGVsdGFCdWZmZXIpIHtcbiAgICB0cnkgeyAvLyAjNDYgU2FmYXJpIHRocm93cyBpbiBwcml2YXRlIGJyb3dzaW5nIGZvciBsb2NhbFN0b3JhZ2UgXG4gICAgICAgIGRlbHRhQnVmZmVyID0gbG9jYWxTdG9yYWdlLlNTX2RlbHRhQnVmZmVyLnNwbGl0KCcsJyk7XG4gICAgfSBjYXRjaCAoZSkgeyB9IFxufVxuXG5mdW5jdGlvbiBpc1RvdWNocGFkKGRlbHRhWSkge1xuICAgIGlmICghZGVsdGFZKSByZXR1cm47XG4gICAgaWYgKCFkZWx0YUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgZGVsdGFCdWZmZXIgPSBbZGVsdGFZLCBkZWx0YVksIGRlbHRhWV07XG4gICAgfVxuICAgIGRlbHRhWSA9IE1hdGguYWJzKGRlbHRhWSk7XG4gICAgZGVsdGFCdWZmZXIucHVzaChkZWx0YVkpO1xuICAgIGRlbHRhQnVmZmVyLnNoaWZ0KCk7XG4gICAgY2xlYXJUaW1lb3V0KGRlbHRhQnVmZmVyVGltZXIpO1xuICAgIGRlbHRhQnVmZmVyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHsgLy8gIzQ2IFNhZmFyaSB0aHJvd3MgaW4gcHJpdmF0ZSBicm93c2luZyBmb3IgbG9jYWxTdG9yYWdlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuU1NfZGVsdGFCdWZmZXIgPSBkZWx0YUJ1ZmZlci5qb2luKCcsJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfSAgXG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICFhbGxEZWx0YXNEaXZpc2FibGVCeSgxMjApICYmICFhbGxEZWx0YXNEaXZpc2FibGVCeSgxMDApO1xufSBcblxuZnVuY3Rpb24gaXNEaXZpc2libGUobiwgZGl2aXNvcikge1xuICAgIHJldHVybiAoTWF0aC5mbG9vcihuIC8gZGl2aXNvcikgPT0gbiAvIGRpdmlzb3IpO1xufVxuXG5mdW5jdGlvbiBhbGxEZWx0YXNEaXZpc2FibGVCeShkaXZpc29yKSB7XG4gICAgcmV0dXJuIChpc0RpdmlzaWJsZShkZWx0YUJ1ZmZlclswXSwgZGl2aXNvcikgJiZcbiAgICAgICAgICAgIGlzRGl2aXNpYmxlKGRlbHRhQnVmZmVyWzFdLCBkaXZpc29yKSAmJlxuICAgICAgICAgICAgaXNEaXZpc2libGUoZGVsdGFCdWZmZXJbMl0sIGRpdmlzb3IpKTtcbn1cblxuZnVuY3Rpb24gaXNJbnNpZGVZb3V0dWJlVmlkZW8oZXZlbnQpIHtcbiAgICB2YXIgZWxlbSA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgaXNDb250cm9sID0gZmFsc2U7XG4gICAgaWYgKGRvY3VtZW50LlVSTC5pbmRleE9mICgnd3d3LnlvdXR1YmUuY29tL3dhdGNoJykgIT0gLTEpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaXNDb250cm9sID0gKGVsZW0uY2xhc3NMaXN0ICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdodG1sNS12aWRlby1jb250cm9scycpKTtcbiAgICAgICAgICAgIGlmIChpc0NvbnRyb2wpIGJyZWFrO1xuICAgICAgICB9IHdoaWxlIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ29udHJvbDtcbn1cblxudmFyIHJlcXVlc3RGcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHwgXG4gICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgXG4gICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50LCBkZWxheSkge1xuICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXkgfHwgKDEwMDAvNjApKTtcbiAgICAgICAgICAgICB9KTtcbn0pKCk7XG5cbnZhciBNdXRhdGlvbk9ic2VydmVyID0gKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyKTsgIFxuXG52YXIgZ2V0U2Nyb2xsUm9vdCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIFNDUk9MTF9ST09UO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFTQ1JPTExfUk9PVCkge1xuICAgICAgdmFyIGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkdW1teS5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDoxMDAwMHB4O3dpZHRoOjFweDsnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teSk7XG4gICAgICB2YXIgYm9keVNjcm9sbFRvcCAgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIHZhciBkb2NFbFNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgMyk7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgIT0gYm9keVNjcm9sbFRvcClcbiAgICAgICAgKFNDUk9MTF9ST09UID0gZG9jdW1lbnQuYm9keSk7XG4gICAgICBlbHNlIFxuICAgICAgICAoU0NST0xMX1JPT1QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC0zKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZHVtbXkpO1xuICAgIH1cbiAgICByZXR1cm4gU0NST0xMX1JPT1Q7XG4gIH07XG59KSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUFVMU0UgKGJ5IE1pY2hhZWwgSGVyZilcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiBcbi8qKlxuICogVmlzY291cyBmbHVpZCB3aXRoIGEgcHVsc2UgZm9yIHBhcnQgYW5kIGRlY2F5IGZvciB0aGUgcmVzdC5cbiAqIC0gQXBwbGllcyBhIGZpeGVkIGZvcmNlIG92ZXIgYW4gaW50ZXJ2YWwgKGEgZGFtcGVkIGFjY2VsZXJhdGlvbiksIGFuZFxuICogLSBMZXRzIHRoZSBleHBvbmVudGlhbCBibGVlZCBhd2F5IHRoZSB2ZWxvY2l0eSBvdmVyIGEgbG9uZ2VyIGludGVydmFsXG4gKiAtIE1pY2hhZWwgSGVyZiwgaHR0cDovL3N0ZXJlb3BzaXMuY29tL3N0b3BwaW5nL1xuICovXG5mdW5jdGlvbiBwdWxzZV8oeCkge1xuICAgIHZhciB2YWwsIHN0YXJ0LCBleHB4O1xuICAgIC8vIHRlc3RcbiAgICB4ID0geCAqIG9wdGlvbnMucHVsc2VTY2FsZTtcbiAgICBpZiAoeCA8IDEpIHsgLy8gYWNjZWxlYXJ0aW9uXG4gICAgICAgIHZhbCA9IHggLSAoMSAtIE1hdGguZXhwKC14KSk7XG4gICAgfSBlbHNlIHsgICAgIC8vIHRhaWxcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIGFuaW1hdGlvbiBlbmRlZCBoZXJlOlxuICAgICAgICBzdGFydCA9IE1hdGguZXhwKC0xKTtcbiAgICAgICAgLy8gc2ltcGxlIHZpc2NvdXMgZHJhZ1xuICAgICAgICB4IC09IDE7XG4gICAgICAgIGV4cHggPSAxIC0gTWF0aC5leHAoLXgpO1xuICAgICAgICB2YWwgPSBzdGFydCArIChleHB4ICogKDEgLSBzdGFydCkpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsICogb3B0aW9ucy5wdWxzZU5vcm1hbGl6ZTtcbn1cblxuZnVuY3Rpb24gcHVsc2UoeCkge1xuICAgIGlmICh4ID49IDEpIHJldHVybiAxO1xuICAgIGlmICh4IDw9IDApIHJldHVybiAwO1xuXG4gICAgaWYgKG9wdGlvbnMucHVsc2VOb3JtYWxpemUgPT0gMSkge1xuICAgICAgICBvcHRpb25zLnB1bHNlTm9ybWFsaXplIC89IHB1bHNlXygxKTtcbiAgICB9XG4gICAgcmV0dXJuIHB1bHNlXyh4KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZJUlNUIFJVTlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG52YXIgaXNFZGdlICAgID0gL0VkZ2UvLnRlc3QodXNlckFnZW50KTsgLy8gdGhhbmsgeW91IE1TXG52YXIgaXNDaHJvbWUgID0gL2Nocm9tZS9pLnRlc3QodXNlckFnZW50KSAmJiAhaXNFZGdlOyBcbnZhciBpc1NhZmFyaSAgPSAvc2FmYXJpL2kudGVzdCh1c2VyQWdlbnQpICYmICFpc0VkZ2U7IFxudmFyIGlzTW9iaWxlICA9IC9tb2JpbGUvaS50ZXN0KHVzZXJBZ2VudCk7XG52YXIgaXNJRVdpbjcgID0gL1dpbmRvd3MgTlQgNi4xL2kudGVzdCh1c2VyQWdlbnQpICYmIC9ydjoxMS9pLnRlc3QodXNlckFnZW50KTtcbnZhciBpc09sZFNhZmFyaSA9IGlzU2FmYXJpICYmICgvVmVyc2lvblxcLzgvaS50ZXN0KHVzZXJBZ2VudCkgfHwgL1ZlcnNpb25cXC85L2kudGVzdCh1c2VyQWdlbnQpKTtcbnZhciBpc0VuYWJsZWRGb3JCcm93c2VyID0gKGlzQ2hyb21lIHx8IGlzU2FmYXJpIHx8IGlzSUVXaW43KSAmJiAhaXNNb2JpbGU7XG5cbnZhciB3aGVlbEV2ZW50O1xuaWYgKCdvbndoZWVsJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICB3aGVlbEV2ZW50ID0gJ3doZWVsJztcbmVsc2UgaWYgKCdvbm1vdXNld2hlZWwnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgIHdoZWVsRXZlbnQgPSAnbW91c2V3aGVlbCc7XG5cbmlmICh3aGVlbEV2ZW50ICYmIGlzRW5hYmxlZEZvckJyb3dzZXIpIHtcbiAgICBhZGRFdmVudCh3aGVlbEV2ZW50LCB3aGVlbCk7XG4gICAgYWRkRXZlbnQoJ21vdXNlZG93bicsIG1vdXNlZG93bik7XG4gICAgYWRkRXZlbnQoJ2xvYWQnLCBpbml0KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFBVQkxJQyBJTlRFUkZBQ0VcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gU21vb3RoU2Nyb2xsKG9wdGlvbnNUb1NldCkge1xuICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25zVG9TZXQpXG4gICAgICAgIGlmIChkZWZhdWx0T3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSBcbiAgICAgICAgICAgIG9wdGlvbnNba2V5XSA9IG9wdGlvbnNUb1NldFtrZXldO1xufVxuU21vb3RoU2Nyb2xsLmRlc3Ryb3kgPSBjbGVhbnVwO1xuXG5pZiAod2luZG93LlNtb290aFNjcm9sbE9wdGlvbnMpIC8vIGFzeW5jIEFQSVxuICAgIFNtb290aFNjcm9sbCh3aW5kb3cuU21vb3RoU2Nyb2xsT3B0aW9ucyk7XG5cbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gU21vb3RoU2Nyb2xsO1xuICAgIH0pO1xuZWxzZSBpZiAoJ29iamVjdCcgPT0gdHlwZW9mIGV4cG9ydHMpXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTbW9vdGhTY3JvbGw7XG5lbHNlXG4gICAgd2luZG93LlNtb290aFNjcm9sbCA9IFNtb290aFNjcm9sbDtcblxufSkoKTtcbiIsImNvbnN0IFNtb290aFNjcm9sbCA9IHJlcXVpcmUoJ3Ntb290aHNjcm9sbC1mb3Itd2Vic2l0ZXMnKVxuXG5mdW5jdGlvbiBpbml0KCkge1xuXG4gIFNtb290aFNjcm9sbCh7XG5cbiAgICAvLyBTY3JvbGxpbmcgQ29yZVxuICAgIGFuaW1hdGlvblRpbWUgICAgOiA2MDAsIC8vIFttc11cbiAgICBzdGVwU2l6ZSAgICAgICAgIDogMzAwLCAvLyBbcHhdXG5cbiAgICAvLyBBY2NlbGVyYXRpb25cbiAgICBhY2NlbGVyYXRpb25EZWx0YSA6IDIwLCAgLy8gNTBcbiAgICBhY2NlbGVyYXRpb25NYXggICA6IDMsICAgLy8gM1xuXG4gICAgLy8gS2V5Ym9hcmQgU2V0dGluZ3NcbiAgICBrZXlib2FyZFN1cHBvcnQgICA6IHRydWUsICAvLyBvcHRpb25cbiAgICBhcnJvd1Njcm9sbCAgICAgICA6IDMwMCwgICAgLy8gW3B4XVxuXG4gIH0pXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5BT1M9dCgpOmUuQU9TPXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgaT1uW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmxvYWRlZD0hMCxpLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cImRpc3QvXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgaT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxyPW4oMSksYT0obyhyKSxuKDYpKSx1PW8oYSksYz1uKDcpLGY9byhjKSxzPW4oOCksZD1vKHMpLGw9big5KSxwPW8obCksbT1uKDEwKSxiPW8obSksdj1uKDExKSx5PW8odiksZz1uKDE0KSxoPW8oZyksdz1bXSxrPSExLHg9ZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2Isaj17b2Zmc2V0OjEyMCxkZWxheTowLGVhc2luZzpcImVhc2VcIixkdXJhdGlvbjo0MDAsZGlzYWJsZTohMSxvbmNlOiExLHN0YXJ0RXZlbnQ6XCJET01Db250ZW50TG9hZGVkXCJ9LE89ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO2lmKGUmJihrPSEwKSxrKXJldHVybiB3PSgwLHkuZGVmYXVsdCkodyxqKSwoMCxiLmRlZmF1bHQpKHcsai5vbmNlKSx3fSxTPWZ1bmN0aW9uKCl7dz0oMCxoLmRlZmF1bHQpKCksTygpfSxfPWZ1bmN0aW9uKCl7dy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7ZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiKX0pfSxFPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09ITB8fFwibW9iaWxlXCI9PT1lJiZwLmRlZmF1bHQubW9iaWxlKCl8fFwicGhvbmVcIj09PWUmJnAuZGVmYXVsdC5waG9uZSgpfHxcInRhYmxldFwiPT09ZSYmcC5kZWZhdWx0LnRhYmxldCgpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCk9PT0hMH0sej1mdW5jdGlvbihlKXtyZXR1cm4gaj1pKGosZSksdz0oMCxoLmRlZmF1bHQpKCksRShqLmRpc2FibGUpfHx4P18oKTooZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIsai5lYXNpbmcpLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIsai5kdXJhdGlvbiksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIixqLmRlbGF5KSxcIkRPTUNvbnRlbnRMb2FkZWRcIj09PWouc3RhcnRFdmVudCYmW1wiY29tcGxldGVcIixcImludGVyYWN0aXZlXCJdLmluZGV4T2YoZG9jdW1lbnQucmVhZHlTdGF0ZSk+LTE/TyghMCk6XCJsb2FkXCI9PT1qLnN0YXJ0RXZlbnQ/d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoai5zdGFydEV2ZW50LGZ1bmN0aW9uKCl7TyghMCl9KTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGouc3RhcnRFdmVudCxmdW5jdGlvbigpe08oITApfSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoMCxmLmRlZmF1bHQpKE8sNTAsITApKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsKDAsZi5kZWZhdWx0KShPLDUwLCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoMCx1LmRlZmF1bHQpKGZ1bmN0aW9uKCl7KDAsYi5kZWZhdWx0KSh3LGoub25jZSl9LDk5KSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVSZW1vdmVkXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7dCYmMT09PXQubm9kZVR5cGUmJnQuaGFzQXR0cmlidXRlJiZ0Lmhhc0F0dHJpYnV0ZShcImRhdGEtYW9zXCIpJiYoMCxmLmRlZmF1bHQpKFMsNTAsITApfSksKDAsZC5kZWZhdWx0KShcIltkYXRhLWFvc11cIixTKSx3KX07ZS5leHBvcnRzPXtpbml0OnoscmVmcmVzaDpPLHJlZnJlc2hIYXJkOlN9fSxmdW5jdGlvbihlLHQpe30sLCwsLGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIG8odCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsaz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIGs9ZSxoPXNldFRpbWVvdXQocyx0KSxTP28oZSk6Z31mdW5jdGlvbiBhKGUpe3ZhciBuPWUtdyxvPWUtayxpPXQtbjtyZXR1cm4gXz9qKGkseS1vKTppfWZ1bmN0aW9uIGMoZSl7dmFyIG49ZS13LG89ZS1rO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fF8mJm8+PXl9ZnVuY3Rpb24gcygpe3ZhciBlPU8oKTtyZXR1cm4gYyhlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KHMsYShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLEUmJmI/byhlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLGs9MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKE8oKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPU8oKSxuPWMoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKF8pcmV0dXJuIGg9c2V0VGltZW91dChzLHQpLG8odyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQocyx0KSksZ312YXIgYix2LHksZyxoLHcsaz0wLFM9ITEsXz0hMSxFPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihmKTtyZXR1cm4gdD11KHQpfHwwLGkobikmJihTPSEhbi5sZWFkaW5nLF89XCJtYXhXYWl0XCJpbiBuLHk9Xz94KHUobi5tYXhXYWl0KXx8MCx0KTp5LEU9XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6RSksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUsdCxvKXt2YXIgcj0hMCxhPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihmKTtyZXR1cm4gaShvKSYmKHI9XCJsZWFkaW5nXCJpbiBvPyEhby5sZWFkaW5nOnIsYT1cInRyYWlsaW5nXCJpbiBvPyEhby50cmFpbGluZzphKSxuKGUsdCx7bGVhZGluZzpyLG1heFdhaXQ6dCx0cmFpbGluZzphfSl9ZnVuY3Rpb24gaShlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiByKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl9ZnVuY3Rpb24gYShlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpKXx8cihlKSYmay5jYWxsKGUpPT1kfWZ1bmN0aW9uIHUoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoYShlKSlyZXR1cm4gcztpZihpKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPWkodCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UobCxcIlwiKTt2YXIgbj1tLnRlc3QoZSk7cmV0dXJuIG58fGIudGVzdChlKT92KGUuc2xpY2UoMiksbj8yOjgpOnAudGVzdChlKT9zOitlfXZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGY9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIscz1OYU4sZD1cIltvYmplY3QgU3ltYm9sXVwiLGw9L15cXHMrfFxccyskL2cscD0vXlstK10weFswLTlhLWZdKyQvaSxtPS9eMGJbMDFdKyQvaSxiPS9eMG9bMC03XSskL2ksdj1wYXJzZUludCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCxnPVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOmMoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixoPXl8fGd8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSx3PU9iamVjdC5wcm90b3R5cGUsaz13LnRvU3RyaW5nLHg9TWF0aC5tYXgsaj1NYXRoLm1pbixPPWZ1bmN0aW9uKCl7cmV0dXJuIGguRGF0ZS5ub3coKX07ZS5leHBvcnRzPW99KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIGkodCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsTz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIE89ZSxoPXNldFRpbWVvdXQocyx0KSxTP2koZSk6Z31mdW5jdGlvbiB1KGUpe3ZhciBuPWUtdyxvPWUtTyxpPXQtbjtyZXR1cm4gXz94KGkseS1vKTppfWZ1bmN0aW9uIGYoZSl7dmFyIG49ZS13LG89ZS1PO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fF8mJm8+PXl9ZnVuY3Rpb24gcygpe3ZhciBlPWooKTtyZXR1cm4gZihlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KHMsdShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLEUmJmI/aShlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLE89MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKGooKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPWooKSxuPWYoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKF8pcmV0dXJuIGg9c2V0VGltZW91dChzLHQpLGkodyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQocyx0KSksZ312YXIgYix2LHksZyxoLHcsTz0wLFM9ITEsXz0hMSxFPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihjKTtyZXR1cm4gdD1hKHQpfHwwLG8obikmJihTPSEhbi5sZWFkaW5nLF89XCJtYXhXYWl0XCJpbiBuLHk9Xz9rKGEobi5tYXhXYWl0KXx8MCx0KTp5LEU9XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6RSksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKX1mdW5jdGlvbiByKGUpe3JldHVyblwic3ltYm9sXCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpfHxpKGUpJiZ3LmNhbGwoZSk9PXN9ZnVuY3Rpb24gYShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihyKGUpKXJldHVybiBmO2lmKG8oZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9byh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShkLFwiXCIpO3ZhciBuPXAudGVzdChlKTtyZXR1cm4gbnx8bS50ZXN0KGUpP2IoZS5zbGljZSgyKSxuPzI6OCk6bC50ZXN0KGUpP2Y6K2V9dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sYz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixmPU5hTixzPVwiW29iamVjdCBTeW1ib2xdXCIsZD0vXlxccyt8XFxzKyQvZyxsPS9eWy0rXTB4WzAtOWEtZl0rJC9pLHA9L14wYlswMV0rJC9pLG09L14wb1swLTddKyQvaSxiPXBhcnNlSW50LHY9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6dSh0KSkmJnQmJnQuT2JqZWN0PT09T2JqZWN0JiZ0LHk9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6dShzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGc9dnx8eXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLGg9T2JqZWN0LnByb3RvdHlwZSx3PWgudG9TdHJpbmcsaz1NYXRoLm1heCx4PU1hdGgubWluLGo9ZnVuY3Rpb24oKXtyZXR1cm4gZy5EYXRlLm5vdygpfTtlLmV4cG9ydHM9bn0pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7YS5wdXNoKHtzZWxlY3RvcjplLGZuOnR9KSwhdSYmciYmKHU9bmV3IHIobyksdS5vYnNlcnZlKGkuZG9jdW1lbnRFbGVtZW50LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMCxyZW1vdmVkTm9kZXM6ITB9KSksbygpfWZ1bmN0aW9uIG8oKXtmb3IodmFyIGUsdCxuPTAsbz1hLmxlbmd0aDtuPG87bisrKXtlPWFbbl0sdD1pLnF1ZXJ5U2VsZWN0b3JBbGwoZS5zZWxlY3Rvcik7Zm9yKHZhciByLHU9MCxjPXQubGVuZ3RoO3U8Yzt1Kyspcj10W3VdLHIucmVhZHl8fChyLnJlYWR5PSEwLGUuZm4uY2FsbChyLHIpKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9d2luZG93LmRvY3VtZW50LHI9d2luZG93Lk11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLGE9W10sdT12b2lkIDA7dC5kZWZhdWx0PW59LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gbygpe3JldHVybiBuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmF8fFwiXCJ9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxyPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaSxhPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLHU9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLGM9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2ksZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtuKHRoaXMsZSl9cmV0dXJuIGkoZSxbe2tleTpcInBob25lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghci50ZXN0KGUpJiYhYS50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJtb2JpbGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPW8oKTtyZXR1cm4hKCF1LnRlc3QoZSkmJiFjLnRlc3QoZS5zdWJzdHIoMCw0KSkpfX0se2tleTpcInRhYmxldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9iaWxlKCkmJiF0aGlzLnBob25lKCl9fV0pLGV9KCk7dC5kZWZhdWx0PW5ldyBmfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1lLm5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3Mtb25jZVwiKTt0PmUucG9zaXRpb24/ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtYW5pbWF0ZVwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbyYmKFwiZmFsc2VcIj09PW98fCFuJiZcInRydWVcIiE9PW8pJiZlLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFvcy1hbmltYXRlXCIpfSxvPWZ1bmN0aW9uKGUsdCl7dmFyIG89d2luZG93LnBhZ2VZT2Zmc2V0LGk9d2luZG93LmlubmVySGVpZ2h0O2UuZm9yRWFjaChmdW5jdGlvbihlLHIpe24oZSxpK28sdCl9KX07dC5kZWZhdWx0PW99LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEyKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSxuKXtlLm5vZGUuY2xhc3NMaXN0LmFkZChcImFvcy1pbml0XCIpLGUucG9zaXRpb249KDAsci5kZWZhdWx0KShlLm5vZGUsdC5vZmZzZXQpfSksZX07dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEzKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3ZhciBuPTAsbz0wLGk9d2luZG93LmlubmVySGVpZ2h0LGE9e29mZnNldDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9mZnNldFwiKSxhbmNob3I6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1hbmNob3JcIiksYW5jaG9yUGxhY2VtZW50OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudFwiKX07c3dpdGNoKGEub2Zmc2V0JiYhaXNOYU4oYS5vZmZzZXQpJiYobz1wYXJzZUludChhLm9mZnNldCkpLGEuYW5jaG9yJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEuYW5jaG9yKSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcilbMF0pLG49KDAsci5kZWZhdWx0KShlKS50b3AsYS5hbmNob3JQbGFjZW1lbnQpe2Nhc2VcInRvcC1ib3R0b21cIjpicmVhaztjYXNlXCJjZW50ZXItYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJib3R0b20tYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwidG9wLWNlbnRlclwiOm4rPWkvMjticmVhaztjYXNlXCJib3R0b20tY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcImNlbnRlci1jZW50ZXJcIjpuKz1pLzIrZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJ0b3AtdG9wXCI6bis9aTticmVhaztjYXNlXCJib3R0b20tdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQraTticmVhaztjYXNlXCJjZW50ZXItdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQvMitpfXJldHVybiBhLmFuY2hvclBsYWNlbWVudHx8YS5vZmZzZXR8fGlzTmFOKHQpfHwobz10KSxuK299O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtlJiYhaXNOYU4oZS5vZmZzZXRMZWZ0KSYmIWlzTmFOKGUub2Zmc2V0VG9wKTspdCs9ZS5vZmZzZXRMZWZ0LShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsTGVmdDowKSxuKz1lLm9mZnNldFRvcC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbFRvcDowKSxlPWUub2Zmc2V0UGFyZW50O3JldHVybnt0b3A6bixsZWZ0OnR9fTt0LmRlZmF1bHQ9bn0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtlPWV8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hb3NdXCIpO3ZhciB0PVtdO3JldHVybltdLmZvckVhY2guY2FsbChlLGZ1bmN0aW9uKGUsbil7dC5wdXNoKHtub2RlOmV9KX0pLHR9O3QuZGVmYXVsdD1ufV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hb3MuanMubWFwIiwiY29uc3QgQU9TID0gcmVxdWlyZSgnYW9zJylcblxuZnVuY3Rpb24gaW5pdCgpIHtcblxuICBBT1MuaW5pdCgpO1xuXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIEFPUy5yZWZyZXNoKCk7XG4gIH0pO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcbiIsIlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSZWxsYXguanMgLSB2MS4wLjBcbi8vIEJ1dHRlcnkgc21vb3RoIHBhcmFsbGF4IGxpYnJhcnlcbi8vIENvcHlyaWdodCAoYykgMjAxNiBNb2UgQW1heWEgKEBtb2VhbWF5YSlcbi8vIE1JVCBsaWNlbnNlXG4vL1xuLy8gVGhhbmtzIHRvIFBhcmF4aWZ5LmpzIGFuZCBKYWltZSBDYWJsbGVyb1xuLy8gZm9yIHBhcmFsbGF4IGNvbmNlcHRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgIC8vIGxpa2UgTm9kZS5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICAgICAgcm9vdC5SZWxsYXggPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICB2YXIgUmVsbGF4ID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHNlbGYgPSBPYmplY3QuY3JlYXRlKFJlbGxheC5wcm90b3R5cGUpO1xuXG4gICAgdmFyIHBvc1kgPSAwOyAvLyBzZXQgaXQgdG8gLTEgc28gdGhlIGFuaW1hdGUgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuICAgIHZhciBzY3JlZW5ZID0gMDtcbiAgICB2YXIgYmxvY2tzID0gW107XG4gICAgdmFyIHBhdXNlID0gZmFsc2U7XG5cbiAgICAvLyBjaGVjayB3aGF0IHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byB1c2UsIGFuZCBpZlxuICAgIC8vIGl0J3Mgbm90IHN1cHBvcnRlZCwgdXNlIHRoZSBvbnNjcm9sbCBldmVudFxuICAgIHZhciBsb29wID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIFx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgXHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIFx0ZnVuY3Rpb24oY2FsbGJhY2speyBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApOyB9O1xuXG4gICAgLy8gRGVmYXVsdCBTZXR0aW5nc1xuICAgIHNlbGYub3B0aW9ucyA9IHtcbiAgICAgIHNwZWVkOiAtMixcbiAgICAgIGNlbnRlcjogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gVXNlciBkZWZpbmVkIG9wdGlvbnMgKG1pZ2h0IGhhdmUgbW9yZSBpbiB0aGUgZnV0dXJlKVxuICAgIGlmIChvcHRpb25zKXtcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgc2VsZi5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJZiBzb21lIGNsb3duIHRyaWVzIHRvIGNyYW5rIHNwZWVkLCBsaW1pdCB0aGVtIHRvICstMTBcbiAgICBpZiAoc2VsZi5vcHRpb25zLnNwZWVkIDwgLTEwKSB7XG4gICAgICBzZWxmLm9wdGlvbnMuc3BlZWQgPSAtMTA7XG4gICAgfSBlbHNlIGlmIChzZWxmLm9wdGlvbnMuc3BlZWQgPiAxMCkge1xuICAgICAgc2VsZi5vcHRpb25zLnNwZWVkID0gMTA7XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgcmVsbGF4IGNsYXNzXG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSAnLnJlbGxheCc7XG4gICAgfVxuXG4gICAgLy8gQ2xhc3Nlc1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsLnJlcGxhY2UoJy4nLCcnKSkpe1xuICAgICAgc2VsZi5lbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWwucmVwbGFjZSgnLicsJycpKTtcbiAgICB9XG5cbiAgICAvLyBOb3cgcXVlcnkgc2VsZWN0b3JcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSAhPT0gZmFsc2UpIHtcbiAgICAgIHNlbGYuZWxlbXMgPSBxdWVyeVNlbGVjdG9yKGVsKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZWxlbWVudHMgZG9uJ3QgZXhpc3RcbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBlbGVtZW50cyB5b3UncmUgdHJ5aW5nIHRvIHNlbGVjdCBkb24ndCBleGlzdC5cIik7XG4gICAgfVxuXG5cbiAgICAvLyBMZXQncyBraWNrIHRoaXMgc2NyaXB0IG9mZlxuICAgIC8vIEJ1aWxkIGFycmF5IGZvciBjYWNoZWQgZWxlbWVudCB2YWx1ZXNcbiAgICAvLyBCaW5kIHNjcm9sbCBhbmQgcmVzaXplIHRvIGFuaW1hdGUgbWV0aG9kXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNjcmVlblkgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBzZXRQb3NpdGlvbigpO1xuXG4gICAgICAvLyBHZXQgYW5kIGNhY2hlIGluaXRpYWwgcG9zaXRpb24gb2YgYWxsIGVsZW1lbnRzXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuZWxlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgYmxvY2sgPSBjcmVhdGVCbG9jayhzZWxmLmVsZW1zW2ldKTtcbiAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgfVxuXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKXtcblx0XHRcdCAgYW5pbWF0ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFN0YXJ0IHRoZSBsb29wXG4gICAgICB1cGRhdGUoKTtcblxuICAgICAgLy8gVGhlIGxvb3AgZG9lcyBub3RoaW5nIGlmIHRoZSBzY3JvbGxQb3NpdGlvbiBkaWQgbm90IGNoYW5nZVxuICAgICAgLy8gc28gY2FsbCBhbmltYXRlIHRvIG1ha2Ugc3VyZSBldmVyeSBlbGVtZW50IGhhcyB0aGVpciB0cmFuc2Zvcm1zXG4gICAgICBhbmltYXRlKCk7XG4gICAgfTtcblxuXG4gICAgLy8gV2Ugd2FudCB0byBjYWNoZSB0aGUgcGFyYWxsYXggYmxvY2tzJ1xuICAgIC8vIHZhbHVlczogYmFzZSwgdG9wLCBoZWlnaHQsIHNwZWVkXG4gICAgLy8gZWw6IGlzIGRvbSBvYmplY3QsIHJldHVybjogZWwgY2FjaGUgdmFsdWVzXG4gICAgdmFyIGNyZWF0ZUJsb2NrID0gZnVuY3Rpb24oZWwpIHtcblxuICAgICAgLy8gaW5pdGlhbGl6aW5nIGF0IHNjcm9sbFkgPSAwICh0b3Agb2YgYnJvd3NlcilcbiAgICAgIC8vIGVuc3VyZXMgZWxlbWVudHMgYXJlIHBvc2l0aW9uZWQgYmFzZWQgb24gSFRNTCBsYXlvdXQuXG4gICAgICAvL1xuICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIHRoZSBwZXJjZW50YWdlIGF0dHJpYnV0ZSwgdGhlIHBvc1kgbmVlZHMgdG8gYmVcbiAgICAgIC8vIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbidzIHZhbHVlLCBzbyB0aGF0IHRoZSBlbGVtZW50cyBhcmUgc3RpbGwgcG9zaXRpb25lZCBiYXNlZCBvbiBIVE1MIGxheW91dFxuICAgICAgdmFyIHBvc1kgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVsbGF4LXBlcmNlbnRhZ2UnKSB8fCBzZWxmLm9wdGlvbnMuY2VudGVyID8gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgOiAwO1xuXG4gICAgICB2YXIgYmxvY2tUb3AgPSBwb3NZICsgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgdmFyIGJsb2NrSGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0IHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgIC8vIGFwcGFyZW50bHkgcGFyYWxsYXggZXF1YXRpb24gZXZlcnlvbmUgdXNlc1xuICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVsbGF4LXBlcmNlbnRhZ2UnKSA/IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWxsYXgtcGVyY2VudGFnZScpIDogKHBvc1kgLSBibG9ja1RvcCArIHNjcmVlblkpIC8gKGJsb2NrSGVpZ2h0ICsgc2NyZWVuWSk7XG4gICAgICBpZihzZWxmLm9wdGlvbnMuY2VudGVyKXsgcGVyY2VudGFnZSA9IDAuNTsgfVxuXG4gICAgICAvLyBPcHRpb25hbCBpbmRpdmlkdWFsIGJsb2NrIHNwZWVkIGFzIGRhdGEgYXR0ciwgb3RoZXJ3aXNlIGdsb2JhbCBzcGVlZFxuICAgICAgLy8gQ2hlY2sgaWYgaGFzIHBlcmNlbnRhZ2UgYXR0ciwgYW5kIGxpbWl0IHNwZWVkIHRvIDUsIGVsc2UgbGltaXQgaXQgdG8gMTBcbiAgICAgIHZhciBzcGVlZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWxsYXgtc3BlZWQnKSA/IGxpbWl0U3BlZWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJlbGxheC1zcGVlZCcpLCAxMCkgOiBzZWxmLm9wdGlvbnMuc3BlZWQ7XG4gICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJlbGxheC1wZXJjZW50YWdlJykgfHwgc2VsZi5vcHRpb25zLmNlbnRlcikge1xuICAgICAgICBzcGVlZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWxsYXgtc3BlZWQnKSA/IGxpbWl0U3BlZWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJlbGxheC1zcGVlZCcpLCA1KSA6IGxpbWl0U3BlZWQoc2VsZi5vcHRpb25zLnNwZWVkLCA1KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGJhc2UgPSB1cGRhdGVQb3NpdGlvbihwZXJjZW50YWdlLCBzcGVlZCk7XG5cbiAgICAgIC8vIH5+U3RvcmUgbm9uLXRyYW5zbGF0ZTNkIHRyYW5zZm9ybXN+flxuICAgICAgLy8gU3RvcmUgaW5saW5lIHN0eWxlcyBhbmQgZXh0cmFjdCB0cmFuc2Zvcm1zXG4gICAgICB2YXIgc3R5bGUgPSBlbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgdmFyIHRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGVyZSdzIGFuIGlubGluZSBzdHlsZWQgdHJhbnNmb3JtXG4gICAgICBpZiAoc3R5bGUuaW5kZXhPZigndHJhbnNmb3JtJykgPj0gMCkge1xuICAgICAgICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSB0cmFuc2Zvcm1cbiAgICAgICAgdmFyIGluZGV4ID0gc3R5bGUuaW5kZXhPZigndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgLy8gVHJpbSB0aGUgc3R5bGUgdG8gdGhlIHRyYW5zZm9ybSBwb2ludCBhbmQgZ2V0IHRoZSBmb2xsb3dpbmcgc2VtaS1jb2xvbiBpbmRleFxuICAgICAgICB2YXIgdHJpbW1lZFN0eWxlID0gc3R5bGUuc2xpY2UoaW5kZXgpO1xuICAgICAgICB2YXIgZGVsaW1pdGVyID0gdHJpbW1lZFN0eWxlLmluZGV4T2YoJzsnKTtcblxuICAgICAgICAvLyBSZW1vdmUgXCJ0cmFuc2Zvcm1cIiBzdHJpbmcgYW5kIHNhdmUgdGhlIGF0dHJpYnV0ZVxuICAgICAgICBpZiAoZGVsaW1pdGVyKSB7XG4gICAgICAgICAgdHJhbnNmb3JtID0gXCIgXCIgKyB0cmltbWVkU3R5bGUuc2xpY2UoMTEsIGRlbGltaXRlcikucmVwbGFjZSgvXFxzL2csJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyYW5zZm9ybSA9IFwiIFwiICsgdHJpbW1lZFN0eWxlLnNsaWNlKDExKS5yZXBsYWNlKC9cXHMvZywnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdG9wOiBibG9ja1RvcCxcbiAgICAgICAgaGVpZ2h0OiBibG9ja0hlaWdodCxcbiAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBDaGVjayBpZiBjdXJyZW50IHNwZWVkIGlzIDwgb3IgPiB0aGFuIG1heC8tbWF4XG4gICAgLy8gSWYgc28sIHJldHVybiBtYXhcbiAgICB2YXIgbGltaXRTcGVlZCA9IGZ1bmN0aW9uKGN1cnJlbnQsIG1heCkge1xuICAgICAgaWYgKGN1cnJlbnQgPCAtbWF4KSB7XG4gICAgICAgIHJldHVybiAtbWF4O1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID4gbWF4KSB7XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gc2V0IHNjcm9sbCBwb3NpdGlvbiAocG9zWSlcbiAgICAvLyBzaWRlIGVmZmVjdCBtZXRob2QgaXMgbm90IGlkZWFsLCBidXQgb2theSBmb3Igbm93XG4gICAgLy8gcmV0dXJucyB0cnVlIGlmIHRoZSBzY3JvbGwgY2hhbmdlZCwgZmFsc2UgaWYgbm90aGluZyBoYXBwZW5lZFxuICAgIHZhciBzZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIFx0dmFyIG9sZFkgPSBwb3NZO1xuXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9zWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc1kgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbGRZICE9IHBvc1kpIHtcbiAgICAgIFx0Ly8gc2Nyb2xsIGNoYW5nZWQsIHJldHVybiB0cnVlXG4gICAgICBcdHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBzY3JvbGwgZGlkIG5vdCBjaGFuZ2VcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG5cbiAgICAvLyBBaGggYSBwdXJlIGZ1bmN0aW9uLCBnZXRzIG5ldyB0cmFuc2Zvcm0gdmFsdWVcbiAgICAvLyBiYXNlZCBvbiBzY3JvbGxQb3N0aW9uIGFuZCBzcGVlZFxuICAgIHZhciB1cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBlcmNlbnRhZ2UsIHNwZWVkKSB7XG4gICAgICB2YXIgdmFsdWUgPSAoc3BlZWQgKiAoMTAwICogKDEgLSBwZXJjZW50YWdlKSkpO1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICAgIH07XG5cblxuICAgIC8vXG5cdFx0dmFyIHVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHNldFBvc2l0aW9uKCkgJiYgcGF1c2UgPT09IGZhbHNlKSB7XG5cdFx0XHRcdGFuaW1hdGUoKTtcblx0ICAgIH1cblxuXHQgICAgLy8gbG9vcCBhZ2FpblxuXHQgICAgbG9vcCh1cGRhdGUpO1xuXHRcdH07XG5cbiAgICAvLyBUcmFuc2Zvcm0zZCBvbiBwYXJhbGxheCBlbGVtZW50XG4gICAgdmFyIGFuaW1hdGUgPSBmdW5jdGlvbigpIHtcbiAgICBcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5lbGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBwZXJjZW50YWdlID0gKChwb3NZIC0gYmxvY2tzW2ldLnRvcCArIHNjcmVlblkpIC8gKGJsb2Nrc1tpXS5oZWlnaHQgKyBzY3JlZW5ZKSk7XG5cbiAgICAgICAgLy8gU3VidHJhY3RpbmcgaW5pdGlhbGl6ZSB2YWx1ZSwgc28gZWxlbWVudCBzdGF5cyBpbiBzYW1lIHNwb3QgYXMgSFRNTFxuICAgICAgICB2YXIgcG9zaXRpb24gPSB1cGRhdGVQb3NpdGlvbihwZXJjZW50YWdlLCBibG9ja3NbaV0uc3BlZWQpIC0gYmxvY2tzW2ldLmJhc2U7XG5cbiAgICAgICAgLy8gTW92ZSB0aGF0IGVsZW1lbnRcbiAgICAgICAgLy8gKFByZXBhcmUgdGhlIG5ldyB0cmFuc2Zvcm0gYW5kIGFwcGVuZCBpbml0aWFsIGlubGluZSB0cmFuc2Zvcm1zLiBTZXQgdGhlIG5ldywgYW5kIHByZXBwZW5kIHByZXZpb3VzIGlubGluZSBzdHlsZXMpXG4gICAgICAgIHZhciB0cmFuc2xhdGUgPSAnIHRyYW5zbGF0ZTNkKDAsJyArIHBvc2l0aW9uICsgJ3B4JyArICcsMCknICsgYmxvY2tzW2ldLnRyYW5zZm9ybTtcbiAgICAgICAgc2VsZi5lbGVtc1tpXS5zdHlsZS5jc3NUZXh0ID0gYmxvY2tzW2ldLnN0eWxlKyctd2Via2l0LXRyYW5zZm9ybTonK3RyYW5zbGF0ZSsnOy1tb3otdHJhbnNmb3JtOicrdHJhbnNsYXRlKyc7dHJhbnNmb3JtOicrdHJhbnNsYXRlKyc7JztcbiAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBzZWxmLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5lbGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNlbGYuZWxlbXNbaV0uc3R5bGUuY3NzVGV4dCA9IGJsb2Nrc1tpXS5zdHlsZTtcbiAgICAgIH1cbiAgICAgIHBhdXNlID0gdHJ1ZTtcbiAgICB9O1xuXG5cbiAgICBpbml0KCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG4gIHJldHVybiBSZWxsYXg7XG59KSk7XG4iLCJjb25zdCBSZWxsYXggPSByZXF1aXJlKCdyZWxsYXgnKVxuXG5mdW5jdGlvbiBpbml0KCkge1xuXG4gIGlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKSB7XG4gICAvLyBzb21lIGNvZGUuLlxuICB9IGVsc2Uge1xuICAgIGxldCByZWxsYXggPSBuZXcgUmVsbGF4KCcucmVsbGF4Jyk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQ7XG4iLCJyZXF1aXJlKCcuL3BsdWdpbnMvaWNvbmljLm1pbi5qcycpO1xuXG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvaGVscGVycycpLFxuICAgICAgY2FjaGUgICA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2NhY2hlJyk7XG5cbmZ1bmN0aW9uIGdldE1vZHVsZXMoKSB7XG5cbiAgICBjb25zdCBtb2R1bGVzID0ge1xuICAgICAgICBoZWFkZXI6IHJlcXVpcmUoJy4vbW9kdWxlcy9oZWFkZXIuanMnKSxcbiAgICAgICAgb3ZlcmxheTogcmVxdWlyZSgnLi9tb2R1bGVzL292ZXJsYXkuanMnKSxcbiAgICAgICAgbGF6eWxvYWQ6IHJlcXVpcmUoJy4vbW9kdWxlcy9sYXp5bG9hZC5qcycpLFxuICAgICAgICBzbW9vdGhzY3JvbGw6IHJlcXVpcmUoJy4vbW9kdWxlcy9zbW9vdGhzY3JvbGwuanMnKSxcbiAgICAgICAgYW5pbWF0ZXNjcm9sbDogcmVxdWlyZSgnLi9tb2R1bGVzL2FuaW1hdGVzY3JvbGwuanMnKSxcbiAgICAgICAgcGFyYWxsYXg6IHJlcXVpcmUoJy4vbW9kdWxlcy9wYXJhbGxheC5qcycpXG4gICAgfTtcblxuICAgIHJldHVybiBtb2R1bGVzO1xuXG59XG5cbmZ1bmN0aW9uIGZyYW1ld29yayhlKSB7XG5cbiAgICBjb25zdCByZWxvYWQgPSBlIHx8IGZhbHNlLFxuICAgICAgICBtb2R1bGVzID0gZ2V0TW9kdWxlcygpO1xuXG4gICAgaWYgKHJlbG9hZCAmJiByZWxvYWQgPT09ICdyZWxvYWQnKSB7XG4gICAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwID0ge1xuXG4gICAgICAgIGluaXQoKSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgbW9kdWxlIGluIG1vZHVsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChtb2R1bGVzLCBtb2R1bGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXNbbW9kdWxlXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgaGVscGVycy5kb21SZWFkeShhcHAuaW5pdCk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmcmFtZXdvcms7XG4iLCIvKiEgRVM2IEVsaXhpci9Sb2xsdXAgcHJvamVjdCBieSBDYXNleSBLZW5uZWR5IC0gbWFpbi5qcyAqL1xuXG5jb25zdCBmcmFtZXdvcmsgPSByZXF1aXJlKCcuL2ZyYW1ld29yaycpO1xuXG5mcmFtZXdvcmsoKTtcbiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJyZXF1aXJlIiwidGhpcyIsImNvbnN0IiwiaGVscGVycyIsImxldCIsIiQiLCJjYWNoZSIsImFyZ3VtZW50cyIsInJlcXVpcmUkJDAiLCJpbml0IiwicmVxdWlyZSQkMSIsInJlbGxheCIsInJlcXVpcmUkJDciLCJyZXF1aXJlJCQ2IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQzIiwicmVxdWlyZSQkMiIsImZyYW1ld29yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPQSxjQUFNLENBQUNBLGNBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBT0MsZUFBTyxFQUFFQSxlQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPQSxlQUFPLEVBQUVBLGVBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUEsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsS0FBSyxHQUFHLENBQUMsWUFBWSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsRUFBQSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFBLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxJQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7O0FBQUEsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQSxNQUFNLElBQUksU0FBUyxDQUFDLEVBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxJQUFJQyxNQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUNBLE1BQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLE1BQUksQ0FBQyxDQUFBLEVBQUEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsS0FBSyxFQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsRUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUVBLE1BQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQ0EsTUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNBLE1BQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxRQUFRLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyw4M0NBQTgzQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxtREFBbUQsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxFQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFBLENBQUMsSUFBSUEsTUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDQSxNQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxNQUFJLENBQUMsQ0FBQSxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLDZJQUE2SSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxXQUFXLFlBQVksUUFBUSxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQUEsS0FBSyxHQUFHLFNBQVMsRUFBRSxTQUFTLFlBQVksUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFBLE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsdURBQXVELENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG9FQUFvRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLHdCQUF3QixHQUFHLENBQUMsRUFBRSx3QkFBd0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUMsS0FBSyxFQUFB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QUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7O0FBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sV0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsRUFBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQSxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQSxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sTUFBTSxFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQSxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLFFBQVEsR0FBRyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFBLE9BQU8sQ0FBQyxDQUFDLEVBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxFQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFBLE1BQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsRUFBQSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsMFRBQTBULENBQUMsQ0FBQyxDQUFDLHlrREFBeWtELENBQUMsQ0FBQyxDQUFDLHFWQUFxVixDQUFDLENBQUMsQ0FBQyx5a0RBQXlrRCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxJQUFJLFlBQVksQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBQSxN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