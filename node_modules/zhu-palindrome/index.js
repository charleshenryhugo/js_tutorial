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