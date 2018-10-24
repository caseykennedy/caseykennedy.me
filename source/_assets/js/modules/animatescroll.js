const AOS = require('aos')

function init() {

  AOS.init();

  $(window).on('load', function() {
    AOS.refresh();
  });

}

module.exports = init;
