import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bookshelfplant from './Bookshelfplant';

const mainShelf = 'My Books';
const styles = {
    bookShelf: {
        position: 'relative',
        top: '50px',
    }
}

export default function ProfBookShelf(){
    
    return(
        <>
            <div 
            style={styles.bookShelf}
            className='m-4'>
                <Bookshelfplant shelfname={mainShelf}/>
            </div>
        </>
    )
}