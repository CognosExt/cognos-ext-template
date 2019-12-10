var chalk = require('chalk');

try {
  var settings = require('../Settings.json');
} catch (e) {
  console.error(
    chalk.red(
      'Settings.json not valid. Copy SettingsTemplate.json to Settings.json and fill in the correct values.'
    )
  );
  process.exit(1);
}

var pack = require('../package.json');

var pack = require('../package.json');
var regex = /\./gi;
var filename = pack.version.replace(regex, '_');
var file = 'dist/extension-' + filename + '.zip';

module.exports = {
  default: {
    options: {
      name: pack.name,
      url: settings.url,
      type: settings.type,
      user: settings.user,
      password: settings.password,
      debug: settings.debug,
      zipfile: 'dist/extension.zip'
    }
  }
};
