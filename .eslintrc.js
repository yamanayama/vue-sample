module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  plugins: [],
  parserOptions: {},
  env: { 'browser': true },
  globals: {},
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'never', { 'beforeStatementContinuationChars': 'never' }],
    'semi-spacing': ['error', { 'after': true, 'before': false }],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
