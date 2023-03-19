import React from 'react';
import ReadingGoal from '../components/ReadingGoal';
import CurrentlyReading from '../components/CurrentlyReading';
import ProfBookShelf from '../components/ProfBookShelf'
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
            <div style={styles.body} className='max-h-screen'>
            <div>
                <div>
                    {/*Book Shelf with randomized saved books*/}
                    <ProfBookShelf />
                </div>
                <div>
                    {/*Currently reading section, with book cover, title, author, rating button, finished button*/}
                    <CurrentlyReading />
                </div>
                <div className='flex justify-end'>
                    {/*Reading goal modal*/}
                    <ReadingGoal />
                </div>
            </div>

            </div>
        </>
    )
}