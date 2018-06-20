module.exports = {
  prod: {
    options: {
      mangle: true,
      sourceMap: false,
      beautify: false,
      compress: {
        warnings: true,
        drop_debugger: true,  // Removes debugger statements
        drop_console: true, // Removes debugger statements
        pure_funcs: [ 'console.log' ] // Just to be sure, this does the same
      },
      //TODO read this from the package.json
      banner: '/* (c) Your Name - My Extension - v 1.0 - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    files: [{
      flatten: true,
      expand: true,
      //cwd: 'src',
      src: ['src/js/**.js'],
      dest: 'dist/js/',
      ext: '.js'
    }]
  }
};
