import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Modal from "./Modal";
// import { ADD_USER } from "../../utils/"
import { UPDATE_GOAL_DATE, UPDATE_BOOK_GOAL } from "../utils/mutations";
import { USER } from "../utils/queries";
import { Link } from "react-router-dom";
import Auth from '../utils/auth'

import "../assets/css/fonts.css";
import Bookshelf from "./Bookshelf";
const styles = {
  main: {
    backgroundColor: "#73557D",
    color: "white",
    textAlign: "center",
    fontSize: "1.5rem",
    fontFamily: "Italiana",
  },
  title: {
    fontFamily: "Italianno",
    fontSize: "3rem",
  },
  bookNumber: {
    fontSize: "5rem",
    textWeight: 'bold'
  },
  bookDate: {
    fontSize: "2rem",
  },
  button: {
    fontFamily: "Italianno",
    color: "white",
  },
};

export default function ReadingGoal() {
  const [goalDate, setGoalDate] = useState("");
  const [bookGoal, setBookGoal] = useState(0);
  const activeUser = Auth.getProfile()
  console.log(activeUser.data.userName)

  const { loading, data } = useQuery(USER, {
    variables: {userName: activeUser.data.userName }
  });
  const [updateBookGoal, { bookGoalError }] = useMutation(UPDATE_BOOK_GOAL);
  const [updateGoalDate, { goalDateError }] = useMutation(UPDATE_GOAL_DATE);

  const userData = data?.user || [];

  if (!userData) {
    console.log("nobooks")
    return false;
  }

  // use this setTimeout to display userData if needed - hacky way of accessing async data
  // setTimeout(() => {
  //   console.log(userData)
  // }, 2000)

  const saveGoal = async () => {
    await updateBookGoal({
      variables: {
        userName: userData.userName,
        bookGoal: bookGoal,
      },
    });
    const mutation = await updateGoalDate({
      variables: {
        userName: userData.userName,
        goalDate: goalDate,
      },
    });

    setBookGoal(mutation.data.addGoalDate.bookGoal);
    setGoalDate(mutation.data.addGoalDate.goalDate);
    reloadPage();
  };

  function reloadPage() {
    // window.location.reload();
  }

  const goal = "New Goal";
  const title = "New Reading Goal:";
  const add = "Add Goal";

  const modalInfo = () => {
    return (
      <>
        <form onSubmit={saveGoal}>
          <div className="bg-medPurple text-black p-10">
          <p>How many books do you want to read?</p>
          <input
            placeholder="#"
            name="bookGoal"
            type="number"
            id="bookGoal"
            onChange={(e) => setBookGoal(parseInt(e.target.value))}
          />
          <p>When do you want to reach your goal?</p>
          <input
            placeholder="YYYY-MM-DD"
            name="goalDate"
            type="Date"
            id="goalDate"
            onChange={(e) => setGoalDate(e.target.value)}
          />
          </div>
        </form>
      </>
    );
  };
  return (
    <>
      <div style={styles.main} className="w-4/12 px-10 py-6 mt-5 mr-10">
        {/* TODO: useQuery to get this data reading goal number query */}
        {loading ? (
          <div>Loading...</div>
        ) :
        (
          <>
          <h1 style={styles.title}>Reading Goal:</h1>
            <div className="flex flex-row space-x-3 justify-center items-baseline">
                <h1 style={styles.bookNumber}>
                    {userData.bookGoal
                         ? `${userData.bookGoal}`
                         : `0`} 
                </h1>
                <h2 className="text-3xl">books</h2>
            </div>
            <div className="py-2 pb-2">
              <h2 style={styles.bookDate}>
                {userData.goalDate
                  ? `by ${userData.goalDate}`
                  : `Set a goal date!`}
              </h2>
            </div>
            {/*on click, have the 'new reading goal' modal pop up*/}
            <button
              style={styles.button}
              className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              <Modal
                buttonName={goal}
                modalTitle={title}
                modalFunction={add}
                modalInformation={modalInfo}
                onClickInfo={saveGoal}
              />
            </button>
          </>
        )
        }
      </div>
    </>
  );
}
