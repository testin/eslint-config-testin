module.exports = {
  root         : true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node   : true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger'           : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent'                : [2, 2],
    'semi'                  : [2, 'always', {
      'omitLastInOneLineBlock': true
    }],
    'key-spacing'       : [2, { 'align': 'colon' }],
    'padded-blocks'     : [2, 'never'],
    'no-trailing-spaces': [2, {
      'ignoreComments': true
    }],
    'semi-spacing'         : [2, {'before': false, 'after': true}],
    'no-inner-declarations': [2, 'both'],
    'no-undef'             : ['error', { 'typeof': false }]
  }
};
