import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bob from './Images';
import AddBooks from './AddBooks';
import { Link } from 'react-router-dom';


import '../assets/css/fonts.css';

const styles = {
    nav: {
        backgroundColor: '#E4CFBC',
        marginBottom: '-20px',
        fontFamily: 'Italiana',
        fontSize: '1.25rem'
    },
    fontCursive: {
        fontFamily: 'Italianno',
        fontSize: '1.5rem',
        position: 'relative',
        top: '10px',
        right: '8px'
    },
    tab: {
        fontFamily: 'Italianno',
        fontSize: '2.5rem',
        position: 'relative',
        top: '-19px',
        left: '8px',
    },
    navTabs: {
        paddingLeft: '55rem',
    }
}

// {/*Add Login authentication...function showNav() if(Auth.loggedin)*/}
export default function Nav(){
    return(
        <>
            <nav style={styles.nav} className="mx-auto max-w-full">
                <div className="flex flex-row">
                    <Link to="/">
                        <Bob />
                    </Link>
                    <div className="flex flex-col items-center sm:flex-shrink-0 relative top-3">
                        <h1 className='text-3xl'>B o o k</h1>
                        <h2 style={styles.tab}>Buddy</h2>
                    </div>

                    <ul style={styles.navTabs}className="flex flex-row justify-end items-center md:flex-shrink-0 space-x-20">
                        <li>
                            {/*my books page - add routes by Claire to this*/}
                            <Link to="/mybooks">
                                <h1 style={styles.fontCursive}>
                                My
                                </h1>
                                Books
                            </Link>
                        </li>
                        <li>
                            {/*add books modal*/}
                            <Link>
                                <h1 style={styles.fontCursive}>
                                Add
                                </h1>
                                Books
                            </Link>
                        </li>
                        <li>
                            {/*logout*/}
                            <Link to='/login'>
                                Logout
                            </Link>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </>
    );
}