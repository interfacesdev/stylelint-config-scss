module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.@(spec|test).js',
        '**/*.@(spec|test).js',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
