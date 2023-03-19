import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bob from './Images';
import AddBooks from './AddBooks';
import { Link } from 'react-router-dom';


// import '../assets/css/fonts.css';
// const styles = {
    // nav: {
    //     backgroundColor: '#E4CFBC',
    //     marginBottom: '-20px',
    //     fontFamily: 'Italiana',
    //     fontSize: '1.25rem'
    // },
    // fontCursive: {
    //     fontFamily: 'Italianno',
    //     fontSize: '1.5rem',
    //     position: 'relative',
    //     top: '10px',
    //     right: '8px'
    // },
    // tab: {
    //     fontFamily: 'Italianno',
    //     fontSize: '2.5rem',
    //     position: 'relative',
    //     top: '-19px',
    //     left: '8px',
    // },
    // main: {
    //     fontSize: '2rem',
    // }
// }

// {/*Add Login authentication...function showNav() if(Auth.loggedin)*/}
export default function Nav(){
    return(
        <>
            <nav className="mx-auto max-w-full bg-navbar mb-[-20px] text-[1.25rem] font-italiana">
                <div className="flex flex-row">
                    <Link to="/">
                        <Bob />
                    </Link>
                    <div className="flex flex-col items-center text-[1.5rem] sm:flex-shrink-0">
                        <h1 className='text-[2rem]'>B o o k</h1>
                        <h2 className='text-[2.5rem] relative top-[-19px] left-[8px] font-italianno'>Buddy</h2>
                    </div>

                    <ul className="flex flex-row justify-end items-center pl-[60%] md:flex-shrink-0 space-x-20">
                        <li>
                            {/*my books page - add routes by Claire to this*/}
                            <Link to="/mybooks">
                                <h1 className='text-[1.5rem] relative top-[10px] right-2 font-italianno'>
                                My
                                </h1>
                                Books
                            </Link>
                        </li>
                        <li>
                            {/*add books modal*/}
                            <Link>
                                <h1 className='text-[1.5rem] relative top-[10px] right-2 font-italianno'>
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