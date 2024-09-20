import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

// ESLint flat config array
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,  // TypeScript parser
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,  // Use browser global variables
    },
    plugins: {
      prettier: prettierPlugin,  // Include Prettier as a plugin
    },
    rules: {
      "prettier/prettier": "error",  // Treat Prettier issues as ESLint errors
    },
  },
  // JavaScript configuration
  js.configs.recommended, 
  
  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": ts, // TypeScript ESLint plugin
    },
    rules: ts.configs.recommended.rules, // Apply TypeScript recommended rules
  },

  // React configuration
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react,
    },
    rules: react.configs.flat.recommended.rules, // Apply React flat config
  },

  // Prettier configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      ...prettierConfig.rules, // Apply Prettier rules from config
    },
  },
];