import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

{/*will have to import the queries for reading goal number and reading goal date */}

// import '../assets/css/fonts.css';

// const styles = {
    // main: {
    //     backgroundColor: '#73557D',
    //     color: 'white',
    //     textAlign: 'center',
    //     fontSize: '1.5rem',
    //     fontFamily: 'Italiana',
    //     marginRight: '100px',
    //     marginBottom: '50px'
    // },
    // title: {
    //     fontFamily: 'Italianno',
    //     fontSize: '3rem',
    // },
    // bookNumber: {
    //     fontSize: '3rem',
    // },
    // bookDate: {
    //     fontSize: '2.5rem',
    // },
    // button: {
    //     fontFamily: 'Italianno',
    //     color: 'white',
    // }
// }

export default function ReadingGoal() {
    return(
        <>
            <div className='w-4/12 p-4 bg-darkPurple text-white text-center text-[1.5rem] mr-[100px] mb-[50px] font-italiana rounded'>
                <h1 className='text-[3rem] font-italianno'>Reading Goal:</h1>
                {/* this syntax will most likely need to be changed once the queries are made */}
                    <div>
                    {/* reading goal number query */}
                    <h2 className='text-[3rem]'>___ books</h2>
                    {/* reading goal date query */}
                    <h2 className='text-[2.5rem]'>by ___</h2>
                    </div>
                {/*on click, have the 'new reading goal' modal pop up*/}
                <button className='bg-vdarkPurple px-4 text-white font-italianno'>New Goal</button>
            </div>
        </>
    )
}
