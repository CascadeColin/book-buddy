import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { header } from "./style";

import { Bob } from "../components/Images";

const styles = {
  bgColor: {
    backgroundColor: "#FCF3EB",
  },
};

export default function StartPage() {
  return (
    <div style={styles.bgColor}>
      <div m-0>
        <div class="w-32 m-0">{/* <Bob /> */}</div>
        <header className={header}>
          <Bob />
        </header>
      </div>
      <div>
        <Signup />
        <Login />
      </div>
    </div>
  );
}
