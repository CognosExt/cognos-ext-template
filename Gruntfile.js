// based on this tutorial
// http://mattbailey.io/a-beginners-guide-to-grunt-redux.html
var pkgjson = require('./package.json');

var config = {
  pkg: pkgjson,
  app: 'src',
  dist: 'dist'
}

module.exports = function(grunt) {
  
  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });
};
