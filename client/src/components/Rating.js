import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Modal from './Modal';


export default function Rating() {
    const button = 'Rate Me!'
    const ratingTitle = 'Rate This Book:'
    const rateIt = 'Rate It!'
    const ratingInfo = () => {
        
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