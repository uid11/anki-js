'use strict'; /* global document */

(function() {

var start = (new Date()).getTime();

var cont = document.getElementsByClassName('INFOCONT');

cont = cont && cont.length && cont[0];

if (!cont) return;

if (cont._setted) return;

cont._setted = true;

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

function getSpentTime() {
  var cur = (new Date()).getTime(),
      sec = Math.round((cur - start)/1000);

  if (sec < 30) return '';
  if (sec < 60) return '30s';

  return Math.floor(sec/60) + 'm';
}

function getText() {
  return getSpentTime() + ' ' + getTime();
}

function renewCont() {
  var newText = getText();
  if (newText === text) return;
  cont.innerHTML = text = newText;
}

setInterval(renewCont, 5 * 1000);

renewCont();

}());