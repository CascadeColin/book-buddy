import React from 'react';

import '../assets/css/fonts.css';
const styles = {
    fontCursive: {
        fontFamily: 'Italianno',
    },
    fontPrint: {
        fontFamily: 'Italiana',
    }
}


export default function CurrentlyReading() {
    return (
        <>
            <div>
                    <h1 style={styles.fontCursive}>C u r r e n t l y - R e a d i n g</h1> 

                    {/* insert currentlyReadingCover */}
                    <img />

                    <div style={styles.fontPrint}>
                        {/* insert title */}
                        <h2>Title</h2>
                        {/* insert author */}
                        <h2>Author</h2>
                        {/* insert given rating or comment(?) */}
                        <h2>Ratings/Comments</h2>
                    </div>

                    <div style={styles.fontCursive}>
                         {/* automatically move this book to the 'already read' book shelf. Also, if they've finsihed, do we want to prompt them to choose their next book?*/}
                        <button>Finished!</button>
                        {/* pop up the rating modal! */}
                        <button>Rate Me</button>
                    </div>
            </div>
        </>
    )
}