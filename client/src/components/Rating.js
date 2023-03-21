import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Modal from './Modal';
import { Rating } from 'react-simple-star-rating';


export default function RatingModal() {
    const button = 'Rate Me!'
    const ratingTitle = 'Rate This Book:'
    const rateIt = 'Rate It!'
    const ratingInfo = () => {
        // const [rating, setRating] = useState(0)

        // // Catch Rating value
        // const handleRating = (rate: number) => {
        //   setRating(rate)
      
        //   // other logic
        // }
        // // Optinal callback functions
        // const onPointerEnter = () => console.log('Enter')
        // const onPointerLeave = () => console.log('Leave')
        // const onPointerMove = (value: number, index: number) => console.log(value, index)
      
        // return (
        //   <div className='App'>
        //     <Rating
        //       onClick={handleRating}
        //       onPointerEnter={onPointerEnter}
        //       onPointerLeave={onPointerLeave}
        //       onPointerMove={onPointerMove}
        //       /* Available Props */
        //     />
        //   </div>
        // )
    }
    const saveRating = () => {

    }
    return(
        <>
            <div>
            <Modal
                buttonName={button}
                modalTitle={ratingTitle}
                modalFunction={rateIt}
                modalInformation={ratingInfo}
                onClickInfo={saveRating}
                />
            </div>
        </>
    )
}