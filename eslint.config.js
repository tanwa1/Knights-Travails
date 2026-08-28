import globals from "globals";


export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: { ...globals.node, ...globals.jest },
    },
    rules: { "no-unused-vars": "warn" },
  },
];