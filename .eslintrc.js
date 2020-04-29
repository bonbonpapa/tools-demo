module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:prettier/recommended"],
  // extends: [
  //   'plugin:react/recommended',
  //   'airbnb',
  // ],
  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },

  // plugins: ["prettier"],
  // rules: {
  //   "prettier/prettier": "error",
  // },
};