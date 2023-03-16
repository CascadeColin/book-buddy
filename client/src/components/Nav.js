import Bob from './BobImages'

const styles = {
    nav: {
        backgroundColor: '#E4CFBC'
    }
}

export default function Nav(){
    return(
        <>
            <nav style={styles.nav}>
                <div>
                    <Bob />
                    <heading>
                        <h1>Book</h1>
                        <h2>Buddy</h2>
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