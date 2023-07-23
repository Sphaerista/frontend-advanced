module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "warn",
    "react/jsx-indent": [2, { indentMode: 4, ignoreTernaryOperator: true }],
    no_undef: "off",
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
};
