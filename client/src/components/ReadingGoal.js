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
    const title = 'New Reading Goal:'
    const add = 'Add Goal'
    const modalInfo = () =>{
        return(
            <>
                <div>
                    <p>
                        How many books do you want to read?
                    </p>
                    <input
                        placeholder="#"
                        name="bookGoal"
                        type="bookGoal"
                        id="bookGoal"
                        onChange={handleChange}
                    />
                </div>
            </>
        )
    }
    return(
        <>
            <div style={styles.main} className='w-4/12 px-10 py-8 mt-12'>
                <h1 style={styles.title}>Reading Goal:</h1>
                {/* this syntax will most likely need to be changed once the queries are made */}
                    <div className='py-2 pb-2'>
                    {/* reading goal number query */}
                    <h2 style={styles.bookNumber}>___ books</h2>
                    {/* reading goal date query */}
                    <h2 style={styles.bookDate}>by ___</h2>
                    </div>
                {/*on click, have the 'new reading goal' modal pop up*/}
                <button style={styles.button} className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    <Modal 
                    buttonName={goal} 
                    modalTitle={title} 
                    modalFunction={add}
                    modalInformation={modalInfo}
                    />
                </button>
            </div>
        </>
    )
}
