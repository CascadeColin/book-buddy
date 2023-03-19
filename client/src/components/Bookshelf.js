
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
        margin: "3px"
    },
    bgColor: {
       backgroundColor: '#FCF3EB',
    }


}

export default function Bookshelf(shelfName) {
    return(
        <>
            <div style = {styles.bgColor}>
                <div class = "flex justify-between mt-12">
                    <div class = " mb-0 w-32 ml-24">
                <Plant/>
                </div>
                {/* <div class = "flex-justify-between"> */}
                {/* <p>book1</p> */}
                <div style = {styles.purpleBook}></div>
                <div style = {styles.purpleBook}></div>
                <div style = {styles.purpleBook}></div>
                <div style = {styles.purpleBook}></div>
                <p class = "mr-24 text-center">.</p>
                {/* </div> */}
                </div>
                <p style = {styles.greenShelf} class = "text-center text-white m-12 mb-0">To Be Read</p>
            <div class = "flex justify-between">
                <p class = "bg-gray-300 m-0 w-16 ml-32 text-center">*</p>
                <p class = "bg-gray-300 m-0 w-16 mr-32 text-center">*</p>
            </div>
          </div>
           </>
    )
}
