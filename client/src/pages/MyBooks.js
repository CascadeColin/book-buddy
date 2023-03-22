import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bookshelf from './../components/Bookshelf';
import Bookshelfplant from '../components/Bookshelfplant';
import Bookshelfdata from '../components/Bookshelfdata';
import { MY_BOOKS } from '../utils/queries';
// query for all books here
// import { SAVE_BOOK } from '../utils/mutations';
import {Plant} from './../components/Images';
const SearchBooks = () => {
  document.body.style.backgroundColor="#FCF3EB"
  const { loading, error, data } = useQuery(MY_BOOKS);
  // const bookData = data?.me.Books || []
  const bookData = [
    {
            title: 'mybook',
            cover: 'https://covers.openlibrary.org/b/id/8653332-L.jpg',
            desc: 'here is the description',
            isRead: true,
            hasRead: false,
            toRead: true
        },
         {
            title: 'mybook2',
            cover: 'https://covers.openlibrary.org/b/id/8653332-L.jpg',
            desc: 'here is the 2 description',
            isRead: false,
            hasRead: true,
            toRead: true
        }

]
  console.log(bookData, "mybooks")
const shelf1 = "To Read"
const shelf2 = "Currently Reading"
const shelf3 = "Want To Read"
const styles = {

  bgColor: {
     backgroundColor: '#FCF3EB',
  }


}

  return (
<div style = {styles.bgColor}>
  <div m-0>
    <div class = "w-32 m-0">
    {/* <Plant /> */}
    </div>
    <Bookshelfplant bookData = {bookData} shelfname={shelf1} />
    <Bookshelfdata bookData = {bookData} shelfname ={shelf2}/>
    <Bookshelfdata bookData = {bookData} shelfname ={shelf3} />
  </div>
</div>

);
};

export default SearchBooks;