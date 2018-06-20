module.exports = {

  // Task options
  options: {
    limit: 3
  },

  // Validation Tasks
  validate: [
    'prettier:js',
    'prettier:css',
    'prettier:json',
    'json_schema'
  ]
};
