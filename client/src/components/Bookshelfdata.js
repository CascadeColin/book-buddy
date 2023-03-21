
import React from 'react';

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
        width: "6rem",
        marginTop: "12px",
        height: "6rem",
        alignSelf: "end"


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

    }


}

const bookData = [
    {
            title: 'mybook',
            cover: 'https://covers.openlibrary.org/b/id/8653332-L.jpg',
            desc: 'here is the description',
            isRead: true,
            hasRead: false,
            toRead: true
        },
         {
            title: 'mybook2',
            cover: 'https://covers.openlibrary.org/b/id/8653332-L.jpg',
            desc: 'here is the 2 description',
            isRead: false,
            hasRead: true,
            toRead: true
        }

]
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
console.log(bookData)
export default function Bookshelfdata(props) {
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
                    console.log(book.title)
                    return(

                        <div style = {styles.purpleBook}>
                            <p>{book.title}</p>
                         </div>    
                    )
                })} */}
               
                <div style = {styles.purpleBook}>
               
                    {bookData[x+1].cover ? <img style = {styles.bookImg} src={bookData[x+1].cover} alt={`The cover for ${bookData[x+1].title}`}  /> : null}

                <p>
                    {bookData[x]
                   ? `${bookData[x].title}`
                    : ''}
                    </p>
                    </div>
                <div style = {styles.purpleBook}>
                <p>
                    {bookData[x+1]
                   ? `${bookData[x+1].title}`
                    : ''}
                    </p>
                </div>
                <div style = {styles.purpleBook}>
                <p>
                    {bookData[x+2]
                   ? `${bookData[x+2].title}`
                    : ''}
                    </p>
                </div>
                <div style = {styles.purpleBook}>
                    <p>
                    {bookData[x+3]
                   ? `${bookData[x+3].title}`
                    : ''}
                    </p>
                </div>
                <div style = {styles.purpleBook}>
                <p>
                    {bookData[x+4]
                   ? `${bookData[x+4].title}`
                    : ''}
                    </p>
                </div>
                {/* w32 */}
                <p class = "mr-24 mt-12">&gt;</p>
                {/* </div> */}
                </div>
                <p style = {styles.greenShelf} class = "text-center text-white m-12 mb-0 mt-4 p-0">{props.shelfname}</p>
            <div class = "flex justify-between">
                <div class = "bg-gray-300 m-0 w-16 h-8 ml-32 text-center"></div>
                <div class = "bg-gray-300 m-0 w-16 h-8 mr-32 text-center"></div>
            </div>
          </div>
           </>
    )
}
