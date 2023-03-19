import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bob from './Images';
import AddBooks from './AddBooks';
import { Link } from 'react-router-dom';


import '../assets/css/fonts.css';
import '../assets/css/nav.css';
const styles = {
    nav: {
        backgroundColor: '#E4CFBC',
        marginBottom: '-20px',
        fontFamily: 'Italiana',
    },
    fontCursive: {
        fontFamily: 'Italianno',
        fontSize: '1.20rem',
    },
    tab: {
        fontFamily: 'Italianno',
        fontSize: '2.5rem',
        position: 'relative',
        top: '-19px',
        left: '8px',
    },
    main: {
        fontSize: '2rem',
    }
}

// {/*Add Login authentication...function showNav() if(Auth.loggedin)*/}
export default function Nav(){
    return(
        <>
            <nav style={styles.nav} className="mx-auto max-w-full">
                <div className="headerWithBob display:flex">
                    <Link to="/">
                        <Bob />
                    </Link>
                    <div className="Header sm:flex-shrink-0">
                        <h1 style={styles.main}>B o o k</h1>
                        <h2 style={styles.tab}>Buddy</h2>
                    </div>

                    <ul className="navOptions md:flex-shrink-0 space-x-3">
                        <li className='flex flex-row'>
                            {/*my books page - add routes by Claire to this*/}
                            <Link to="/mybooks">
                                <h1 style={styles.fontCursive}>My</h1>
                                Books
                            </Link>
                        </li>
                        <li>
                            {/*add books modal*/}
                            {/* <AddBooks /> */}
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