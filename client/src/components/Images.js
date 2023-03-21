import React from 'react';

const styles ={
    bob: {
        maxWidth: '100px',
        maxHeight: '70px',
        marginTop: '5px'
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
}

export function BobLight(){
    return(
        <img  
            className='BobLight'
            src={require('../assets/images/loginBOB.png')}
            alt='BOB Light'
            style={styles.bob}
        />
    )
}

export function Plant(){
    return(
        <img  
        className='ShelfPlant'
        src={require('../assets/images/ShelfPlant.png')}
        alt='NavBar Plant'
    />
    )
}