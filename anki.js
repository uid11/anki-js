'use strict'; /* global document */

(function() {

var cont = document.getElementsByClassName('js-info-cont');

cont = cont && cont.length && cont[0];

if (!cont) return;

var text = '';

function numToStr(num, minlen) {
  var str = String(num),
      diff = minlen - str.length;

  if (diff > 0) str = Array(diff + 1).join('0') + str;

  return str;
}

function getTime() {
  var date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes();

  return numToStr(hours, 2) + ':' + numToStr(minutes, 2);
}

function getText() {
  return getTime();
}

setInterval(function() {
  var newText = getText();
  if (newText === text) return;
  cont.innerHTML = text = newText;
}, 5 * 1000);

}());