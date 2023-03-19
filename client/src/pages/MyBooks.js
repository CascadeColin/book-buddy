import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bookshelf from './../components/Bookshelf';
import Bookshelfplant from '../components/Bookshelfplant';
// query for all books here
// import { SAVE_BOOK } from '../utils/mutations';
import {Plant} from './../components/Images';
const SearchBooks = () => {
const shelf1 = "To Read"
const shelf2 = "Currently Reading"
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
    <Bookshelfplant shelfname={shelf1}/>
    <Bookshelf shelfname ={shelf2}/>
  </div>
</div>

);
};

export default SearchBooks;