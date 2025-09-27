import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import {defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", ".eslintrc.cjs"]),
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {...globals.browser, ...globals.es2020},
      parserOptions: {
        ecmaFeatures: {jsx: true},
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: {version: "18.2"},
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs["recommended-latest"].rules,
      ...reactRefresh.configs.vite.rules,
      "react-refresh/only-export-components": [
        "warn",
        {allowConstantExport: true},
      ],
      "no-unused-vars": [
        "error",
        {varsIgnorePattern: "^[A-Z_]", argsIgnorePattern: "^_"},
      ],
      "react/prop-types": "off",
    },
  },
  {
    files: ["vite.config.js", ".eslintrc.cjs", "**/*.config.js"],
    languageOptions: {
      globals: {...globals.node},
    },
  },
]);
