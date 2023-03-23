import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Modal from "./Modal";
// import { ADD_USER } from "../../utils/"
import { UPDATE_GOAL_DATE, UPDATE_BOOK_GOAL } from "../utils/mutations";
import { Link } from "react-router-dom";

{
  /*will have to import the queries for reading goal number and reading goal date */
}
import { USER_INFO } from "../utils/queries";

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
    fontSize: "3rem",
  },
  bookDate: {
    fontSize: "2.5rem",
  },
  button: {
    fontFamily: "Italianno",
    color: "white",
  },
};

export default function ReadingGoal() {
  const [goalDate, setGoalDate] = useState("");
  const [bookGoal, setBookGoal] = useState(0);

  const { loading, data } = useQuery(USER_INFO);
  const [updateBookGoal, { bookGoalError }] = useMutation(UPDATE_BOOK_GOAL);
  const [updateGoalDate, { goalDateError }] = useMutation(UPDATE_GOAL_DATE);

  const userData = data?.users || [];

  console.log(goalDate, bookGoal);

  const saveGoal = async () => {
    await updateBookGoal({
      variables: {
        userName: userData[0].userName,
        bookGoal: bookGoal,
      },
    });
    const mutation = await updateGoalDate({
      variables: {
        userName: userData[0].userName,
        goalDate: goalDate,
      },
    });
    console.log(mutation.data.addGoalDate);
    setBookGoal(mutation.data.addGoalDate.bookGoal);
    setGoalDate(mutation.data.addGoalDate.goalDate);
    reloadPage()
  };

  function reloadPage() {
    window.location.reload()
  }

  const goal = "New Goal";
  const title = "New Reading Goal:";
  const add = "Add Goal";

  const modalInfo = () => {
    return (
      <>
        <form onSubmit={saveGoal}>
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
        </form>
      </>
    );
  };
  return (
    <>
      <div style={styles.main} className="w-4/12 px-10 py-8 mt-12">
        {/* TODO: useQuery to get this data reading goal number query */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1 style={styles.title}>{userData[0].bookGoal ? `Reading Goal: ${userData[0].bookGoal}` : `Click "New Goal to set a book goal!"` }</h1>
            <div className="py-2 pb-2">
              <h2 style={styles.bookDate}>{userData[0].goalDate ? `by ${userData[0].goalDate}` : `Click "New Goal to set a goal date!"`}</h2>
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
        )}
      </div>
    </>
  );
}
