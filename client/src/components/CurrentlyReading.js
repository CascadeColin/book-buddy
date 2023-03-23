import React from 'react';
import { useQuery } from '@apollo/client';
import RatingModal, { BookRating } from './Rating.js';
import Modal from './Modal';

import '../assets/css/fonts.css';
const styles = {
    main: {
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
        top: '30px',
        left: '325px',
        color: 'white',
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
            <div 
            style={styles.main} 
            className='w-6/12 m-6'>
                    <h1 style={styles.title}>C u r r e n t l y - R e a d i n g</h1> 

                    {/* insert currentlyReadingCover */}
                    <img 
                    
                    />

                    <div style={styles.bookInfo}>
                        {/* insert title */}
                        <h2 style={styles.bookTitle}>Title</h2>
                        {/* insert author */}
                        <h2 style={styles.bookAuthor}>Author</h2>
                        {/* connect rating to save rating - also do an if statement, only show rating if it has been rated...if not show 'not rated yet' */}
                        <h2>My Rating:</h2>
                            <BookRating />
                    </div>

                    <div style={styles.button} className="space-x-4">
                         {/* automatically move this book to the 'already read' book shelf. Also, if they've finsihed, do we want to prompt them to choose their next book?*/}
                        <button type='button' className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            Finished!
                        </button>
                        {/* pop up the rating modal! */}
                        <button type='button' 
                        className="bg-vdarkPurple text-white hover:bg-medPurple font-bold uppercase text-md px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            <RatingModal />
                        </button>
                    </div>
            </div>
        </>
    )
}