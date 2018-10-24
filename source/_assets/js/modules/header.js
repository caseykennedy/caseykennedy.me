const Headroom = require('headroom.js')

function init() {

  var header = new Headroom(document.querySelector("#header"), {
      tolerance: 10,
      offset: 30
  });

  header.init();

}

module.exports = init;
