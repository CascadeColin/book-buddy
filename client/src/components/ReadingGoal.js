import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Modal from './Modal';

{/*will have to import the queries for reading goal number and reading goal date */}

import '../assets/css/fonts.css';
const styles = {
    main: {
        backgroundColor: '#73557D',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontFamily: 'Italiana',
        marginRight: '100px',
        marginBottom: '50px'
    },
    title: {
        fontFamily: 'Italianno',
        fontSize: '3rem',
    },
    bookNumber: {
        fontSize: '3rem',
    },
    bookDate: {
        fontSize: '2.5rem',
    },
    button: {
        fontFamily: 'Italianno',
        color: 'white',
    }
}

export default function ReadingGoal() {
    const goal = 'New Goal'
    return(
        <>
            <div style={styles.main} className='w-4/12 p-4'>
                <h1 style={styles.title}>Reading Goal:</h1>
                {/* this syntax will most likely need to be changed once the queries are made */}
                    <div>
                    {/* reading goal number query */}
                    <h2 style={styles.bookNumber}>___ books</h2>
                    {/* reading goal date query */}
                    <h2 style={styles.bookDate}>by ___</h2>
                    </div>
                {/*on click, have the 'new reading goal' modal pop up*/}
                <button style={styles.button} className='bg-vdarkPurple px-4'>
                    <Modal buttonName={goal}/>
                </button>
            </div>
        </>
    )
}
