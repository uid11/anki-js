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

var inputFixes = [];

function fixInput(txt) {
  var cur = txt;
  for (var i = 0; i < inputFixes.length; ++i) {
    cur = inputFixes[i](cur);
  }
  return cur;
}

function toLowerCase(txt) {
  return String(txt).toLowerCase();
}

inputFixes.push(toLowerCase);

function renewInput() {
  var cur = input.value,
      next = fixInput(cur);

  if (cur !== next) input.value = next;
}

var card = cont.parentNode,
    input = card.getElementsByTagName('INPUT');

input = input && input.length && input[0];

if (input) {
  input.addEventListener('keyup', renewInput);
  input.addEventListener('keydown', renewInput);
  input.addEventListener('keypress', renewInput);
}

setInterval(renewCont, 5 * 1000);

renewCont();

}());