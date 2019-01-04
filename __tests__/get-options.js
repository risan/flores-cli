/* global beforeEach:false, expect:false, test:false */
const getOptions = require("../src/get-options");

const ORIGINAL_ROOT = process.cwd();

beforeEach(() => {
  process.chdir(ORIGINAL_ROOT);
});

test("it looks for site.config.js if no is file given", async () => {
  expect.assertions(1);

  process.chdir(`${__dirname}/fixtures/with-site-config`);

  const options = await getOptions();

  expect(options).toEqual({
    url: "http://example.com"
  });
});

test("it returns empty object if no file is given and site.config.js is not exists", async () => {
  expect.assertions(1);

  process.chdir(`${__dirname}/fixtures/without-site-config`);

  const options = await getOptions();

  expect(options).toEqual({});
});

test("it can load custom config file", async () => {
  expect.assertions(1);

  process.chdir(`${__dirname}/fixtures/with-site-config`);

  const options = await getOptions("custom-config.js");

  expect(options).toEqual({
    url: "http://custom.com"
  });
});

test("it throws error if the given file is not found", async () => {
  expect.assertions(2);

  process.chdir(`${__dirname}/fixtures/without-site-config`);

  try {
    await getOptions("site.config.js");
  } catch (error) {
    expect(error.message).toMatch(/not found/i);
  }

  try {
    await getOptions("foo.js");
  } catch (error) {
    expect(error.message).toMatch(/not found/i);
  }
});

test("it throws error if config file is invalid", async () => {
  expect.assertions(1);

  process.chdir(`${__dirname}/fixtures/with-site-config`);

  try {
    await getOptions("invalid-config.js");
  } catch (error) {
    expect(error.message).toMatch(/error/i);
  }
});

test("it throws error if config file exports non-object value", async () => {
  expect.assertions(1);

  process.chdir(`${__dirname}/fixtures/with-site-config`);

  try {
    await getOptions("string-config.js");
  } catch (error) {
    expect(error.message).toMatch(/error/i);
  }
});
