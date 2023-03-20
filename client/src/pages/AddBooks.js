import React from 'react';
import BasicModal from '../components/Modal';
import {useState} from 'react';
import SearchForBooks from '../components/searchBar';

export default function AddBooks() {
  return(
    <>
      <div className='bg-vdarkPurple'>
          <SearchForBooks />
      </div>
    </>
  )
}