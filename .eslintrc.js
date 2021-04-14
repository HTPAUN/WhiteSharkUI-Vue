module.exports = {
    root: true,
    parserOptions: { 
        sourceType: 'module',
        "parser": "babel-eslint"
    },
    // env: { browser: true,
    // },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    // plugins: [ 
    //     // 'html'
    // ],
    // add your custom rules here
    // 'rules': { // allow paren-less arrow functions 'arrow-parens': 0, // allow async-await 'generator-star-spacing': 0, // allow debugger during development 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    // }
  }