import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Bookshelf from "./../components/Bookshelf";
// query for all books here
// import { SAVE_BOOK } from '../utils/mutations';
import { Plant } from "./../components/Images";
const SearchBooks = () => {
  return (
    <div>
      <p>testing</p>
      <Plant />
      <Bookshelf></Bookshelf>
    </div>
  );
};

export default SearchBooks;
