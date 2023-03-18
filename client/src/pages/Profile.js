import React from 'react';
import ReadingGoal from '../components/ReadingGoal';
import CurrentlyReading from '../components/CurrentlyReading';
import { Plant } from '../components/Images';

import '../assets/css/fonts.css';

const styles = {
    body: {
        backgroundColor: '#FCF3EB',
    }
}

export default function Profile() {
    return (
        <>
            <div style={styles.body}>
            <div>
                {/*Book Shelf with randomized saved books*/}
                {/* <ProfBookShelf /> */}
                
                {/*Currently reading section, with book cover, title, author, rating button, finished button*/}
                <CurrentlyReading />

                {/*Reading goal modal*/}
                <ReadingGoal />
            </div>

            </div>
        </>
    )
}