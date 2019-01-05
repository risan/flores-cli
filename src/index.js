#!/usr/bin/env node
/* eslint no-console: "off" */
const flores = require("flores");
const meow = require("meow");

const getOptions = require("./get-options");

const AVAILABLE_COMMANDS = ["build", "serve", "watch"];

(async () => {
  try {
    const cli = meow(
      `
      Usage
        $ flores <command> [--config]

      There are three available commands:
        - build: Generate the website.
        - serve: Generate the website and preview it with the built-in server.
        - watch: Regenerate the website and reload the browser automatically on file changes.

      Options
        --config, -c: The path to website configuration file, default to "site.config.js".

      Examples
        $ flores build
        $ flores serve --config my-config.js
        $ flores watch -c my-config.js
    `,
      {
        flags: {
          config: {
            type: "string",
            alias: "c",
            default: undefined
          }
        }
      }
    );

    if (cli.input.length === 0) {
      throw new Error("The <command> argument is missing.");
    }

    const command = cli.input[0].toLowerCase();

    if (!AVAILABLE_COMMANDS.includes(command)) {
      throw new Error(`The "${command}" command is not available.`);
    }

    const options = await getOptions(cli.flags.config);

    await flores[command](options);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();
