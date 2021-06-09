module.exports = {
  extends: ['@interfacesdev/stylelint-config'],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-blockless',
          'first-nested',
        ],
        ignore: [
          'after-comment',
        ],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-no-unknown': null,
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'no-invalid-double-slash-comments': null,

    'order/order': [
      {
        type: 'at-rule',
        name: 'use',
      },
      'dollar-variables',
      'custom-properties',
      {
        type: 'at-rule',
        name: 'mixin',
      },
      {
        type: 'at-rule',
        name: 'extend',
      },
      {
        type: 'at-rule',
        name: 'include',
      },
      'declarations',
      'rules',
      'at-rules',
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true,
      },
    ],

    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'never',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-if-no-null': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-mixin-named-arguments': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': true,
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-default': null,
    'scss/dollar-variable-empty-line-after': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-first-in-block': [
      true,
      {
        ignore: ['comments', 'imports'],
        except: ['root', 'function'],
      },
    ],
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands', 'inside-block'],
      },
    ],
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInside: 'at-rule',
      },
    ],
    'scss/no-duplicate-mixins': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
  },
};
