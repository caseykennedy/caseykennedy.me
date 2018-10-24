const Rellax = require('rellax')

function init() {

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   // some code..
  } else {
    let rellax = new Rellax('.rellax');
  }

}

module.exports = init;
