module.exports = {
  settings: {
    react: {
      version: "latest",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
