/* global expect:false, test:false */
const execa = require("execa");

test("it throws error if command argument is missing", async () => {
  expect.assertions(2);

  try {
    await execa("./src/index.js");
  } catch (error) {
    expect(error.code).toBe(1);
    expect(error.message).toMatch(/missing/i);
  }
});

test("it throws error if command is not available", async () => {
  expect.assertions(2);

  try {
    await execa("./src/index.js", ["foo"]);
  } catch (error) {
    expect(error.code).toBe(1);
    expect(error.message).toMatch(/not available/i);
  }
});
