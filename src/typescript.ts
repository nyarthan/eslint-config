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
    "no-dupe-class-members": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-dupe-keys} */
    "no-dupe-keys": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-func-assign} */
    "no-func-assign": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-import-assign} */
    "no-import-assign": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-new-native-constructor} */
    "no-new-native-constructor": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-obj-calls} */
    "no-obj-calls": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-setter-return} */
    "no-setter-return": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-this-before-super} */
    "no-this-before-super": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-undef} */
    "no-undef": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unsafe-negation} */
    "no-unsafe-negation": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-redeclare} */
    "no-redeclare": "error",
  },
});
