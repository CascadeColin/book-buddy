
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
    }


}

export default function Bookshelf(props) {
    return(
        <>
            <div style = {styles.bgColor}>
                <div class = "flex justify-between mt-12 mb-0 ml-24 items-baseline">
                    {/* <div class = " mb-0 w-32 ml-24">
                <Plant/>
                </div> */}
                {/* <div class = "flex-justify-between"> */}
                {/* <p>book1</p> */}
                <div style = {styles.purpleBook}></div>
                <div style = {styles.purpleBook}></div>
                <div style = {styles.purpleBook}></div>
                <div style = {styles.purpleBook}></div>
                <div style = {styles.purpleBook}></div>
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
