module.exports = {
  test: {
    options: {
       validateFormatsStrict: true
    },
    files: {
      'resources/schema.json': ['src/spec.json']
    }
  }
}
