import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Modal from './Modal';
import { Rating } from 'react-simple-star-rating';
import {UPDATE_BOOK_RATING} from "../utils/mutations";


export default function RatingModal() {
    const button = 'Rate Me!'
    const ratingTitle = 'Rate This Book:'
    const rateIt = 'Rate It!'

    // rating state has information
    const [rating, setRating] = useState(0)
  
        const handleRating = (rate) => {
          setRating(rate)
        }
        const onPointerMove = (value, index) => console.log(value, index)

        const styles = {
          display: 'flex',
          flexDirection: 'row'
        }
      
    const saveRating = () => {

    }
    return(
        <>
            <Modal
                buttonName={button}
                modalTitle={ratingTitle}
                modalFunction={rateIt}
                modalInformation={() => (
                <div 
                style={{
                  display: 'inline'
                }}
                >
                  <Rating
                    onClick={handleRating}
                    onPointerMove={onPointerMove}
                    // style={styles}
                  />
                </div>
                )}
                onClickInfo={saveRating}
                />
        </>
    )
}

export function BookRating() {
   // rating state has information
   const [rating, setRating] = useState(0)
  
   const handleRating = (rate) => {
     setRating(rate)
   }
   const onPointerMove = (value, index) => console.log(value, index)

   const styles = {
     display: 'flex',
     flexDirection: 'row'
   }

   return(
      <div
        style={{
          direction: 'ltr',
          fontFamily: 'sans-serif',
          touchAction: 'none'
        }}
        >
          {/* read only rating stars */}
        <Rating
          initialValue={3}
          onClick={handleRating}
          onPointerMove={onPointerMove}
          readonly
        />
      </div>
   )
}