# Flores CLI

[![Build Status](https://badgen.net/travis/risan/flores-cli)](https://travis-ci.org/risan/flores-cli)
[![Test Covarage](https://badgen.net/codecov/c/github/risan/flores-cli)](https://codecov.io/gh/risan/flores-cli)
[![Greenkeeper](https://badges.greenkeeper.io/risan/flores-cli.svg)](https://greenkeeper.io)
[![Latest Version](https://badgen.net/npm/v/flores-cli)](https://www.npmjs.com/package/flores-cli)

Minimalist static site generator.

## Install

```bash
$ npm install flores-cli
```

## Usage

```bash
$ flores --help

  Usage
    $ flores <command> [--config]

  There are three available commands:
    - build: Generate the website.
    - serve: Generate the website and start the server.
    - watch: Start the development server and watch for any file changes.

  Options
    --config, -c: The path to website configuration file. It will look for
                  "site.config.js" if non given.

  Examples
    $ flores build
    $ flores serve --config my-config.js
    $ flores watch -c my-config.js
```

## Related

* [flores](https://github.com/risan/flores): The JavaScript API for this CLI tool.

## License

[MIT](https://github.com/risan/flores-cli/blob/master/LICENSE) © [Risan Bagja Pradana](https://bagja.net)
