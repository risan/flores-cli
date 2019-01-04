const fs = require("fs");
const path = require("path");
const util = require("util");

const access = util.promisify(fs.access);

/**
 * Check if the given file is exists.
 * @param  {String} file - The file to locate.
 * @return {Boolean}
 */
const isExists = async file => {
  try {
    await access(file, fs.constants.R_OK);

    return true;
  } catch(error) {
    return false;
  }
};

/**
 * Load the given config gile.
 * @param  {String} file - The config file to load.
 * @return {Object}
 */
const loadConfig = file => {
  try {
    const config =  require(path.resolve(file));

    if (typeof config !== "object") {
      throw new Error("Must export an object");
    }

    return config;
  } catch(error) {
    throw new Error(`Error while reading the config file "${file}": ${error.message}`);
  }
};

/**
 * Get website configuration options.
 * @param  {String} file - The config file to load.
 * @return {Object}
 */
const getOptions = async file => {
  if (file) {
    const exists = await isExists(file);

    if (exists) {
      return loadConfig(file);
    }

    throw new Error(`The config file "${file}" is not found.`);
  }

  const exists = await isExists("site.config.js");

  return exists ? loadConfig("site.config.js") : {};
};

module.exports = getOptions;
