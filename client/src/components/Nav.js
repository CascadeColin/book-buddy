import Bob from './BobImages';

import '../assets/css/fonts.css';

const styles = {
    nav: {
        backgroundColor: '#E4CFBC'
    },
    fontPrint: {
        fontFamily: 'Italiana'
    },
    fontCursive: {
        fontFamily: 'Italianno'
    }
}

{/*Add Login authentication...function showNav() if(Auth.loggedin)*/}
export default function Nav(){
    return(
        <>
            <nav style={styles.nav}>
                <div>
                    <Bob />
                    <heading>
                        <h1 style={styles.fontPrint}>Book</h1>
                        <h2 style={styles.fontCursive}>Buddy</h2>
                    </heading>
                </div>
                <ul>
                    <li>
                        {/*my books page*/}
                        <a href="">
                        My Books
                        </a>
                    </li>
                    <li>
                        {/*add books modal*/}
                        Add Books
                    </li>
                    <li>
                        {/*logout*/}
                        Logout
                    </li>
                </ul>
            </nav>
        </>
    );
}