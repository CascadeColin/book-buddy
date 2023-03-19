import React from 'react';
import ReadingGoal from '../components/ReadingGoal';
import CurrentlyReading from '../components/CurrentlyReading';
import ProfBookShelf from '../components/ProfBookShelf'
import { Plant } from '../components/Images';

// import '../assets/css/fonts.css';

export default function Profile() {
    return (
        <>
            <div className='max-h-screen bg-body'>
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