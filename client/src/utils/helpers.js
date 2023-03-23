// example:  converts "lord of the rings" to "lord+of+the+rings", per what OpenLibrary API needs to make a valid book title search
export function bookTitleStrToURL(str) {
  return str.split(" ").join("+");
}

// creates a regex to eliminate books returned in non-English titles
export function regexGen(str) {
  return {
    regex: new RegExp(str.split(" ").join("|")),
    // leaving as a closure in case more filtering needs added
  };
}

// return a placeholder if no cover available
export function bookCoverErrorHandler(book) {
  if (!book.cover) {
    return "https://via.placeholder.com/400x600";
  } else {
    return `${book.cover.large}`
  }
}

// dynamically assigns a book description based on what data is available
export function addDesc(book) {
  // array containing object {text: '', comment: ''} - text is more useful
  // if comment === "first sentence", return `First Sentence: ${book.excerpts[i].text}
  const excerpts = book?.excerpts;
  // string containing a note on the book
  const notes = book?.notes;

  // returns the string that is a note describing the book, if it exists
  if (excerpts === undefined && notes === undefined) {
    return `No description available!`;
  }

  if (notes) {
    return `${notes}`;
  }

  if (excerpts.length > 0) {
    const firstSentence = excerpts.filter(
      (obj) => obj.comment === "first sentence"
    );
    if (firstSentence.length > 0) {
      // in theory, this will return the first sentence of the book, if available

      return `First Sentence: ${firstSentence[0].text}`;
    } else {
      // return whatever is populating the text property (always a string, so far)

      return `Excerpt: ${excerpts[0].text}`;
    }
  }
  return `something went wrong!`;
}
