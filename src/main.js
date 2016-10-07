'use strict'; /* global document */

(function() {

var start = (new Date()).getTime();

var cont = document.getElementsByClassName('INFOCONT');

cont = cont && cont.length && cont[0];

if (!cont) return;

if (cont._setted) return;

cont._setted = true;

var text = '';

/**
 * Transfer number to a string with leading zeros.
 * @param  {number} num
 * @param  {number} minlen Minimum length of result string.
 * @return {string} Result string.
 */
function numToStr(num, minlen) {
  var str = String(num),
      diff = minlen - str.length;

  if (diff > 0) str = Array(diff + 1).join('0') + str;

  return str;
}

/**
 * Get string with current time, like "18:43".
 * @return {string} Result string.
 */
function getTime() {
  var date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes();

  return numToStr(hours, 2) + ':' + numToStr(minutes, 2);
}

/**
 * Get string with round time spent from opening page, like "2m".
 * @return {string} Result string.
 */
function getSpentTime() {
  var cur = (new Date()).getTime(),
      sec = Math.round((cur - start)/1000);

  if (sec < 30) return '';
  if (sec < 60) return '30s';

  return Math.floor(sec/60) + 'm';
}

/**
 * Get full text for presenting in infobar.
 * @return {string} Result string.
 */
function getText() {
  return getSpentTime() + ' ' + getTime();
}

/**
 * Set fresh text to infobar (if it changed).
 */
function renewCont() {
  var newText = getText();
  if (newText === text) return;
  cont.innerHTML = text = newText;
}

var inputFixes = [];

/**
 * Apply all fixes for text from INPUT field.
 * @param  {string} txt Text from INPUT tag.
 * @return {string} Result string.
 */
function fixInput(txt) {
  var cur = txt;
  for (var i = 0; i < inputFixes.length; ++i) {
    cur = inputFixes[i](cur);
  }
  return cur;
}

/**
 * Transfer text to lowercase.
 * @param  {string} txt
 * @return {string} Result string.
 */
function toLowerCase(txt) {
  return String(txt).toLowerCase();
}

var _enToRuTable = {
  '\`': 'ё',
  q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш',
    o: 'щ', p: 'з', '[': 'х', ']': 'ъ',
  a: 'ф', s: 'ы', d: 'в', f: 'а', g: 'п', h: 'р', j: 'о', k: 'л',
    l: 'д', ';': 'ж', '\'': 'э',
  z: 'я', x: 'ч', c: 'с', v: 'м', b: 'и', n: 'т', m: 'ь',
    ',': 'б', '.': 'ю'
};

/**
 * Translate one char from EN to RU keyboard.
 * @param  {string} char
 * @return {string} Result char.
 */
function _enToRu(char) {
  return _enToRuTable[char] || char;
}

/**
 * Translate text from EN to RU keyboard.
 * @param  {string} txt
 * @return {string} Result text.
 */
function enToRu(txt) {
  return String(txt).replace(/[a-z[\];',.`]/g, _enToRu);
}

inputFixes.push(toLowerCase);

/**
 * Replace text in INPUT on fixed text.
 */
function renewInput() {
  var cur = input.value;

  if (cur.charAt(0) === ' ') return;

  var next = fixInput(cur);

  if (cur !== next) input.value = next;
}

var card  = cont.parentNode,
    input = card.getElementsByTagName('INPUT');

input = input && input.length && input[0];

if (input) {
  input.addEventListener('keyup', renewInput);
  input.addEventListener('keydown', renewInput);
  input.addEventListener('keypress', renewInput);
}

setInterval(renewCont, 5 * 1000);

renewCont();

// ENDLABEL

}());