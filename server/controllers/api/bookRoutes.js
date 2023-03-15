const router = require("express").Router();
// package that allows for fetch to be used in Node
const fetch = require("node-fetch");

// any routing related to fetching books will go here

/******  START PSEUDOCODE  ******/

/*   const searchBookByTitleFetchURL = "https://openlibrary.org/search.json?title=name+of+book" WHERE 'name+of+book' === a string that is formatted to replace " " or "_" with "+" to match what the API search needs. */
/*  RETURNS an object that contains all books that match that search.  for simplicity sake, pull index[0] and roll with it to get an MVP */
/*  we can add functionality to search by author as well  */
/*  reference:  https://openlibrary.org/dev/docs/api/search  */

/*  const bookCoverFetchURL = "https://covers.openlibrary.org/b/isbn/$value-$size.jpg" WHERE '$value' === the book's ISBN (required to be able to search) && $size === size of the image (S, M, or L).  We will probably always use "L".  */
/*  reference:  https://openlibrary.org/dev/docs/api/covers  */

/*  const bookDetailsFetchURL = "https://openlibrary.org/books/$ISBN.json" WHERE $ISBN === the book's ISBN (as fetched by searchBookByTitleFetchURL).
RETURNS an object that contains all of the data that we need, and more  */
/*  reference:  https://openlibrary.org/dev/docs/api/books  */


/* 
router.get("/book", async (req,res) {
    try {
        const bookTitle = req.body
        const searchTitle = helper function to convert "title of the book" to "title+of+the+book"
        const isbnArray = await fetch(`https://openlibrary.org/search.json?title=${searchTitle}`)
        // hardcode isbnArray[0] to be used - we can get fancy later
        const isbn = access isbnArray[0] object and get string value of ISBN
        const bookDetails = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
        *access 'bookDetails' and send the data to DB.  DB will store data, Apollo *will be used to connect DB to front-end to render data
    } catch (err) {
        console.error(err)
    }
})

*/