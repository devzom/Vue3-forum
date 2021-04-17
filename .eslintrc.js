module.exports = {
  root: true,
  env: {
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'prettier',
    'plugin:prettier/recommended',
    '@vue/airbnb',
  ],

  rules: {
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        ignores: [],
      },
    ],

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
