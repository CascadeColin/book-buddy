import React from 'react';
import Bob from './Images';
import AddBooks from './AddBooks';


import '../assets/css/fonts.css';
import '../assets/css/nav.css';
const styles = {
    nav: {
        backgroundColor: '#E4CFBC',
        marginBottom: '-20px',
    },
    fontPrint: {
        fontFamily: 'italiana',
        fontSize: '2rem',
    },
    fontCursive: {
        fontFamily: 'Italianno'
    },
    tab: {
        fontFamily: 'Italianno',
        fontSize: '2.5rem',
        position: 'relative',
        top: '-19px',
        left: '8px',
    },
}

// {/*Add Login authentication...function showNav() if(Auth.loggedin)*/}
export default function Nav(){
    return(
        <>
            <nav style={styles.nav}>
                <div className="headerWithBob">
                    <Bob />
                    <div className="Header">
                        <h1 style={styles.fontPrint}>B o o k</h1>
                        <h2 style={styles.tab}>Buddy</h2>
                    </div>
                
                <ul className="navOptions">
                    <li>
                        {/*my books page - add routes by Claire to this*/}
                        <a href="">
                            My Books
                        </a>
                    </li>
                    <li>
                        {/*add books modal*/}
                        {/* <AddBooks /> */}
                    </li>
                    <li>
                        {/*logout*/}
                        Logout
                    </li>
                </ul>
                </div>
            </nav>
        </>
    );
}