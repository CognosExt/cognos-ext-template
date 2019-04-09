var pack = require('../package.json');
var regex = /\./gi;
var filename = pack.version.replace(regex, '_');
var file = 'dist/extension-' + filename + '.zip';

module.exports = {
  default: {
    src: ['dist/**'],
    cwd: 'dist',
    dest: file
  }
};
