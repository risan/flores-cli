#!/usr/bin/env node
const flores = require("flores");
const meow = require("meow");

const AVAILABLE_COMMANDS = ["build", "serve", "watch"];

(async () => {
  try {
    const cli = meow(`
      Usage
        $ flores <command>

        - command: The command to run (build, server, or watch).

      Build the site for production:
        $ flores build

      Build the site and start the development server:
        $ flores serve

      Start the development server and watch for file changes:
        $ flores watch
    `);

    if (cli.input.length === 0) {
      throw new Error("The <command> argument is missing.");
    }

    const command = cli.input[0].toLowerCase();

    if (!AVAILABLE_COMMANDS.includes(command)) {
      throw new Error(`The <${command}> command is not available.`);
    }

    await flores[command]();
  } catch(error) {
    console.error(error.message);
    process.exit(1);
  }
})();
