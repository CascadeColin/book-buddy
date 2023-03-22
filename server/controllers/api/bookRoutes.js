const router = require("express").Router();
// package that allows for fetch to be used in Node
const { Book, User } = require("../../models/");

// NOTE: not intended for production at the moment.  Just an easy way to clear all books from the DB during development.  Use this route in Insomnia.
router.delete("/deleteallbooks", async (req, res) => {
  try {
    await Book.deleteMany({});
    // update any user that has any string as a username, set books to empty array
    await User.updateMany({ userName: /[\s\S]/ }, { books: [] });
    res.status(200).json({ message: "all books deleted!" });
  } catch (err) {
    console.log(err);
  }
});

// NOTE:  not in use, keeping as reference until GQL mutation is confirmed 100% working
// router.post("/newbook", async (req,res) => {
//   try {
//     const bookTitle = req.body;
//     const {regex} = regexGen(bookTitle)
//     const searchTitle = bookTitleStrToURL(bookTitle);
//     // returns an array of books that match the searched title
//     const titleData = await fetch(
//       `https://openlibrary.org/search.json?title=${searchTitle}`
//     );
//     const titleRes = await titleData.json();
//     const isbnArr = titleRes.docs[0].isbn;

//     // removes all indexes after 20 - eliminates edge case where page would hang due to iterating through hundreds of array indexes
//     isbnArr.splice(20, Infinity);

//     let i = 0;
//     while (i < isbnArr.length) {
//       const bookData = await fetch(
//         `https://openlibrary.org/api/books?bibkeys=ISBN:${isbnArr[i]}&format=json&jscmd=data`
//       );
//       const bookRes = await bookData.json();

//       // throws out bad entries and iterates to next index - all ISBNs are between 10 and 13 chars
//       if (isbnArr[i].length < 10 || isbnArr[i].length > 13) {
//         i++
//         continue
//       }

//       // dynamically creates object key to match what is returned by Open Library
//       const dynamicISBN = Object.keys(bookRes);
//       const search = bookRes[dynamicISBN].title.toLowerCase()
//       // TEST: seeing how addDesc() holds up
//       // console.log("Book Desc Test: ", addDesc(bookRes[dynamicISBN]))

//       // if it passes regex check, create a new Book
//       if (search.match(regex)) {
//         const weHaveAWinner = bookRes[dynamicISBN]
//         const dataStoreObj = {
//           createdBy: "currentUser TODO: update possible",
//           title: weHaveAWinner.title,
//           author: weHaveAWinner.authors[0].name,
//           desc: addDesc(weHaveAWinner),
//           bookCover: weHaveAWinner.cover.large,
//           isbn: isbnArr[i],
//           isRead: false,
//           toRead: true,
//           isReading: false,
//           bookRating: 0,
//           bookComment: []
//         }
//         const newBook = await Book.create(dataStoreObj)

//         // send status back to front end
//         if (newBook) {
//           console.log("Book created successfully!")
//           res.status(200).json(JSON.stringify("Book created successfully!"))
//         }

//         // ends the loop
//         break
//       }

//       // iterator if index did not match
//       i++;
//     }

//     if (i === isbnArr.length) {
//       console.log("No book found by that title!");
//       res.status(404)
//     }
//   } catch (err) {
//     console.log(err);
//   }
// })

module.exports = router;
