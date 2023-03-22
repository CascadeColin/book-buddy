import React from 'react';
import BasicModal from '../components/Modal';
import {useState} from 'react';
import SearchForBooks from '../components/searchBar';

import '../assets/css/fonts.css';
const styles = {
  main: {
    fontFamily: 'Italiana',
  }
}

export default function AddBooks() {
  return(
    <>
      <div style={styles.main} className='bg-vdarkPurple'>
          <SearchForBooks />
      </div>
    </>
  )
}