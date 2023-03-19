
import React from 'react';


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
    },
    greenShelf: {
        backgroundColor: '#4F5939'
    }
}

export default function Bookshelf() {
    return(
        <>
            <div>
                <p style = {styles.greenShelf}>To Be Read</p>
            </div>
        </>
    )
}
