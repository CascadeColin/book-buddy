import Nav from '../components/Nav';

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

            <nav>
                <Nav />
            </nav>
            <body>
                {/*Book Shelf with randomized saved books*/}

                {/*Currently reading section, with book cover, title, author, rating button, finished button*/}
                <CurrentlyReading />

                {/*Reading goal modal*/}
                <ReadingGoal />
            </body>

            </div>
        </>
    )
}