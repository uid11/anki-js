#!/usr/bin/env node

'use strict'; /* global process */


/**
 * If called from command line, execute with it args.
 */
if (require.main && require.main.id === module.id) {
  checkHistory(process.argv[2]);
}