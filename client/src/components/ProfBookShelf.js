import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bookshelfplantdata from './Bookshelfplantdata';
import { ME } from '../utils/queries';
import getProfile from '../utils/auth';
import Auth from '../utils/auth';

const mainShelf = 'My Books';
const styles = {
    bookShelf: {
        position: 'relative',
        top: '10px',
    }
}

export default function ProfBookShelf(){
const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    console.log("false")
    return false;
  }
  const myUser = Auth.getProfile().data.userName
  document.body.style.backgroundColor="#FCF3EB"
  const { loading, error, data } = useQuery(ME
    , {
    variables: {userName: myUser }
  });
  console.log(data, "the data")
  const bookData = data?.me.books

    if (!bookData) {
        console.log("nobooks")
        return false;
      }
    // this should take in all books and randomize them, the to read books are a placeholder right no
    //just gonna show all books for now so that if one ends up on zero shelves on myBooks you can still access it
    //also keeps from have zero books here if toRead shelf is blank but still have other books
   // const myBooks = bookData.filter(book => book.toRead == true)

    return (
      <>
        <div style={styles.bookShelf} className="m-4">
          <Bookshelfplantdata bookData={bookData} shelfname={mainShelf} />
          {/* <Bookshelfplantdata bookData={myBooks} shelfname={mainShelf} /> */}
        </div>
      </>
    );
}