const classie = require('desandro-classie')

function init() {

  ((() => {
      const triggerBttn = document.getElementById( 'js-trigger-overlay' );
      const pageWrapper = document.getElementById( 'body' );
      const overlay = document.querySelector( 'div.c-overlay' );
      //const closeBttn = document.querySelector( 'div.close' );

      const transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
  };

      const transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
      const support = { transitions : Modernizr.csstransitions };

      function toggleOverlay() {
              if( classie.has( overlay, 'open' ) ) {
                  classie.remove( overlay, 'open' );
                  //classie.add( overlay, 'close' );
                  classie.remove( pageWrapper, 'stop-body' );
                  classie.remove( triggerBttn, 'c-header__tldr--close' );
                  const onEndTransitionFn = function( ev ) {
                      if( support.transitions ) {
                          if( ev.propertyName !== 'visibility' ) return;
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

module.exports = init;
