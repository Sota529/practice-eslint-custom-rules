module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["local-rules"],
  rules: {
    "local-rules/uppercase-first-declarations": "error",
  },
  ignorePatterns: ["dist", "node_modules", "eslint-local-rules"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latests",
        sourceType: "module",
      },
    },
  ],
};
