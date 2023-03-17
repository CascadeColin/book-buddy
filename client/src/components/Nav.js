import React from 'react';
import Bob from './Images';
import AddBooks from './AddBooks';


import '../assets/css/fonts.css';
import '../assets/css/nav.css';
const styles = {
    nav: {
        backgroundColor: '#E4CFBC'
    },
    fontPrint: {
        fontFamily: 'italiana'
    },
    fontCursive: {
        fontFamily: 'Italianno'
    },
    tab: {
        textIndent: '40px',
        fontFamily: 'Italianno'
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
                        <h1 style={styles.fontPrint}>Book</h1>
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