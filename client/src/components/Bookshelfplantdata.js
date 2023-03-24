import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { Plant } from "./Images";
import {
  UPDATE_TO_READ,
  UPDATE_IS_READING,
  UPDATE_IS_READ,
  REMOVE_BOOK,
} from "../utils/mutations";
import { useMutation } from "@apollo/client";

import "../assets/css/fonts.css";
const styles = {
  main: {
    backgroundColor: "#73557D",
  },
  fontCursive: {
    fontFamily: "Italianno",
  },
  fontPrint: {
    fontFamily: "Italiana",
  },
  greenShelf: {
    fontFamily: "Italiana",
    backgroundColor: "#4F5939",
  },
  purpleBook: {
    backgroundColor: "#7D7CBE",
    width: "4rem",
    marginTop: "12px",
    height: "6rem",
    alignSelf: "end",
    position: "relative",
  },
  bgColor: {
    backgroundColor: "#FCF3EB",
  },
  bookImg: {
    width: "4rem",
    height: "6rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
  },
  centered: {
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "#7D7CBE",
    transform: "translate(-50%, -50%)",
    height: "6rem",
    width: "6rem",
    fontColor: "#FCF3EB",
  },
  bookModal: {
    height: "2rem",
    width: "4rem",
    marginTop: "0px",
  },
};

const x = 0;
// console.log(bookData)
export default function Bookshelfplantdata({ bookData, shelfname }) {
  const [updateToRead, { e1 }] = useMutation(UPDATE_TO_READ);
  const [updateIsReading, { e2 }] = useMutation(UPDATE_IS_READING);
  const [updateIsRead, { e3 }] = useMutation(UPDATE_IS_READ);
  const [removeBook, { e4 }] = useMutation(REMOVE_BOOK);

  const [isRead, setIsRead] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [toRead, setToRead] = useState(false);

  function handleIsReadChange() {
    const bool = isRead;
    setIsRead(!bool);
  }

  function handleIsReadingChange() {
    const bool = isReading;
    setIsReading(!bool);
  }

  function handleToReadChange() {
    const bool = toRead;
    setToRead(!bool);
  }

  const modalInfo = (props) => {
    console.log("does modalInfo get bookData: ", props);
    return (
      <>
        <div className="bg-vdarkPurple text-white p-5">
          <div className="mb-5">
            <p>Author: {props.author}</p>
            <p>Description: {props.desc}</p>
          </div>
          <div className="flex flex-row content-center ">
            <div className="flex flex-col content-center mr-20 ml-5">
              <label htmlFor="toRead">To Read</label>
              <input
                name="toRead"
                type="checkbox"
                id="toRead"
                onChange={handleToReadChange}
              />
            </div>
            <div className="flex flex-col content-center mr-20">
              <label htmlFor="isReading">Reading</label>
              <input
                name="isReading"
                type="checkbox"
                id="isReading"
                onChange={handleIsReadingChange}
              />
            </div>
            <div className="flex flex-col content-center mr-20">
              <label htmlFor="isRead">Read</label>
              <input
                name="isRead"
                type="checkbox"
                id="isRead"
                onChange={handleIsReadChange}
              />
            </div>
            <button
              onClick={() => handleRemoveBook(props)}
              className="bg-medPurple p-2 m-2 rounded-md hover:text-black"
            >
              Delete Book
            </button>
          </div>
        </div>
      </>
    );
  };

  async function saveChanges(props) {
    await updateIsRead({
      variables: {
        bookId: props._id,
        isRead: isRead,
      },
    });
    await updateIsReading({
      variables: {
        bookId: props._id,
        isReading: isReading,
      },
    });
    await updateToRead({
      variables: {
        bookId: props._id,
        toRead: toRead,
      },
    });
  }

  async function handleRemoveBook(props) {
    await removeBook({
      variables: {
        bookId: props._id,
      },
    });
    window.location.reload();
  }

  function darkBackground(e) {
    // e.target.display= 'hidden';
    if (e.target.id == 0) {
      setIsShown(true);
    } else if (e.target.id == 1) {
      setIsShown1(true);
    } else if (e.target.id == 2) {
      setIsShown2(true);
    } else if (e.target.id == 3) {
      setIsShown3(true);
    } else if (e.target.id == 4) {
      setIsShown4(true);
    }
  }
  function lightBackground(e) {
    e.target.style.background = "#7D7CBE";
    if (e.target.id == 0) {
      setIsShown(false);
    } else if (e.target.id == 1) {
      setIsShown1(false);
    } else if (e.target.id == 2) {
      setIsShown2(false);
    } else if (e.target.id == 3) {
      setIsShown3(false);
    } else if (e.target.id == 4) {
      setIsShown4(false);
    }
  }
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  //   let bookData = props.bookData

  return (
    <>
      <div style={styles.bgColor}>
        <div class="flex justify-between pt-4 ml-24 items-center">
          <div class=" mb-0 w-32">
            <Plant />
          </div>
          {bookData.map((book) => {
            return (
              <div className="flex flex-col-reverse" key={book._id}>
                <img
                  id="0"
                  onMouseEnter={darkBackground}
                  onMouseLeave={lightBackground}
                  class="cursor-pointer"
                  style={styles.bookImg}
                  src={book.bookCover}
                  alt={`The cover for ${book.title}`}
                />
                <button
                  style={styles.button}
                  className="bg-vdarkPurple text-white hover:bg-medPurple text-md px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  <Modal
                    bookInfo={book}
                    buttonName={"More Info"}
                    modalTitle={`${book.title}`}
                    modalFunction={"Confirm"}
                    modalInformation={modalInfo}
                    onClickInfo={saveChanges}
                  />
                </button>
              </div>
            );
          })}
          <p class="mr-24">&gt;</p>

          {/* <div style={styles.purpleBook}>
            {bookData[x] ? (
              <img
                id="0"
                onMouseEnter={darkBackground}
                onMouseLeave={lightBackground}
                class="cursor-pointer"
                style={styles.bookImg}
                src={bookData[x].bookCover}
                alt={`The cover for ${bookData[x].title}`}
              />
            ) : null}
            {isShown && (
              <p
                style={styles.centered}
                class="cursor-pointer text-white justify-center"
              >
                {bookData[x] ? `${bookData[x].title}` : ""}
              </p>
            )}
            {bookData[x] ? (
              <button
                style={styles.bookModal}
                className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                <Modal
                  buttonName={"Open"}
                  // buttonName={"View"}
                  modalTitle={bookData[x].title}
                  // modalFunction={"add"}
                  modalInformation={() => modalInfo(bookData[x].desc)}
                  onClickInfo={"more"}
                />
              </button>
            ) : (
              ""
            )}
          </div> */}
{/* 
          <div style={styles.purpleBook}>
            {bookData[x + 1] ? (
              <img
                id="1"
                onMouseEnter={darkBackground}
                onMouseLeave={lightBackground}
                class="cursor-pointer"
                style={styles.bookImg}
                src={bookData[x + 1].bookCover}
                alt={`The cover for ${bookData[x + 1].title}`}
              />
            ) : null}
            {isShown1 && (
              <p style={styles.centered} class="cursor-pointer text-white">
                {" "}
                {bookData[x + 1] ? `${bookData[x + 1].title}` : ""}{" "}
              </p>
            )}
            {bookData[x + 1] ? (
              <button
                style={styles.bookModal}
                className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                <Modal
                  buttonName={"Open"}
                  // buttonName={"View"}
                  modalTitle={bookData[x + 1].title}
                  // modalFunction={"add"}
                  modalInformation={() => modalInfo(bookData[x + 1].desc)}
                  onClickInfo={"more"}
                />
              </button>
            ) : (
              ""
            )}
          </div> */}
{/* 
          <div style={styles.purpleBook}>
            {bookData[x + 2] ? (
              <img
                id="2"
                onMouseEnter={darkBackground}
                onMouseLeave={lightBackground}
                class="cursor-pointer"
                style={styles.bookImg}
                src={bookData[x + 2].cover}
                alt={`The cover for ${bookData[x + 2].title}`}
              />
            ) : null}
            {isShown2 && (
              <p style={styles.centered} class="cursor-pointer text-white">
                {" "}
                {bookData[x + 2] ? `${bookData[x + 2].title}` : ""}{" "}
              </p>
            )}
            {bookData[x + 2] ? (
              <button
                style={styles.bookModal}
                className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                <Modal
                  buttonName={"Open"}
                  // buttonName={"View"}
                  modalTitle={bookData[x + 2].title}
                  // modalFunction={"add"}
                  modalInformation={() => modalInfo(bookData[x + 2].desc)}
                  onClickInfo={"more"}
                />
              </button>
            ) : (
              ""
            )}
          </div> */}
          {/* <div style={styles.purpleBook}>
            {bookData[x + 3] ? (
              <img
                id="3"
                onMouseEnter={darkBackground}
                onMouseLeave={lightBackground}
                class="cursor-pointer"
                style={styles.bookImg}
                src={bookData[x + 3].cover}
                alt={`The cover for ${bookData[x + 3].title}`}
              />
            ) : null}
            {isShown3 && (
              <p style={styles.centered} class="cursor-pointer text-white">
                {" "}
                {bookData[x + 3] ? `${bookData[x + 3].title}` : ""}{" "}
              </p>
            )}
            {bookData[x + 3] ? (
              <button
                style={styles.bookModal}
                className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                <Modal
                  buttonName={"Open"}
                  // buttonName={"View"}
                  modalTitle={bookData[x + 3].title}
                  // modalFunction={"add"}
                  modalInformation={() => modalInfo(bookData[x + 3].desc)}
                  onClickInfo={"more"}
                />
              </button>
            ) : (
              ""
            )}
          </div> */}
          {/* <div style = {styles.purpleBook} >
               {bookData[x+4] ? <img id = "4" onMouseEnter={darkBackground} onMouseLeave={lightBackground} class = "cursor-pointer" style = {styles.bookImg} src={bookData[x+4].cover} alt={`The cover for ${bookData[x+4].title}`}  /> : null}
               {isShown4 && (
                <p style = {styles.centered} class = "cursor-pointer text-white"> {bookData[x+4] ? `${bookData[x+4].title}` : ''} </p>)}
                   {bookData[x+4] ? <button style={styles.bookModal} className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        <Modal 
                        buttonName={"Open"} 
                        // buttonName={"View"}
                        modalTitle={bookData[x+4].title} 
                        // modalFunction={"add"}
                        modalInformation= {() => modalInfo(bookData[x+4].desc)}
                        onClickInfo={"more"}
                        />
                    </button> :''}
           </div> */}
          {/* w32 */}
          {/* <p class="mr-24">&gt;</p> */}
          {/* </div> */}
        </div>
        <p
          style={styles.greenShelf}
          class="text-center text-2xl text-white m-12 mb-0 mt-4 p-0"
        >
          {shelfname}
        </p>
        <div class="flex justify-between">
          <div class="bg-gray-300 m-0 w-16 h-8 ml-32 text-center"></div>
          <div class="bg-gray-300 m-0 w-16 h-8 mr-32 text-center"></div>
        </div>
      </div>
    </>
  );
}