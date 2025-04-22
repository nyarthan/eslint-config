import { defineConfig } from "eslint/config";

export const typescriptConfig = defineConfig({
  rules: {
    /** @see {@link https://eslint.org/docs/latest/rules/constructor-super} */
    "constructor-setup": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/getter-return} */
    "getter-return": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-class-assign} */
    "no-class-assign": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-const-assign} */
    "no-const-assign": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-dupe-args} */
    "no-dupe-args": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-dupe-class-members} */
    'no-dupe-class-members': 'off'
  },
});
