import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bookshelf from './../components/Bookshelf';
// query for all books here
// import { SAVE_BOOK } from '../utils/mutations';
import {Plant} from './../components/Images';
const SearchBooks = () => {



  return (
<div>
  <div m-0>
    <div class = "w-32 m-0">
    {/* <Plant /> */}
    </div>
    <Bookshelf></Bookshelf>
  </div>
</div>

);
};

export default SearchBooks;