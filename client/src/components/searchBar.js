import React, {useState} from 'react';

import Auth from '../utils/auth';

// these instances will need to match our API 
import { saveBook, searchApiBooks } from '';
import { saveBooks, getSavedBooks } from '';


const SearchForBooks = () => {
    // NEED TO MATCH OUR API 
    const [searchBooks, setSearchBooks] = useState([]);

    const [searchInput, setSearchInput] = useState('');
  
    
    const [savedBooks, setSavedBooks] = useState(getSavedBook());
  
   
    useEffect(() => {
      return () => saveBook(savedBooks);
    });
  
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      if (!searchInput) {
        return false;
      }
  
      try {
        const response = await searchApiBooks(searchInput);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { items } = await response.json();
  
        const bookData = items.map((book) => ({
          bookId: book.id,
          authors: book.volumeInfo.authors || ['No author to display'],
          title: book.volumeInfo.title,
          image: book.volumeInfo.imageLinks?.thumbnail || '',
        }));
  
        setSearchBooks(bookData);
        setSearchInput('');
      } catch (err) {
        console.error(err);
      }
    };
  
    
    const handleSaveBook = async (bookId) => {
      
      const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
  
    //   we need our Auth logic
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        const response = await saveBook(bookToSave, token);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        
        setSavedBooks([...savedBooks, bookToSave.bookId]);
      } catch (err) {
        console.error(err);
      }
    };
  
    return (
      <>
        <div className='text-light bg-dark'>
          <div>
            <h1>Search for Books</h1>
            <div onSubmit={handleFormSubmit}>
              <div>
                <div xs={12} md={8}>
                  <div
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    size='lg'
                    placeholder='What Book Awaits You?'
                  />
                </div>
                <button xs={12} md={4}>
                  <div type='submit' variant='success' size='lg'>
                    Submit
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <h2>
            {searchedBooks.length
              ? `Viewing ${searchedBooks.length} results:`
              : 'Search for a book to begin'}
          </h2>
          <div>
            {searchedBooks.map((book) => {
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
  