//import React, { useState, useEffect } from "react";
//import { useQuery } from "@apollo/client";
import Signup from "../components/Signup";
import Login from "../components/Login";
//import Bob from "../components/Images";

const styles = {
  bgColor: {
    backgroundColor: "#FCF3EB",
  },
  // nav: {
  //   backgroundColor: "#E4CFBC",
  //   marginBottom: "-20px",
  //   fontFamily: "Italiana",
  //   fontSize: "1.25rem",
  // },
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
  // navTabs: {
  //   paddingLeft: "55rem",
  // },
};

export default function HomePage() {
  return (
    <div style={styles.bgColor}>
      {/* FIXME: put back in if nav changed */}
      {/* <div >
        <header>
         <div className="flex flex-row">
              <Bob />
            <div className="flex flex-col items-center sm:flex-shrink-0 relative top-3">
              <h1 className="text-3xl">B o o k</h1>
              <h2 style={styles.tab}>Buddy</h2>
            </div>
          </div>
        </header>
      </div>    */}
      <div className="flex flex-row items-centered">
         <div className="flex flex row"> 
          <Signup />
          <Login />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
