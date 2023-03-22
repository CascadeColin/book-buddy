// example:  converts "lord of the rings" to "lord+of+the+rings", per what OpenLibrary API needs to make a valid book title search
function bookTitleStrToURL(str) {
  return str.split(" ").join("+");
}

// creates a regex to eliminate books returned in non-English titles
function regexGen(str) {
  return {
    regex: new RegExp(str.split(" ").join("|")),
    // leaving as a closure in case more filtering needs added
  };
}

// dynamically assigns a book description based on what data is available
function addDesc(book) {
  // array containing object {text: '', comment: ''} - text is more useful
  // if comment === "first sentence", return `First Sentence: ${book.excerpts[i].text}
  const excerpts = book?.excerpts;
  // string containing a note on the book
  const notes = book?.notes;

  // returns the string that is a note describing the book, if it exists
  if (notes) {
    console.log(`Notes: ${notes}`)
    return `Notes: ${notes}`;
  }

  if (excerpts.length > 0) {
    const firstSentence = excerpts.filter(
      (obj) => obj.comment === "first sentence"
    );
    if (firstSentence.length > 0) {
      // in theory, this will return the first sentence of the book, if available
      console.log(`First Sentence: ${firstSentence[0].text}`)
      return `First Sentence: ${firstSentence[0].text}`;
    } else {
      // return whatever is populating the text property (always a string, so far)
      console.log(`Excerpt: ${excerpts[0].text}`)
      return `Excerpt: ${excerpts[0].text}`;
    }
  }

  // should only reach if neither if statement fires
  return `No description available!`
  
}

// TODO: delete this file if it is confirmed unused
// module.exports = { bookTitleStrToURL, regexGen, addDesc };
