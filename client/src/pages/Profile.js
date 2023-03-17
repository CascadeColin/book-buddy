import Nav from '../components/Nav'


export default function Profile() {
    return (
        <>
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
        </>
    )
}