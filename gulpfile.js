var gulp = require('gulp');
var elixir = require('laravel-elixir');
var json = require('rollup-plugin-json');
var json = require('rollup-plugin-buble');
var argv = require('yargs').argv;

elixir.config.assetsPath = 'source/_assets';
elixir.config.publicPath = 'source/assets';

elixir(function(mix) {
    var env = argv.e || argv.env || 'local';
    var port = argv.p || argv.port || 3000;

    mix.sass('main.scss')
        .exec('./vendor/bin/jigsaw build ' + env, ['./source/*', './source/**/*', '!./source/_assets/**/*'])
        .browserSync({
            port: port,
            server: { baseDir: 'build_' + env },
            proxy: null,
            files: [ 'build_' + env + '/**/*' ]
        });

    mix.copy('node_modules/lazysizes/plugins/unveilhooks', 'source/_assets/js/plugins');

    mix.rollup('main.js');
});
