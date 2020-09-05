const fs = require('fs');
const stylelint = require('stylelint');

const config = require('..');

const validScss = fs.readFileSync('./__tests__/scss-valid.scss', 'utf-8');
const invalidScss = fs.readFileSync('./__tests__/scss-invalid.scss', 'utf-8');

describe('valid scss', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validScss,
      syntax: 'scss',
      config,
    });
  });

  it('did not error', () => result.then((data) => expect(data.errored).toBeFalsy()));

  it('flags no warnings', () => result.then((data) => expect(data.results[0].warnings).toHaveLength(0)));
});

describe('invalid scss', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidScss,
      syntax: 'scss',
      config,
    });
  });

  it('did error', () => result.then((data) => expect(data.errored).toBeTruthy()));
});
