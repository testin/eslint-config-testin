module.exports = {
  root         : true,
  parserOptions: {
    parser     : 'babel-eslint',
    ecmaVersion: 2018,
    sourceType : 'module'
  },
  env: {
    browser: true,
    node   : true,
    es6    : true,
    jest   : true
  },
  // add your custom rules here
  rules: {
    // setter 必须有对应的 getter，getter 可以没有对应的 setter
    'accessor-pairs': ['error',
      {
        'setWithoutGet': true,
        'getWithoutSet': false
      }
    ],
    // fix 箭头函数的箭头前后必须有空格
    'arrow-spacing': ['error',
      {
        'before': true,
        'after' : true
      }
    ],
    // fix 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
    'block-spacing': ['error', 'always'],
    // if 与 else 的大括号风格必须一致
    'brace-style'  : ['error', '1tbs', { 'allowSingleLine': true }],
    // 变量名必须是 camelcase 风格的
    'camelcase'    : ['error', { 'properties': 'never' }],
    // 对象的最后一个属性末尾不能有逗号
    'comma-dangle' : ['error', {
      'arrays'   : 'never',
      'objects'  : 'never',
      'imports'  : 'never',
      'exports'  : 'never',
      'functions': 'never'
    }],
    // 逗号前禁止有空格，逗号后必须要有空格
    'comma-spacing'         : ['error', { 'before': false, 'after': true }],
    // 禁止在行首写逗号
    'comma-style'           : ['error', 'last'],
    // constructor 中必须有 super
    'constructor-super'     : 'error',
    'curly'                 : ['error', 'multi-line'],
    'dot-location'          : ['error', 'property'],
    'eol-last'              : 'error',
    'eqeqeq'                : ['error', 'always', { 'null': 'ignore' }],
    'func-call-spacing'     : ['error', 'never'],
    // @fixable generator 的 * 前面禁止有空格，后面必须有空格
    'generator-star-spacing': ['error', { 'before': true, 'after': true }],
    'handle-callback-err'   : ['error', '^(err|error)$' ],
    'indent'                : ['error', 2, {
      'SwitchCase'            : 1,
      'VariableDeclarator'    : 1,
      'outerIIFEBody'         : 1,
      'MemberExpression'      : 1,
      'FunctionDeclaration'   : { 'parameters': 1, 'body': 1 },
      'FunctionExpression'    : { 'parameters': 1, 'body': 1 },
      'CallExpression'        : { 'arguments': 1 },
      'ArrayExpression'       : 1,
      'ObjectExpression'      : 1,
      'ImportDeclaration'     : 1,
      'flatTernaryExpressions': false,
      'ignoreComments'        : false
    }],
    'key-spacing'             : ['error', { 'align': 'colon' }],
    'keyword-spacing'         : ['error', { 'before': true, 'after': true }],
    'new-cap'                 : ['error', { 'newIsCap': true, 'capIsNew': false }],
    'new-parens'              : 'error',
    'no-array-constructor'    : 'error',
    'no-caller'               : 'error',
    'no-class-assign'         : 'error',
    'no-compare-neg-zero'     : 'error',
    'no-cond-assign'          : 'error',
    'no-const-assign'         : 'error',
    'no-constant-condition'   : ['error', { 'checkLoops': false }],
    'no-control-regex'        : 'error',
    'no-debugger'             : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-delete-var'           : 'error',
    'no-dupe-args'            : 'error',
    'no-dupe-class-members'   : 'error',
    'no-dupe-keys'            : 'error',
    'no-duplicate-case'       : 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern'        : 'error',
    'no-eval'                 : 'error',
    'no-ex-assign'            : 'error',
    'no-extend-native'        : 'error',
    'no-extra-bind'           : 'error',
    'no-extra-boolean-cast'   : 'error',
    'no-extra-parens'         : ['error', 'functions'],
    'no-fallthrough'          : 'error',
    'no-floating-decimal'     : 'error',
    'no-func-assign'          : 'error',
    'no-global-assign'        : 'error',
    'no-implied-eval'         : 'error',
    'no-inner-declarations'   : ['error', 'both'],
    'no-invalid-regexp'       : 'error',
    'no-irregular-whitespace' : 'error',
    'no-iterator'             : 'error',
    'no-label-var'            : 'error',
    'no-labels'               : ['error', { 'allowLoop': false, 'allowSwitch': false }],
    'no-lone-blocks'          : 'error',
    'no-mixed-operators'      : ['error', {
      'groups': [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      'allowSamePrecedence': true
    }],
    'no-mixed-spaces-and-tabs'   : 'error',
    'no-multi-spaces'            : 'error',
    'no-multi-str'               : 'error',
    'no-multiple-empty-lines'    : ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-negated-in-lhs'          : 'error',
    'no-new'                     : 'error',
    'no-new-func'                : 'error',
    'no-new-object'              : 'error',
    'no-new-require'             : 'error',
    'no-new-symbol'              : 'error',
    'no-new-wrappers'            : 'error',
    'no-obj-calls'               : 'error',
    'no-octal'                   : 'error',
    'no-octal-escape'            : 'error',
    'no-path-concat'             : 'error',
    'no-proto'                   : 'error',
    'no-redeclare'               : 'error',
    'no-regex-spaces'            : 'error',
    'no-return-assign'           : ['error', 'except-parens'],
    'no-return-await'            : 'error',
    'no-self-assign'             : 'error',
    'no-self-compare'            : 'error',
    'no-sequences'               : 'error',
    'no-shadow-restricted-names' : 'error',
    'no-sparse-arrays'           : 'error',
    'no-tabs'                    : 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super'       : 'error',
    'no-throw-literal'           : 'error',
    'no-trailing-spaces'         : ['error', {
      'ignoreComments': true
    }],
    'no-undef'                     : ['error', { 'typeof': false }],
    'no-undef-init'                : 'error',
    'no-unexpected-multiline'      : 'error',
    'no-unmodified-loop-condition' : 'error',
    'no-unneeded-ternary'          : ['error', { 'defaultAssignment': false }],
    'no-unreachable'               : 'error',
    'no-unsafe-finally'            : 'error',
    'no-unsafe-negation'           : 'error',
    'no-unused-expressions'        : ['error', { 'allowShortCircuit': true, 'allowTernary': true, 'allowTaggedTemplates': true }],
    'no-unused-vars'               : ['error', { 'vars': 'all', 'args': 'none', 'ignoreRestSiblings': true }],
    'no-use-before-define'         : ['error', { 'functions': false, 'classes': false, 'variables': false }],
    'no-useless-call'              : 'error',
    'no-useless-computed-key'      : 'error',
    'no-useless-constructor'       : 'error',
    'no-useless-escape'            : 'error',
    'no-useless-rename'            : 'error',
    'no-useless-return'            : 'error',
    'no-whitespace-before-property': 'error',
    'no-with'                      : 'error',
    'object-curly-spacing'         : ['error', 'always', { 'arraysInObjects': true, 'objectsInObjects': false }],
    'object-property-newline'      : ['error', { 'allowMultiplePropertiesPerLine': true }],
    'one-var'                      : ['error', { 'initialized': 'never' }],
    'operator-linebreak'           : ['error', 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
    'padded-blocks'                : ['error', { 'blocks': 'never', 'switches': 'never', 'classes': 'never' }],
    'prefer-promise-reject-errors' : 'error',
    'quotes'                       : ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'rest-spread-spacing'          : ['error', 'never'],
    'semi'                         : ['error', 'always', {
      'omitLastInOneLineBlock': true
    }],
    'semi-spacing'               : ['error', { 'before': false, 'after': true }],
    'space-before-blocks'        : ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens'            : ['error', 'never'],
    'space-infix-ops'            : 'error',
    'space-unary-ops'            : ['error', { 'words': true, 'nonwords': false }],
    'spaced-comment'             : ['error', 'always', {
      'line' : { 'markers': ['*package', '!', '/', ',', '='] },
      'block': { 'balanced': true, 'markers': ['*package', '!', ',', ':', '::', 'flow-include'], 'exceptions': ['*'] }
    }],
    'symbol-description'    : 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing'  : ['error', 'never'],
    'unicode-bom'           : ['error', 'never'],
    'use-isnan'             : 'error',
    'valid-typeof'          : ['error', { 'requireStringLiterals': true }],
    'wrap-iife'             : ['error', 'any', { 'functionPrototypeMethods': true }],
    'yield-star-spacing'    : ['error', 'both'],
    'yoda'                  : ['error', 'never']
  }
};
