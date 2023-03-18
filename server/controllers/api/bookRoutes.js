const router = require("express").Router();
// package that allows for fetch to be used in Node
const fetch = require("node-fetch");
const { bookTitleStrToURL, bookFilter } = require("../../utils/apiHelpers");
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
    // TODO: remove this in production.  code used to measure performance of function
    const startTime = new Date().getTime();

    const bookTitle = "the holy bible";
    const {regex, charLimit} = bookFilter(bookTitle)
    console.log("regex: ", regex)
    console.log("charLimit: ", charLimit)
    const searchTitle = bookTitleStrToURL(bookTitle);
    // returns an array of books that match the searched title
    const titleData = await fetch(
      `https://openlibrary.org/search.json?title=${searchTitle}`
    );
    const titleRes = await titleData.json();
    
    // limit docs.length to 5
    titleRes.docs.splice(5, Infinity)
    
    // find an index of docs arr that has an isbn arr
    let i = 0
    let isbnArr;
    // skip docs that don't have an isbn property, break loop when isbnArr gets defined
    while (i < titleRes.docs.length) {
      if (!titleRes.docs[i].isbn) {
        i++
        continue
      } 
      isbnArr = titleRes.docs[i].isbn
      break
      // TODO: add error handling for if no ISBN array is found
    }
    // const isbnArr = titleRes.docs[2].isbn;

    // removes all indexes after 10 - eliminates edge case where page would hang due to iterating through hundreds of array indexes
    isbnArr.splice(10, Infinity);

    let j = 0;
    while (j < isbnArr.length) {
      const bookData = await fetch(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${isbnArr[i]}&format=json&jscmd=data`
      );
      const bookRes = await bookData.json();

      // skips empty objects
      if (Object.keys(bookRes).length === 0) {
        j++
        continue
      }

      // dynamically creates object key to match what is returned by Open Library
      const isbn = Object.keys(bookRes);
      const searchParameter = bookRes[isbn].title.toLowerCase()
      // if (searchParameter.match(regex) && searchParameter.length <= charLimit) {
      if (searchParameter.match(regex)) {  
        const exec = regex.exec(searchParameter)
        console.log(searchParameter.length)
        console.log(exec)
        console.log("Matching Result: ", searchParameter)
        break
      }
      // IDEA 1: if user-provided title matches 'regex' and is <= 'charLimit', use that index

      // IDEA 2: bookTitle.split(' ') to get array of user-provided words.  If X% of arr index matches regex, then it passes and gets used

      // iterator if index did not match
      j++;
    }
    // return this all the way to front end and do nothing with DB if function gets this far
    if (j === isbnArr.length) {
      console.log("No book found by that title!");
    }

    // TODO: remove this in production.  code used to measure performance of function
    const endTime = new Date().getTime();
    console.log(`Runtime: ${(endTime/1000)-(startTime/1000)} seconds`)
    
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
