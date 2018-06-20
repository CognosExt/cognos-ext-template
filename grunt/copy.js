module.exports = {
  default: {
    files: [{
      expand: true,
      flatten: false,
      cwd: 'src',
      src: [
        '**',
      ],
      dest: 'dist/'
    }]
  },
};
