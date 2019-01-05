# Flores CLI

[![Build Status](https://badgen.net/travis/risan/flores-cli)](https://travis-ci.org/risan/flores-cli)
[![Test Covarage](https://badgen.net/codecov/c/github/risan/flores-cli)](https://codecov.io/gh/risan/flores-cli)
[![Greenkeeper](https://badges.greenkeeper.io/risan/flores-cli.svg)](https://greenkeeper.io)
[![Latest Version](https://badgen.net/npm/v/flores-cli)](https://www.npmjs.com/package/flores-cli)

The CLI tool for the [Flores](https://github.com/risan/flores) API.

## Documentation

The API documentation and the guide on how to get started are available on [Flores repository](https://github.com/risan/flores#flores).

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
    - serve: Generate the website and preview it with the built-in server.
    - watch: Regenerate the website and reload the browser automatically on file changes.

  Options
    --config, -c: The path to website configuration file, default to "site.config.js".

  Examples
    $ flores build
    $ flores serve --config my-config.js
    $ flores watch -c my-config.js
```

## Related

* [flores](https://github.com/risan/flores): The programmatic API for this CLI tool.
* [flores-create](https://github.com/risan/flores-create): The CLI tool for creating a new Flores website.
* [flores-starter](https://github.com/risan/flores-starter): The starter template for Flores website.

## License

[MIT](https://github.com/risan/flores-cli/blob/master/LICENSE) © [Risan Bagja Pradana](https://bagja.net)
