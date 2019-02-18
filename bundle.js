(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require('zhu-palindrome');

alert(new Phrase('Mad,am').palindrome());
},{"zhu-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// extend String.prototype.reverse()
String.prototype.reverse = function() { 
    return Array.from(this).reverse().join(''); 
};

// define Phrase Object
function Phrase(content) {
    this.content = content || '';
    
    this.letters = function() {
        return (this.content.match(/[a-z]/gi) || []).join('');
    }

    this.processedContent = function() {
        return this.letters().toLowerCase();
    }

    // returns true if content is palindrome, false otherwise
    this.palindrome = function() {
        return this.processedContent().reverse() === this.processedContent();
    }
}
},{}]},{},[1]);
