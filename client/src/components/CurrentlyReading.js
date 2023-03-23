import React from 'react';
import { useQuery } from '@apollo/client';
import RatingModal, { BookRating } from './Rating.js';
//import Modal from './Modal';
import { ME } from "../utils/queries";
//import Bookshelfplantdata from "./Bookshelfplantdata";
import Auth from "../utils/auth";
import { ProfileBob } from "./Images";

import '../assets/css/fonts.css';
const styles = {
  main: {
    fontFamily: "Italiana",
    fontSize: "1.25rem",
  },
  title: {
    fontFamily: "Italianno",
    fontSize: "3rem",
    textAlign: "center",
  },
  button: {
    fontFamily: "Italianno",
    fontSize: "1.5rem",
    position: "relative",
    top: "30px",
    left: "325px",
    color: "white",
  },
  bookInfo: {
    position: "relative",
    left: "325px",
  },
  bookTitle: {
    fontSize: "2.5rem",
  },
  bookAuthor: {
    fontSize: "1.75rem",
  },
  image: {
    maxWidth: "300px",
    maxHeight: "300px",
  },
};


export default function CurrentlyReading() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      console.log("false");
      return false;
    }
    const myUser = Auth.getProfile().data.userName;
    document.body.style.backgroundColor = "#FCF3EB";
    const { loading, error, data } = useQuery(ME, {
      variables: { userName: myUser },
    });
    console.log(data, "the data");
    const bookData = data?.me.books;

    if (!bookData) {
      console.log("nobooks");
      return false;
    }
    // this should take in all books and randomize them, the to read books are a placeholder right no
    const myBooks = bookData.filter((book) => book.isReading == true);

let x = 0;



if(myBooks[x]){
    return (
      <>
        <div style={styles.main} className="w-6/12 m-6">
          <div>
            <h1 style={styles.title}>C u r r e n t l y - R e a d i n g</h1>
          </div>
          <div className="flex flex-row items-center">
            <div  className="flex flex-col ">
              {/* insert currentlyReadingCover */}

              {myBooks[x] ? (
                <img
                  id="0"
                  class="cursor-pointer"
                  style={styles.image}
                  src={myBooks[x].bookCover}
                  alt={`The cover for ${myBooks[x].title}`}
                />
              ) : null}
            </div>
            <div className="flex flex-col">
              <div style={styles.bookInfo}>
                <h2 style={styles.bookTitle}>
                  {/* insert title */}
                  Title: {myBooks[x] ? myBooks[x].title : null}
                </h2>
                {/* insert author */}
                <h2 style={styles.bookAuthor}>
                  Author: {myBooks[x] ? myBooks[x].author : null}
                </h2>
                {/* connect rating to save rating - also do an if statement, only show rating if it has been rated...if not show 'not rated yet' */}
                <h2>My Rating:</h2>
                <BookRating />
              </div>
              <div style={styles.button} className="space-x-4">
                {/* automatically move this book to the 'already read' book shelf. Also, if they've finsihed, do we want to prompt them to choose their next book?*/}
                <button
                  type="button"
                  className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Finished!
                </button>
                {/* pop up the rating modal! */}
                <button
                  type="button"
                  className="bg-vdarkPurple text-white hover:bg-medPurple font-bold uppercase text-md px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  <RatingModal book={myBooks[x]}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}else{return (
  <div className="flex flex-col items-center ">
    <div className="flex  flex-row">
      <h2 style={styles.title}>
        Place a book on your currently reading shelf{" "}
      </h2>
    </div>
    <div>
      <h2 style={styles.title}>to display it here!</h2>
    </div>
    <div className="flex flex-row items-center">
      <div className="flex">
        <ProfileBob />
      </div>
    </div>
  </div>
);}
}