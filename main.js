let Phrase = require('zhu-palindrome');

function palindromeTester(event) {
    event.preventDefault();
    let phrase = new Phrase(event.target.phrase.value);
    let inputPhrase = document.querySelector('#inputPhrase');
    let palindromeResult = document.querySelector('#palindromeResult');

    inputPhrase.innerHTML = `"${phrase.content}"`;
    if (phrase.palindrome()) {
        palindromeResult.innerHTML = 'is a palindrome!';
    } else {
        palindromeResult.innerHTML = 'is not a palindrome.';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let tester = document.querySelector('#palindromeTester');
    tester.addEventListener('submit', function(event) {
        palindromeTester(event);
    });
});
