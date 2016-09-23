'use strict'; /* global document, window */

/**
 * Log all JS errors on screen.
 * @param {*} msg Text message or error object.
 */
window.onerror = function log(msg) {
  var p = document.createElement('P');
  p.style.color = 'red';

  p.innerHTML = String(msg);

  document.body.appendChild(p);
};