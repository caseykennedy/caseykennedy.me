const lazysizes = require('lazysizes');

require('../plugins/ls.unveilhooks.js');

function init() {

    lazysizes.cfg.loadMode = 1;
    lazysizes.cfg.expand = 300;

    return;

}

module.exports = init;
