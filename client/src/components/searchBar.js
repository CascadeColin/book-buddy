import React, { useState, useEffect } from "react";

import Auth from "../utils/auth";

// these instances will need to match our API
// import { saveBook, searchApiBooks } from '';
// import { saveBooks, getSavedBooks } from '';

// TODO: set up fetch requests with internal Express API

const SearchForBooks = () => {
  // NEED TO MATCH OUR API

  // returned books array from db
  const [searchBooks, setSearchBooks] = useState([]);
  // variable for performing a search
  const [searchInput, setSearchInput] = useState("");

  // const [savedBooks, setSavedBooks] = useState(getSavedBook());
  const [savedBooks, setSavedBooks] = useState("placeholder");

  // useEffect(() => {
  //   return () => saveBook(savedBooks);
  // }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // if nothing is entered, return without doing anything
    if (!searchInput) {
      return;
    }

    // TODO: URLs are for development only.  will need to figure out the proper URL paths for Heroku
    const newBookURL = "http://localhost:3001/api/books/newbook";
    const getAllBooksURL = "http://localhost:3001/api/books/allbooks";
    try {
      console.log(searchInput)
      const res = await fetch(newBookURL, {
        method: "POST",
        body: searchInput.toLowerCase().trim(),
        headers: { "Content-Type": "text/plain" },
      });

      const data = await res;

      // if a book is found
      // FIXME: render the page with all books from db
      if (data.status === 200) {
        //TODO: update array that renders all book objects
        const bookData = fetch(getAllBooksURL, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        // setSearchBooks to refresh array with new book entry
        setSearchBooks(bookData);
        console.log(`book arr: ${searchBooks}`)
      } else {
        // TODO: decide how to handle bad requests
        // We have discussed manually entering books.  We can render a conditional error message.  For now, setting it to do nothing.
        return;
      }
      // clear the searchbox
      setSearchInput("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveBook = async (bookId) => {
    // const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
    const bookToSave = "temporary";

    //   we need our Auth logic
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveBook(bookToSave, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      setSavedBooks([...savedBooks, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-white">
        <div>
          <h1>Search for Books</h1>
          <form onSubmit={handleFormSubmit}>
            <input
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
        <div>
          <p>This is where Book array will be mapped</p>
          {searchBooks.map((book) => {
              return (
                <div key={book.bookId} border='dark'>
                  {book.image ? (
                    <img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                  ) : null}
                  <div>
                    <h1>{book.title}</h1>
                    <p className='small'>Authors: {book.authors}</p>
                    {Auth.loggedIn() && (
                      <button
                        disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveBook(book.bookId)}>
                        {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                          ? 'This book has already been saved!'
                          : 'Save this Book!'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SearchForBooks;
