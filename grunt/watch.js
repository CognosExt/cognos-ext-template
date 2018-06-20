module.exports = {
  options: {
    spawn: false,
    livereload: 35728 // That is the portnumber default -1
  },

  default: {
    files: [
      'src/**.js',
      'src/**.css',
      'src/**.json',
    ],
    tasks: [
      'concurrent:validate',
      'zip',
      'cognos_ext_upload'
    ]
  },
};
