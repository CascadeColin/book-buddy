
import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import {Plant} from './Images';


import '../assets/css/fonts.css';
const styles = {
    main: {
        backgroundColor: '#73557D',
    },
    fontCursive: {
        fontFamily: 'Italianno',
    },
    fontPrint: {
        fontFamily: 'Italiana',
    },
    greenShelf: {
        fontFamily: 'Italiana',
        backgroundColor: '#4F5939'

    },
    purpleBook: {
        backgroundColor: '#7D7CBE',
        width: "4rem",
        marginTop: "12px",
        height: "6rem",
        alignSelf: "end",
        position: "relative"


    },
    bgColor: {
       backgroundColor: '#FCF3EB',
    },
    bookImg: {
        width: "4rem",
        height: "6rem",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px"

    },
    centered: {
        position: "absolute",
        top: "50%",
        left: "50%",
        backgroundColor: '#7D7CBE',
        transform: "translate(-50%, -50%)",
        height: "6rem",
        width: "6rem",
        fontColor: '#FCF3EB'
      },
      bookModal: {
        height: "2rem",
        width: "4rem",
        marginTop: "0px"
      }


}

const modalInfo = (desc) =>{
    console.log(desc)
    return(
        <>
            <div>

                {/* <input
                    placeholder="#"
                    name="bookGoal"
                    type="bookGoal"
                    id="bookGoal"
                    // onChange={handleChange}
                /> */}
                <p>
                    {desc}
                </p>
                {/* <input
                    placeholder="YYYY-MM-DD"
                    name="goalDate"
                    type="goalDate"
                    id="goalDate"
                    // onChange={handleChange}
                /> */}
            </div>
        </>
    )
}

// const bookData = [
//     {
//             title: 'mybook',
//             cover: 'https://covers.openlibrary.org/b/id/8653332-L.jpg',
//             desc: 'here is the description',
//             isRead: true,
//             hasRead: false,
//             toRead: true
//         },
//          {
//             title: 'mybook2',
//             cover: 'https://covers.openlibrary.org/b/id/8653332-L.jpg',
//             desc: 'here is the 2 description',
//             isRead: false,
//             hasRead: true,
//             toRead: true
//         }

// ]
    // book1: {
    //     title: 'mybook',
    //     cover: 'img',
    //     desc: 'here is the description',
    //     isRead: true,
    //     hasRead: false,
    //     toRead: true
    // },
    // book2: {
    //     title: 'mybook2',
    //     cover: 'img',
    //     desc: 'here is the 2 description',
    //     isRead: false,
    //     hasRead: true,
    //     toRead: true
    // },

const x = 0
// console.log(bookData)
export default function Bookshelfdata( {bookData, shelfname} ) {

    function darkBackground(e) {
        // e.target.display= 'hidden';
        if((e.target.id) == 0){
        setIsShown(true)}
        else if((e.target.id) == 1){
            setIsShown1(true)}
            else if((e.target.id) == 2){
                setIsShown2(true)}
                else if((e.target.id) == 3){
                    setIsShown3(true)}
                    else if((e.target.id) == 4){
                        setIsShown4(true)}
                    }
      function lightBackground(e) {
        e.target.style.background = '#7D7CBE';
        if((e.target.id) == 0){
            setIsShown(false)}
            else if((e.target.id) == 1){
                setIsShown1(false)}
                else if((e.target.id) == 2){
                    setIsShown2(false)}
                    else if((e.target.id) == 3){
                        setIsShown3(false)}
                        else if((e.target.id) == 4){
                            setIsShown4(false)}
      }
      const [isShown, setIsShown] = useState(false);
      const [isShown1, setIsShown1] = useState(false);
      const [isShown2, setIsShown2] = useState(false);
      const [isShown3, setIsShown3] = useState(false);
      const [isShown4, setIsShown4] = useState(false);
    //   let bookData = props.bookData

    return(
  
        <>
            <div style = {styles.bgColor}>
                <div class = "flex justify-between mt-12 mb-0 ml-24 items-baseline">
                    {/* <div class = " mb-0 w-32 ml-24">
                <Plant/>
                </div> */}
                {/* <div class = "flex-justify-between"> */}
                {/* <p>book1</p> */}

  
                {/* {bookData.map((book) => {
                    return (

                        <div style = {styles.purpleBook} >
               
                    { book.cover ? <img id = "0" onMouseEnter={darkBackground} onMouseLeave={lightBackground} class = "cursor-pointer" style = {styles.bookImg} src={book.cover} alt={`The cover for ${book.title}`}  /> : null}
                    {isShown && (
                <p style = {styles.centered} class = "cursor-pointer text-white justify-center">
                    {/* {props.bookData[x] */}
                    {/* `${book.title}` */}
                    {/* // : ''} */}
                {/* </p>
                        
                     )}
            <button style={styles.bookModal} className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        <Modal 
                        buttonName={book.title} 
                        // buttonName={"View"}
                        modalTitle={book.title} 
                        // modalFunction={"add"}
                        modalInformation= {() => modalInfo(book.desc)}
                        onClickInfo={"more"}
                        />
                    </button>
                </div>

                    ) */} 
                {/* })} */}
               
                <div style = {styles.purpleBook} >
               
                    { bookData[x] ? <img id = "0" onMouseEnter={darkBackground} onMouseLeave={lightBackground} class = "cursor-pointer" style = {styles.bookImg} src={bookData[x].bookCover} alt={`The cover for ${bookData[x].title}`}  /> : null}
                    {isShown && (
                <p style = {styles.centered} class = "cursor-pointer text-white justify-center">
                    {bookData[x]
                   ? `${bookData[x].title}`
                    : ''}
                </p>
                        
                     )}
         {bookData[x] ? <button  style={styles.bookModal} className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        <Modal 
                        buttonName={"Open"} 
                        // buttonName={"View"}
                        modalTitle={bookData[x].title} 
                        // modalFunction={"add"}
                        modalInformation= {() => modalInfo(bookData[x].desc)}
                        onClickInfo={"more"}
                        />
                    </button>  : ''}
                </div>
                
            <div style = {styles.purpleBook} >
               {bookData[x+1] ? <img id = "1" onMouseEnter={darkBackground} onMouseLeave={lightBackground} class = "cursor-pointer" style = {styles.bookImg} src={bookData[x+1].bookCover} alt={`The cover for ${bookData[x+1].title}`}  /> : null}
               {isShown1 && (
                <p style = {styles.centered} class = "cursor-pointer text-white"> {bookData[x+1] ? `${bookData[x+1].title}` : ''} </p>)}
               {bookData[x+1] ? <button style={styles.bookModal} className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        <Modal 
                        buttonName={"Open"} 
                        // buttonName={"View"}
                        modalTitle={bookData[x+1].title} 
                        // modalFunction={"add"}
                        modalInformation= {() => modalInfo(bookData[x+1].desc)}
                        onClickInfo={"more"}
                        />
                    </button> :''}
           </div>

           <div style = {styles.purpleBook} >
               {bookData[x+2] ? <img id = "2" onMouseEnter={darkBackground} onMouseLeave={lightBackground} class = "cursor-pointer" style = {styles.bookImg} src={bookData[x+2].cover} alt={`The cover for ${bookData[x+2].title}`}  /> : null}
               {isShown2 && (
                <p style = {styles.centered} class = "cursor-pointer text-white"> {bookData[x+2] ? `${bookData[x+2].title}` : ''} </p>)}
                {bookData[x+2] ? <button style={styles.bookModal} className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        <Modal 
                        buttonName={"Open"} 
                        // buttonName={"View"}
                        modalTitle={bookData[x+2].title} 
                        // modalFunction={"add"}
                        modalInformation= {() => modalInfo(bookData[x+2].desc)}
                        onClickInfo={"more"}
                        />
                    </button> :''}
                    
           </div>
           <div style = {styles.purpleBook} >
               {bookData[x+3] ? <img id = "3" onMouseEnter={darkBackground} onMouseLeave={lightBackground} class = "cursor-pointer" style = {styles.bookImg} src={bookData[x+3].cover} alt={`The cover for ${bookData[x+3].title}`}  /> : null}
               {isShown3 && (
                <p style = {styles.centered} class = "cursor-pointer text-white"> {bookData[x+3] ? `${bookData[x+3].title}` : ''} </p>)}
                   {bookData[x+3] ? <button style={styles.bookModal} className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        <Modal 
                        buttonName={"Open"} 
                        // buttonName={"View"}
                        modalTitle={bookData[x+3].title} 
                        // modalFunction={"add"}
                        modalInformation= {() => modalInfo(bookData[x+3].desc)}
                        onClickInfo={"more"}
                        />
                    </button> :''}
           </div>
           <div style = {styles.purpleBook} >
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
           </div>
                {/* w32 */}
                <p class = "mr-24 mt-12">&gt;</p>
                {/* </div> */}
                </div>
                <p style = {styles.greenShelf} class = "text-center text-white m-12 mb-0 mt-4 p-0">{shelfname}</p>
            <div class = "flex justify-between">
                <div class = "bg-gray-300 m-0 w-16 h-8 ml-32 text-center"></div>
                <div class = "bg-gray-300 m-0 w-16 h-8 mr-32 text-center"></div>
            </div>
          </div>
           </>
    )
}
