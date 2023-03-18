// example:  converts "lord of the rings" to "lord+of+the+rings", per what OpenLibrary API needs to make a valid book title search
function bookTitleStrToURL(str) {
  return str.split(" ").join("+");
}

function bookFilter(str) {
  return {
    // splits string into array, adds word boundary to both sides of each word, then joins them with regex | operator - filters out versions by language
    regex: new RegExp(str.split(' ').map(word => `\\b${word}\\b`).join('|'), 'gi'),
    // added 'charLimit' as a cheeky way to get rid of nonsense like "il signore degli anelli : trilogia / italian edition of the lord of the rings" matching the regex
    charLimit: str.length+5
  }
}

module.exports = { bookTitleStrToURL, bookFilter };
