import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import '../assets/css/fonts.css';
const styles = {
    main: {
        position: 'relative',
        top: '200px',
        fontFamily: 'Italiana',
        fontSize: '1.25rem'
    },
    title: {
        fontFamily: 'Italianno',
        fontSize: '3rem',
        textAlign: 'center',
    },
    button: {
        fontFamily: 'Italianno',
        fontSize: '1.5rem',
        position: 'relative',
        top: '70px',
        left: '325px'
    },
    bookInfo: {
        position: 'relative',
        left: '325px'
    },
    bookTitle: {
        fontSize: '2.5rem'
    },
    bookAuthor: {
        fontSize: '1.75rem',
    }
}


export default function CurrentlyReading() {
    return (
        <>
            <div style={styles.main} className='w-6/12 m-6'>
                    <h1 style={styles.title}>C u r r e n t l y - R e a d i n g</h1> 

                    {/* insert currentlyReadingCover */}
                    <img />

                    <div style={styles.bookInfo}>
                        {/* insert title */}
                        <h2 style={styles.bookTitle}>Title</h2>
                        {/* insert author */}
                        <h2 style={styles.bookAuthor}>Author</h2>
                        {/* insert given rating or comment(?) */}
                        <h2>Ratings/Comments</h2>
                    </div>

                    <div style={styles.button} className="space-x-4">
                         {/* automatically move this book to the 'already read' book shelf. Also, if they've finsihed, do we want to prompt them to choose their next book?*/}
                        <button>Finished!</button>
                        {/* pop up the rating modal! */}
                        <button>Rate Me</button>
                    </div>
            </div>
        </>
    )
}