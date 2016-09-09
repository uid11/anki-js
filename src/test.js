'use strict'; /* global document, window */

function log(msg) {
  var p = document.createElement('P');
  p.style.color = 'red';

  p.innerHTML = msg;

  document.body.appendChild(p);
}

window.onerror = function(msg) {
  log(msg);
};