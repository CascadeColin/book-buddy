import React from 'react';

const styles ={
    bob: {
        width: '115px',
        height: '70px',
    }
}

export default function Bob(){
    return(
        <img  
            className='NavBarBOB'
            src={require('../assets/images/NavBarBOB_BookBuddy.png')}
            alt='NavBar BOB'
            style={styles.bob}
        />
    )
};

export function Plant(){
    return(
        <img  
        className='ShelfPlant'
        src={require('../assets/images/ShelfPlant.png')}
        alt='NavBar Plant'
    />
    )
}