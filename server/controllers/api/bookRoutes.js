const router = require("express").Router();
// package that allows for fetch to be used in Node
const fetch = require("node-fetch");
const { bookTitleStrToURL, regexGen, addDesc } = require("../../utils/apiHelpers");
const { Book } = require('../../models/')

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

router.get("/allbooks", async (req,res) => {
  try {
    const findAllBooks = await Book.find()
    res.status(200).json(findAllBooks)
  } catch(err) {
    console.log(err)
  }
})

// NOTE: not intended for production at the moment.  Just an easy way to clear the books table.  Use this route in Insomia
router.delete("/deleteallbooks", async (req,res) => {
  try {
    const deleteBooks = await Book.deleteMany({})
    res.status(200).json({message: "all books deleted!"})
  } catch (err) {
    console.log(err)
  }
})

router.post("/newbook", async (req,res) => {
  try {
    const bookTitle = req.body;
    const {regex} = regexGen(bookTitle)
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

      // throws out bad entries and iterates to next index - all ISBNs are between 10 and 13 chars
      if (isbnArr[i].length < 10 || isbnArr[i].length > 13) {
        i++
        continue
      }

      // dynamically creates object key to match what is returned by Open Library
      const dynamicISBN = Object.keys(bookRes);
      const search = bookRes[dynamicISBN].title.toLowerCase()
      // TEST: seeing how addDesc() holds up
      // console.log("Book Desc Test: ", addDesc(bookRes[dynamicISBN]))
      
      // if it passes regex check, create a new Book
      if (search.match(regex)) {
        const weHaveAWinner = bookRes[dynamicISBN]
        const dataStoreObj = {
          createdBy: "currentUser TODO: update possible",
          title: weHaveAWinner.title,
          author: weHaveAWinner.authors[0].name,
          desc: addDesc(weHaveAWinner),
          bookCover: weHaveAWinner.cover.large,
          isbn: isbnArr[i],
          isRead: false,
          toRead: true,
          isReading: false,
          bookRating: 0,
          bookComment: []
        }
        const newBook = await Book.create(dataStoreObj)

        // send status back to front end
        if (newBook) {
          console.log("Book created successfully!")
          res.status(200).json(JSON.stringify("Book created successfully!"))
        }

        // ends the loop
        break
      }

      // iterator if index did not match
      i++;
    }

    if (i === isbnArr.length) {
      console.log("No book found by that title!");
      res.status(404)
    }
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;
