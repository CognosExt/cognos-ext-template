fs = require("fs-utils");
var options;
options = fs.readYAMLSync('documentation.yaml');

module.exports = {
  default: {
    files: [{
      "expand": true,
      "cwd": "src",
      "src": ["**/*.js"]
    }],
    options: options
  }
}
