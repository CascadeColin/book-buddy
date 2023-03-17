import React from 'react';

{/*will have to import the queries for reading goal number and reading goal date */}

import '../assets/css/fonts.css';
const styles = {
    main: {
        backgroundColor: '#73557D',
    },
    fontCursive: {
        fontFamily: 'Italianno',
    },
    fontPrint: {
        fontFamily: 'Italiana',
    }
}

export default function ReadingGoal() {
    return(
        <>
            <div style={styles.main}>
                <h1 style={styles.fontCursive}>Reading Goal:</h1>
                {/* this syntax will most likely need to be changed once the queries are made */}
                    <div style={styles.fontPrint}>
                    {/* reading goal number query */}
                    <h2>___ books</h2>
                    {/* reading goal date query */}
                    <h2>by ___</h2>
                    </div>
                {/*on click, have the 'new reading goal' modal pop up*/}
                <button style={styles.fontCursive}>Update Your Reading Goal</button>
            </div>
        </>
    )
}
