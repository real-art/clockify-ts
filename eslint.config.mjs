import js from "@eslint/js";
import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**", ".github/**", "reports/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  sonarjs.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
);
