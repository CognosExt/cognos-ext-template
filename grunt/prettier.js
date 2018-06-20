module.exports = {
  js: {
    src: [
      'src/**.js'
    ],
    options: {
      useTabs: false,
      printWidth: 80,
      tabWidth:2,
      singleQuote:false,
      trailingComma:"none",
      bracketSpacing: true,
      jsxBracketSameLine:false,
      parser:"babylon",
      semi: true
    }
  },
  css: {
    src: [
      'src/**.css'
    ],
    options: {
      useTabs: false,
      printWidth: 80,
      tabWidth:2,
      singleQuote:false,
      trailingComma:"none",
      bracketSpacing: true,
      jsxBracketSameLine:false,
      parser:"postcss",
      semi: true
    }
  },
  json: {
    src: [
      'src/**.json'
    ],
    options: {
      useTabs: false,
      printWidth: 80,
      tabWidth:2,
      singleQuote:false,
      trailingComma:"none",
      bracketSpacing: true,
      jsxBracketSameLine:false,
      parser:"json",
      semi: true
    }
  }
};
