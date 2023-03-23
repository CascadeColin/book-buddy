import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bookshelf from './../components/Bookshelf';
import Bookshelfplantdata from '../components/Bookshelfplantdata';
import Bookshelfdata from '../components/Bookshelfdata';
import { ME } from '../utils/queries';
import getProfile from '../utils/auth';
import Auth from '../utils/auth';
// query for all books here
// import { SAVE_BOOK } from '../utils/mutations';
import {Plant} from './../components/Images';
const SearchBooks = () => {
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
  console.log(bookData, "data")
  console.log(error, "err")
  console.log(loading, "loading")
  // const bookData = data
//   [
//     {
//             title: 'mybook',
//             cover: 'https://covers.openlibrary.org/b/id/8653332-L.jpg',
//             desc: 'here is the description',
//             isRead: true,
//             hasRead: false,
//             toRead: true
//         },
//          {
//             title: 'mybook2',
//             cover: 'https://covers.openlibrary.org/b/id/8653332-L.jpg',
//             desc: 'here is the 2 description',
//             isRead: false,
//             hasRead: true,
//             toRead: true
//         }

// ]
// function toRead(value) {
//   // return value.toRead == 10;
// }
  console.log(bookData, "mybooks")

  if (!bookData) {
    console.log("nobooks")
    return false;
  }

  const toRead = bookData.filter(book => book.toRead == true)
  const isRead = bookData.filter(book => book.isRead == true)
  const isReading = bookData.filter(book => book.isReading == true)

const shelf1 = "Already Read"
const shelf2 = "Currently Reading"
const shelf3 = "Want To Read"
const styles = {

  bgColor: {
     backgroundColor: '#FCF3EB',
  }


}
if (loading) {
  return <h2>LOADING...</h2>;
}
if (error) {
  return <h2>error...</h2>;
}

  return (
<div style = {styles.bgColor}>
  <div m-0>
    <div class = "w-32 m-0">
    {/* <Plant /> */}
    </div>
    <Bookshelfplantdata bookData = {isRead} shelfname={shelf1} />
    <Bookshelfdata bookData = {isReading} shelfname ={shelf2}/>
    <Bookshelfdata bookData = {toRead} shelfname ={shelf3} />
  </div>
</div>

);
};

export default SearchBooks;