module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1,
    level: -1,
    report: 'gzip'
  },
  target: {
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1,
      level: 2,
      report: 'gzip'
    },
    files: {
      'dist/css/extension.css': [
        'src/css/*'
      ]
    },
  },
};
