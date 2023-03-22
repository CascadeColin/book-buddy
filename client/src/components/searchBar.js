import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../utils/mutations";
import Auth from "../utils/auth";
import { bookTitleStrToURL, regexGen, addDesc } from "../utils/helpers";

const SearchForBooks = () => {
  // TODO: URLs are for development only.  will need to figure out the proper URL paths for Heroku
  // const newBookURL = "http://localhost:3001/api/books/newbook";
  // const getAllBooksURL = "http://localhost:3001/api/books/allbooks";

  // returned books array from db
  const [searchBooks, setSearchBooks] = useState([]);
  // variable for performing a search
  const [searchInput, setSearchInput] = useState("");
  const [searchError, setSearchError] = useState('')

  // pulls all user's books from the DB on page re-render.
  // putting `searchInput` in the dependency array forces a re-render when that variable's state changes
  // useEffect(() => {
  // TODO:

  // async function fetchBooks() {
  //   try {
  //     const res = await fetch(getAllBooksURL);
  //     const data = await res.json();
  //     // console.log(`What is useEffect returning?\n`, data);

  //     // TODO: add a variable that can cancel state change - race condition can happen if state is changed during the fetch req - source: https://devtrium.com/posts/async-functions-useeffect
  //     setSearchBooks(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // fetchBooks();
  // }, [searchInput]);
  const [addBook, { error }] = useMutation(ADD_BOOK);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // if nothing is entered, return without doing anything
    if (!searchInput) {
      return;
    }
    try {
      const { regex } = regexGen(searchInput);
      const searchableTitle = bookTitleStrToURL(searchInput);
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${searchableTitle}`
      );
      const data = await res.json()
      const isbnArr = data.docs[0].isbn;
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
          i++;
          continue;
        }

        // dynamically creates object key to match what is returned by Open Library
        const dynamicISBN = Object.keys(bookRes);
        const search = bookRes[dynamicISBN].title.toLowerCase();

        // if it passes regex check, create a new Book
        if (search.match(regex)) {
          const weHaveAWinner = bookRes[dynamicISBN];
          const dataStoreObj = {
            title: weHaveAWinner.title,
            author: weHaveAWinner.authors[0].name,
            desc: addDesc(weHaveAWinner),
            bookCover: weHaveAWinner.cover.large,
            isbn: isbnArr[i],
            isRead: false,
            toRead: true,
            isReading: false,
            bookRating: 0,
          };
          
          const newestBook = await addBook({
            variables: dataStoreObj,
          });
          setSearchBooks([newestBook.data.addBook])
          // ends the loop
          break;
        }

        // iterator if index did not match
        i++;
      }
      setSearchInput("");
    } catch (err) {
      setSearchError('Error finding book - please try again later')
      setSearchInput('')
      console.log('api down')
    }
  };

  return (
    <>
      <div className="text-white">
        <div>
          <h1>Search for Books</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              className="text-black"
              type="text"
              size="lg"
              name="searchInput"
              value={searchInput}
              placeholder="What Book Awaits You?"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" variant="success" size="lg">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="text-white">
        <h2>
          {searchBooks.length
            ? `Viewing ${searchBooks.length} results:`
            : "Search for a book to begin"}
        </h2>
        <h3 className="text-red-500">
          {searchError ? searchError : ''}
        </h3>
        <div>
          <h1>
            <br />
            Your new book!
          </h1>
          {searchBooks.map((book) => {
            
            return (
              <li key={1}>
                <img
                  src={book.bookCover}
                  alt={`Book Cover for ${book.title}`} 
                /> 
                <p>Title: {book.title}</p> 
                <p>Author: {book.author}</p> 
                {/* I hardcoded the description 'type' into addDesc() on the server side - no need to add it here  */}
                <p>{book.desc}</p> 
                {/* apparently you can convert a boolean to a string using toString() - was a total guess lol  */}
                <p>Have I read it? {book.isRead.toString()}</p> 
                <p>Am I reading it now? {book.isReading.toString()}</p> 
                <p>Will I read it in the future? {book.toRead.toString()}</p> 
              </li> 
            ); 
          })} 

          {/* TODO: Keep this commented out block for now - reference for adding Auth back in */}
          {/* {searchBooks.map((book) => {
            return (
              <div key={book.bookId} border="dark">
                {book.image ? (
                  <img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <div>
                  <h1>{book.title}</h1>
                  <p className="small">Authors: {book.authors}</p>
                  {Auth.loggedIn() && (
                    <button
                      disabled={savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveBook(book.bookId)}
                    >
                      {savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )
                        ? "This book has already been saved!"
                        : "Save this Book!"}
                    </button>
                  )}
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default SearchForBooks;
