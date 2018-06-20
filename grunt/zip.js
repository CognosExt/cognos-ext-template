// Inside your Gruntfile.js
module.exports = {
  default: {
    src:
       [
        'dist/**'
      ],
      cwd: 'src',
    dest: 'dist/extension.zip'
    }
  }
