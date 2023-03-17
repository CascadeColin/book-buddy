// example:  converts "lord of the rings" to "lord+of+the+rings", per what OpenLibrary API needs to make a valid book title search
function bookTitleStrToURL(str) {
  return str.split(" ").join("+");
}

// iterates through array of books returned from API call to search based on title.  If user-provided title !== title property of book, iterate to the next arr index.  repeat until it finds a match, or return "book not found"
function doesTitleMatch(arr) {
    // move while loop function here if the logic gets bulky
}

// creates a regex to eliminate books returned in non-English titles
// added 'charLimit' as a cheeky way to get rid of nonsense like "il signore degli anelli : trilogia / italian edition of the lord of the rings" matching "/lord|of|the|rings/" - ENGLISH ONLY!
function regexGen(str) {
  return {
    regex: new RegExp(str.split(" ").join("|")),
    charLimit: str.length+5
  }
}

regexGen('lord of the rings')
module.exports = { bookTitleStrToURL, regexGen };
