import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

// import '../assets/css/fonts.css';
// const styles = {
    // main: {
        // position: 'relative',
        // top: '225px',
        // fontFamily: 'Italiana',
        // fontSize: '1.25rem'
    // },
    // title: {
        // fontFamily: 'Italianno',
        // fontSize: '3rem',
        // textAlign: 'center',
    // },
    // button: {
        // fontFamily: 'Italianno',
        // fontSize: '1.5rem',
        // position: 'relative',
        // top: '70px',
        // left: '325px',
        // color: 'white',
    // },
    // bookInfo: {
    //     position: 'relative',
    //     left: '325px'
    // },
    // bookTitle: {
    //     fontSize: '2.5rem'
    // },
    // bookAuthor: {
    //     fontSize: '1.75rem',
    // }
// }


export default function CurrentlyReading() {
    return (
        <>
            <div className='w-6/12 m-6 relative top-[225px] text-[1.25rem] font-italiana'>
                    <h1 className='text-[3rem] text-center font-italianno'>C u r r e n t l y - R e a d i n g</h1> 

                    {/* insert currentlyReadingCover */}
                    <img />

                    <div className='relative left-[325px]'>
                        {/* insert title */}
                        <h2 className='text-[2.5rem]'>Title</h2>
                        {/* insert author */}
                        <h2 className='text-[1.75rem]'>Author</h2>
                        {/* insert given rating or comment(?) */}
                        <h2>Ratings/Comments</h2>
                    </div>

                    <div className="space-x-4 text-[1.5rem] relative top-[70px] left-[325px] text-white font-italianno">
                         {/* automatically move this book to the 'already read' book shelf. Also, if they've finsihed, do we want to prompt them to choose their next book?*/}
                        <button className='bg-vdarkPurple px-3'>Finished!</button>
                        {/* pop up the rating modal! */}
                        <button className='bg-vdarkPurple px-3'>Rate Me</button>
                    </div>
            </div>
        </>
    )
}