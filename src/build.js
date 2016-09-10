#!/usr/bin/env node

'use strict'; /* global process */

const fs = require(`fs`);

const BUILD = `./build/`,
      param = process.argv[2] || `en`,
      INFOCONT = `js-info-cont`;

try {
  fs.accessSync(BUILD);
} catch (e) {
  fs.mkdirSync(BUILD);
}

let js = fs.readFileSync(`./src/main.js`, `utf8`)
           .replace(`INFOCONT`, INFOCONT);

if (param === `ru`) {
  js = js.replace(`ENDLABEL`, `ENDLABEL
    inputFixes.push(enToRu);
  `);
}

const out = `

<div class="${INFOCONT}"></div>

<script>
${js}
</script>

`.replace(/\n\s*\n/g, `\n`)
 .replace(/\/\*.*\*\//g, ``)
 .replace(/^\n*/, ``).replace(/\n*$/, ``);

const test = `
<!doctype html><meta charset=utf-8><title>TEST</title>
<link rel="stylesheet" href="../src/main.css">
<h1>Test</h1>
<script src="../src/test.js"></script>
<div><input>${out}</div>
`;

fs.writeFileSync(`${BUILD}out.txt`, out);
fs.writeFileSync(`${BUILD}test.html`, test);