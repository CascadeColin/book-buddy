import React from 'react';

const styles = {
  bob: {
    maxWidth: "100px",
    maxHeight: "70px",
    marginTop: "5px",
  },

  bobLight: {
    maxWidth: "150px",
    maxHeight: "150px",
    marginTop: "20px",
  },
  loginPlant: {
    maxWidth: "150px",
    maxHeight: "150px",
    marginTop: "100px",
  },
  profileBob: {
    maxWidth: "300px",
    maxHeight: "300px",
    marginTop: "20px",
  },
};

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
    return (
      <img
        className="BobLight"
        src={require("../assets/images/loginBOB.png")}
        alt="BOB Light"
        style={styles.bobLight}
      />
    );
}
export function ProfileBob(){
    return (
      <img
        className="ProfileBob"
        src={require("../assets/images/loginBOB.png")}
        alt="Profile Bob"
        style={styles.profileBob}
      />
    );
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

export function LoginPlant() {
  return (
    <img
      className="ShelfPlant"
      src={require("../assets/images/loginPlant.png")}
      alt="login Plant"
      style={styles.loginPlant}
    />
  );
}