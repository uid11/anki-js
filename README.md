# anki-js #

[![NPM version][npm-image]][npm-url] ![node][node-image] ![dependencies][dependencies-image] [![License MIT][license-image]](LICENSE)

[![NPM](https://nodei.co/npm/anki-js.png)](https://nodei.co/npm/anki-js/)

**anki-js** add some light functionality to Anki flash cards (current time, spent time for current card, fix RU keyboard layout).  
It use ES3 JS-code, so it work on all platforms (Windows, Linux, iOS, AnkiDroid).

## Usage ##
You need a node version >=6.0.0.  
Build project, then copy text of build/out.txt to the end of Anki front card template (for each card type), and src/main.css to card styles.

For switching off "input text fixing" print space as first symbol of string.

## Build ##
```bash
$ npm run build
```

For adding autoreplacing english letters on russian use param 'ru':
```bash
$ npm run build ru
```

## Tests ##
```bash
$ npm install
$ npm run build
$ npm test
```

## License ##
[MIT](LICENSE)

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg "license-image"
[dependencies-image]: https://img.shields.io/gemnasium/mathiasbynens/he.svg?maxAge=2592000 "dependencies-image"
[node-image]: https://img.shields.io/badge/node-v6.0.0-brightgreen.svg?maxAge=2592000 "node-image"
[npm-image]: https://img.shields.io/npm/v/anki-js.svg "npm-image"
[npm-url]: https://www.npmjs.com/package/anki-js "anki-js"