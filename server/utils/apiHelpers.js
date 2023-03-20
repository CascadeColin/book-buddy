// example:  converts "lord of the rings" to "lord+of+the+rings", per what OpenLibrary API needs to make a valid book title search
function bookTitleStrToURL(str) {
  return str.split(" ").join("+");
}

// creates a regex to eliminate books returned in non-English titles
function regexGen(str) {
  return {
    regex: new RegExp(str.split(" ").join("|")),
    // leaving as a closure in case more filtering needs added
  }
}

module.exports = { bookTitleStrToURL, regexGen };
