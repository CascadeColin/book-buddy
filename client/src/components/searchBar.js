import React, { useState, useEffect } from "react";

import Auth from "../utils/auth";

const SearchForBooks = () => {
  // TODO: URLs are for development only.  will need to figure out the proper URL paths for Heroku
  const newBookURL = "http://localhost:3001/api/books/newbook";
  const getAllBooksURL = "http://localhost:3001/api/books/allbooks";

  // returned books array from db
  const [searchBooks, setSearchBooks] = useState([]);
  // variable for performing a search
  const [searchInput, setSearchInput] = useState("");

  // pulls all user's books from the DB on page re-render.
  // putting `searchInput` in the dependency array forces a re-render when that variable's state changes
  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(getAllBooksURL);
        const data = await res.json();
        // console.log(`What is useEffect returning?\n`, data);

        // TODO: add a variable that can cancel state change - race condition can happen if state is changed during the fetch req - source: https://devtrium.com/posts/async-functions-useeffect
        setSearchBooks(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBooks();
  }, [searchInput]);

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // if nothing is entered, return without doing anything
    if (!searchInput) {
      return;
    }
    try {
      await fetch(newBookURL, {
        method: "POST",
        body: searchInput.toLowerCase().trim(),
        headers: { "Content-Type": "text/plain" },
      });
      setSearchInput("");
    } catch (err) {
      console.log(err);
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
        <div>
          <h1><br />MY BOOKS</h1>
          {searchBooks.map(book => {
            return (
              <li key={book._id}>
                <img src={book.bookCover} alt={`Book Cover for ${book.title}`} />
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                {/* I hardcoded the description 'type' into addDesc() on the server side - no need to add it here */}
                <p>{book.desc}</p>
                {/* apparently you can convert a boolean to a string using toString() - was a total guess lol */}
                <p>Have I read it? {book.isRead.toString()}</p>
                <p>Am I reading it now? {book.isReading.toString()}</p>
                <p>Will I read it in the future? {book.toRead.toString()}</p>
                <p>Username: {book.createdBy}</p>
                <ul>
                  {/* renders a list of all comments in bookComment array */}
                  {book.bookComment.map(comments => {
                    return (
                      <li>{comments}</li>
                    )
                  })}
                </ul>
              </li>
            )
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
