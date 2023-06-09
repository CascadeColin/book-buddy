import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Bob from './Images';
import { Link } from 'react-router-dom';
import {BobLight} from './Images';
import Auth from "../utils/auth";


import '../assets/css/fonts.css';

const styles = {
  nav: {
    backgroundColor: "#E4CFBC",
    marginBottom: "-20px",
    fontFamily: "Italiana",
    fontSize: "1.25rem",
    padding: "10px",
    paddingRight: "50px",
    width: "100vw",
    marginLeft: '-4px'
  },
  login: {
    backgroundColor: "#FCF3EB",
    marginBottom: "-20px",
    fontFamily: "Italiana",
    fontSize: "1.25rem",
  },
  fontCursive: {
    fontFamily: "Italianno",
    fontSize: "1.5rem",
    position: "relative",
    top: "10px",
    right: "8px",
  },
  tab: {
    fontFamily: "Italianno",
    fontSize: "2.5rem",
    position: "relative",
    top: "-19px",
    left: "8px",
  },
  buddy: {
    fontFamily: "Italianno",
    fontSize: "5rem",
    position: "relative",
    top: "-19px",
    // left: "8px",
  },
  navTabs: {
    paddingLeft: "4rem",
  },
};


function Nav(){
     function showNavigation() {
    if (Auth.loggedIn()) {
      return (
      <>
        <nav style={styles.nav} className="w-screen">
          <div className="flex flex-row">
            <Link to="/profile">
              <Bob />
            </Link>
            <div className="flex flex-col items-center sm:flex-shrink-0 relative top-3">
              <h1 className="text-3xl">B o o k</h1>
              <h2 style={styles.tab}>Buddy</h2>
            </div>

            <ul
              // style={styles.navTabs}
              className="flex flex-row justify-end items-center md:flex-shrink-0 space-x-20 xs:space-x-2 sm:space-x-10 ml-auto "
            >
              <li>
                <Link to="/profile">
                  <h1 style={styles.fontCursive}>My</h1>
                  Profile
                </Link>
              </li>
              <li>
                {/*my books page - add routes by Claire to this*/}
                <Link to="/mybooks">
                  <h1 style={styles.fontCursive}>My</h1>
                  Books
                </Link>
              </li>
              <li>
                <Link to="/addbooks">
                  <h1 style={styles.fontCursive} className="hover:color-white">Add</h1>
                  Books
                </Link>
              </li>
              <li>
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
      }else{
      
        return (
          <nav
            style={styles.login}
            className="mx-auto max-w-full"
          >
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-center" >
                <Link to="/">
                  <BobLight />
                </Link>

                <div className="flex flex-col items-center sm:flex-shrink-0 relative top-3">
                  <h1 className="text-6xl">B o o k</h1>
                  <h2 style={styles.buddy}>Buddy</h2>
                </div>
              </div>
              <div className="flex justify-center ">
                <p>Welcome - Login or Sign Up to Access Your Profile</p>
              </div>
            </div>
          </nav>
        );
     }
    }
     return (
       <header className="flex-row px-1">
         <nav>{showNavigation()}</nav>
        
       </header>
     );
}

     export default Nav;
