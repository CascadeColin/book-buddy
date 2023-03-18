const router = require("express").Router();
// package that allows for fetch to be used in Node
const fetch = require("node-fetch");
const { bookTitleStrToURL, regexGen } = require("../../utils/apiHelpers");
// any routing related to fetching books will go here

/******  START PSEUDOCODE  ******/

/*   const searchBookByTitleFetchURL = "https://openlibrary.org/search.json?title=name+of+book" WHERE 'name+of+book' === a string that is formatted to replace " " or "_" with "+" to match what the API search needs. */
/*  RETURNS an object that contains all books that match that search.  for simplicity sake, pull index[0] and roll with it to get an MVP */
/*  we can add functionality to search by author as well  */
/*  reference:  https://openlibrary.org/dev/docs/api/search  */

/*
TODO: can possibly scrap this, as it's included in `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data` in all tempUntilServerRuns cases so far

const bookCoverFetchURL = "https://covers.openlibrary.org/b/isbn/$value-$size.jpg" WHERE '$value' === the book's ISBN (required to be able to search) && $size === size of the image (S, M, or L).  We will probably always use "L".  */
/*  reference:  https://openlibrary.org/dev/docs/api/covers  */

/*  
TODO: can possibly scrap this, as it's included in `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data` in all tempUntilServerRuns cases so far

const bookDetailsFetchURL = "https://openlibrary.org/books/$ISBN.json" WHERE $ISBN === the book's ISBN (as fetched by searchBookByTitleFetchURL).
RETURNS an object that contains all of the data that we need, and more  */
/*  reference:  https://openlibrary.org/dev/docs/api/books  */

/*
`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data` WHERE 'isbn' === the string we get from `https://openlibrary.org/search.json?title=${searchTitle}`
reference: https://openlibrary.org/dev/docs/api/books
*/

// router.get("/book", async (req,res) => {
//     try {
//         const bookTitle = req.body
//         const searchTitle = bookTitleStrToURL(bookTitle)

//         // returns an array of books that match the searched title
//         const isbnArray = await fetch(`https://openlibrary.org/search.json?title=${searchTitle}`)
//         console.log(isbnArray)
//         // hardcode isbnArray[0] to be used - we can get fancy later
//         // const isbn = access isbnArray[0] object and get string value of ISBN
//         // const bookDetails = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
//         // *access 'bookDetails' and send the data to DB.  DB will store data, Apollo *will be used to connect DB to front-end to render data
//     } catch (err) {
//         console.error(err)
//     }
// })

async function tempUntilServerRuns() {
  try {
    const bookTitle = "lord of the rings";
    const {regex, charLimit} = regexGen(bookTitle)
    console.log(regex, charLimit)
    const searchTitle = bookTitleStrToURL(bookTitle);
    // returns an array of books that match the searched title
    const titleData = await fetch(
      `https://openlibrary.org/search.json?title=${searchTitle}`
    );
    const titleRes = await titleData.json();
    const isbnArr = titleRes.docs[0].isbn;

    // removes all indexes after 20 - eliminates edge case where page would hang due to iterating through hundreds of array indexes
    isbnArr.splice(20, Infinity);

    let i = 0;
    while (i < isbnArr.length) {
      const bookData = await fetch(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${isbnArr[i]}&format=json&jscmd=data`
      );
      const bookRes = await bookData.json();
      // dynamically creates object key to match what is returned by Open Library
      const isbn = Object.keys(bookRes);
      console.log(bookRes[isbn].title.toLowerCase());
      // if user-provided title matches 'regex' and is <= 'charLimit', use that index

      // iterator if index did not match
      i++;
    }

    if (i === isbnArr.length) {
      console.log("No book found by that title!");
    }

    // gets the isbn of the first matching book - can refine this later after getting MVP
    // const isbn = titleRes.docs[0].isbn[0]
    // const bookData = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
    // const bookRes = await bookData.json()
    // console.log(bookRes)
    // send this data to the database
  } catch (err) {
    console.log(err);
  }
}

tempUntilServerRuns();
