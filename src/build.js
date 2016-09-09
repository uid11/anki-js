#!/usr/bin/env node

'use strict'; /* global process */

const fs = require(`fs`);

const BUILD = `./build/`,
      param = process.argv[2];


try {
  fs.accessSync(BUILD);
} catch (e) {
  fs.mkdirSync(BUILD);
}

console.log(process.argv);