import React from 'react';
import ReadingGoal from '../components/ReadingGoal';
import CurrentlyReading from '../components/CurrentlyReading';
import ProfBookShelf from '../components/ProfBookShelf';
import { Plant } from '../components/Images';

import '../assets/css/fonts.css';

const styles = {
    body: {
        backgroundColor: '#FCF3EB',
    },
}

export default function Profile() {
    document.body.style.backgroundColor="#FCF3EB"
    return (
        <>
            <div style={styles.body} className='max-h-screen'>
            <div>
                <div>
                    {/*Book Shelf with randomized saved books*/}
                    <ProfBookShelf />
                </div>
                <div className='flex flex-row justify-around items-center mt-12'>
                    {/*Currently reading section, with book cover, title, author, rating button, finished button*/}
                    <CurrentlyReading />
                  
                    {/*Reading goal modal*/}
                    <ReadingGoal />
                </div>
            </div>

            </div>
        </>
    )

}