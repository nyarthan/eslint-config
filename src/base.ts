import { defineConfig } from "eslint/config";

export const baseConfig = defineConfig({
  rules: {
    /** @see {@link https://eslint.org/docs/latest/rules/array-callback-return} */
    "array-callback-return": [
      "error",
      {
        allowImplicit: false,
        checkForEach: true,
        allowVoid: false,
      },
    ],

    /** @see {@link https://eslint.org/docs/latest/rules/constructor-super} */
    "constructor-setup": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/for-direction} */
    "for-direction": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/getter-return} */
    "getter-return": [
      "error",
      {
        allowImplicit: false,
      },
    ],

    /** @see {@link https://eslint.org/docs/latest/rules/no-async-promise-executor} */
    "no-async-promise-executor": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-await-in-loop} */
    "no-await-in-loop": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-class-assign} */
    "no-class-assign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-compare-neg-zero} */
    "no-compare-neg-zero": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-cond-assign} */
    "no-cond-assign": ["error", "always"],

    /** @see {@link https://eslint.org/docs/latest/rules/no-const-assign} */
    "no-const-assign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-constant-binary-expression} */
    "no-constant-binary-expression": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-constant-condition} */
    "no-constant-condition": [
      "error",
      {
        checkLoops: "allExceptWhileTrue",
      },
    ],

    /** @see {@link https://eslint.org/docs/latest/rules/no-constructor-return} */
    "no-constructor-return": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-control-regex} */
    "no-control-regex": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-debugger} */
    "no-debugger": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-dupe-args} */
    "no-dupe-args": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-dupe-class-members} */
    "no-dupe-class-members": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-dupe-else-if} */
    "no-dupe-else-if": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-dupe-keys} */
    "no-dupe-keys": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-duplicate-case} */
    "no-duplicate-case": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-duplicate-imports} */
    "no-duplicate-imports": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-empty-character-class} */
    "no-empty-character-class": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-empty-pattern} */
    "no-empty-pattern": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-ex-assign} */
    "no-ex-assign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-fallthrough} */
    "no-fallthrough": ["error", {allowEmptyCase: true}],

    /** @see {@link https://eslint.org/docs/latest/rules/no-func-assign} */
    "no-func-assign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-import-assign} */
    "no-import-assign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-inner-declaration} */
    "no-inner-declaration": ["error", "both"],

    /** @see {@link https://eslint.org/docs/latest/rules/no-invalid-regexp} */
    "no-invalid-regexp": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-irregular-whitespace} */
    "no-irregular-whitespace": ["error", {
      skipStrings: false,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
      skipJSXText: false
    }],

    /** @see {@link https://eslint.org/docs/latest/rules/no-loss-of-precision} */
    "no-loss-of-precision": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-misleading-character-class} */
    "no-misleading-character-class": ["error", {allowEscape: true}],

    /** @see {@link https://eslint.org/docs/latest/rules/no-new-native-constructor} */
    "no-new-native-constructor": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-obj-calls} */
    "no-obj-calls": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-promise-executor-return} */
    "no-promise-executor-return": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-prototype-builtins} */
    "no-prototype-builtins": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-self-assign} */
    "no-self-assign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-self-compare} */
    "no-self-compare": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-setter-return} */
    "no-setter-return": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-sparse-arrays} */
    "no-sparse-arrays": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-template-curly-in-string} */
    "no-template-curly-in-string": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-this-before-super} */
    "no-this-before-super": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-undef} */
    "no-undef": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unexpecter-multiline} */
    "no-unexpecter-multiline": "off",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition} */
    "no-unmodified-loop-condition": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unreachable} */
    "no-unreachable": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unreachable-loop} */
    "no-unreachable-loop": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unsafe-finally} */
    "no-unsafe-finally": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unsafe-negation} */
    "no-unsafe-negation": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining} */
    "no-unsafe-optional-chaining": ["error", {disallowArithmeticOperators: true}],

    /** @see {@link https://eslint.org/docs/latest/rules/no-unused-private-class-members} */
    "no-unused-private-class-members": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unused-vars} */
    "no-unused-vars": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-use-before-define} */
    "no-use-before-define": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-assignment} */
    "no-useless-assignment": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-backreference} */
    "no-useless-backreference": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/require-atomic-updates} */
    "require-atomic-updates": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/use-isnan} */
    "use-isnan": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/valid-typeof} */
    "valid-typeof": ["error", {requireStringLiterals: true}],

    // here
    /** @see {@link https://eslint.org/docs/latest/rules/accessor-pairs} */
    "accessor-pairs": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/arrow-body-style} */
    "arrow-body-style": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/block-scoped-var} */
    "block-scoped-var": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/camelcase} */
    "camelcase": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/capitalized-comments} */
    "capitalized-comments": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/class-methods-use-this} */
    "class-methods-use-this": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/complexity} */
    "complexity": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/consistent-return} */
    "consistent-return": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/consistent-this} */
    "consistent-this": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/curly} */
    "curly": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/default-case} */
    "default-case": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/default-case-last} */
    "default-case-last": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/default-param-last} */
    "default-param-last": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/dot-notation} */
    "dot-notation": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/eqeqeq} */
    "eqeqeq": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/func-name-matching} */
    "func-name-matching": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/func-names} */
    "func-names": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/func-style} */
    "func-style": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs} */
    "grouped-accessor-pairs": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/guard-for-in} */
    "guard-for-in": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/id-denylist} */
    "id-denylist": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/id-length} */
    "id-length": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/id-match} */
    "id-match": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/init-declarations} */
    "init-declarations": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/logical-assignment-operators} */
    "logical-assignment-operators": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/max-classes-per-file} */
    "max-classes-per-file": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/max-depth} */
    "max-depth": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/max-lines} */
    "max-lines": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/max-lines-per-function} */
    "max-lines-per-function": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/max-nested-callbacks} */
    "max-nested-callbacks": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/max-params} */
    "max-params": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/max-statements} */
    "max-statements": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/new-cap} */
    "new-cap": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-alert} */
    "no-alert": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-array-constructor} */
    "no-array-constructor": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-bitwise} */
    "no-bitwise": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-caller} */
    "no-caller": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-case-declarations} */
    "no-case-declarations": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-console} */
    "no-console": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-continue} */
    "no-continue": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-delete-var} */
    "no-delete-var": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-div-regex} */
    "no-div-regex": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-else-return} */
    "no-else-return": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-empty} */
    "no-empty": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-empty-function} */
    "no-empty-function": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-empty-static-block} */
    "no-empty-static-block": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-eq-null} */
    "no-eq-null": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-eval} */
    "no-eval": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-extend-native} */
    "no-extend-native": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-extra-bind} */
    "no-extra-bind": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-extra-boolean-cast} */
    "no-extra-boolean-cast": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-extra-label} */
    "no-extra-label": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-global-assign} */
    "no-global-assign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-implicit-coercion} */
    "no-implicit-coercion": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-implicit-globals} */
    "no-implicit-globals": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-implied-eval} */
    "no-implied-eval": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-inline-comments} */
    "no-inline-comments": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-invalid-this} */
    "no-invalid-this": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-iterator} */
    "no-iterator": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-label-var} */
    "no-label-var": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-labels} */
    "no-labels": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-lone-blocks} */
    "no-lone-blocks": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-lonely-if} */
    "no-lonely-if": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-loop-func} */
    "no-loop-func": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-magic-numbers} */
    "no-magic-numbers": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-multi-assign} */
    "no-multi-assign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-multi-str} */
    "no-multi-str": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-negated-condition} */
    "no-negated-condition": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-nested-ternary} */
    "no-nested-ternary": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-new} */
    "no-new": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-new-func} */
    "no-new-func": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-new-wrappers} */
    "no-new-wrappers": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape} */
    "no-nonoctal-decimal-escape": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-object-constructor} */
    "no-object-constructor": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-octal} */
    "no-octal": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-octal-escape} */
    "no-octal-escape": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-param-reassign} */
    "no-param-reassign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-plusplus} */
    "no-plusplus": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-proto} */
    "no-proto": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-redeclare} */
    "no-redeclare": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-regex-spaces} */
    "no-regex-spaces": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-restricted-exports} */
    "no-restricted-exports": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-restricted-globals} */
    "no-restricted-globals": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-restricted-imports} */
    "no-restricted-imports": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-restricted-properties} */
    "no-restricted-properties": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-restricted-syntax} */
    "no-restricted-syntax": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-return-assign} */
    "no-return-assign": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-script-url} */
    "no-script-url": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-sequences} */
    "no-sequences": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-shadow} */
    "no-shadow": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-shadow-restricted-names} */
    "no-shadow-restricted-names": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-ternary} */
    "no-ternary": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-throw-literal} */
    "no-throw-literal": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-undef-init} */
    "no-undef-init": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-undefined} */
    "no-undefined": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-underscore-dangle} */
    "no-underscore-dangle": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary} */
    "no-unneeded-ternary": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unused-expressions} */
    "no-unused-expressions": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-unused-labels} */
    "no-unused-labels": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-call} */
    "no-useless-call": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-catch} */
    "no-useless-catch": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-computed-key} */
    "no-useless-computed-key": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-concat} */
    "no-useless-concat": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-constructor} */
    "no-useless-constructor": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-escape} */
    "no-useless-escape": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-rename} */
    "no-useless-rename": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-useless-return} */
    "no-useless-return": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-var} */
    "no-var": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-void} */
    "no-void": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-warning-comments} */
    "no-warning-comments": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/no-with} */
    "no-with": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/object-shorthand} */
    "object-shorthand": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/one-var} */
    "one-var": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/operator-assignment} */
    "operator-assignment": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback} */
    "prefer-arrow-callback": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-const} */
    "prefer-const": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-destructuring} */
    "prefer-destructuring": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator} */
    "prefer-exponentiation-operator": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-named-capture-group} */
    "prefer-named-capture-group": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals} */
    "prefer-numeric-literals": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-object-has-own} */
    "prefer-object-has-own": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-object-spread} */
    "prefer-object-spread": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors} */
    "prefer-promise-reject-errors": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-regex-literals} */
    "prefer-regex-literals": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-rest-params} */
    "prefer-rest-params": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-spread} */
    "prefer-spread": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/prefer-template} */
    "prefer-template": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/radix} */
    "radix": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/require-await} */
    "require-await": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/require-unicode-regexp} */
    "require-unicode-regexp": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/require-yield} */
    "require-yield": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/sort-imports} */
    "sort-imports": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/sort-keys} */
    "sort-keys": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/sort-vars} */
    "sort-vars": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/strict} */
    "strict": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/symbol-description} */
    "symbol-description": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/vars-on-top} */
    "vars-on-top": "error",

    /** @see {@link https://eslint.org/docs/latest/rules/yoda} */
    "yoda": "error",
  },
});
