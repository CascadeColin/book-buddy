import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

const styles = {
  main: {
    backgroundColor: "#73557D",
    color: "white",
    textAlign: "center",
    fontSize: "1.5rem",
    fontFamily: "Italiana",
    marginRight: "100px",
    marginBottom: "50px",
  },
  inputBox: {
    color: "black",
    fontFamily: "Sans-Serif",
  },
  title: {
    fontFamily: "Italianno",
    fontSize: "3rem",
  },
  button: {
    fontFamily: "Italianno",
    color: "white",
    fontSize: "2rem",
  },
};

function Signup(props) {
  const [formState, setFormState] = useState({userName: "", email: "", password: "", bookGoal:"", goalDate:"" });
  const [addUser,{error}] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    const mutationResponse = await addUser({
      variables: {
        userName: formState.userName,
        email: formState.email,
        password: formState.password,
        bookGoal: parseInt(formState.bookGoal),
        goalDate: formState.goalDate,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    <Link to="/profile"></Link>;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log("formState.goalDate: " + formState.goalDate);
  };

  return (
    <div style={styles.main} className="w-4/12 p-4 mt-20">
      <h2 style={styles.title}>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="myUserName" className="mr-2">
            User Name:
          </label>
          <input
            style={styles.inputBox}
            placeholder="Enter your user name"
            name="userName"
            type="text"
            id="userName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email" className="mr-2">
            Email:
          </label>
          <input
            style={styles.inputBox}
            placeholder="youremail@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd" className="mr-2">
            Password:
          </label>
          <input
            style={styles.inputBox}
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="bookGoal">How many books do you plan to read?</label>
          <input
            style={styles.inputBox}
            placeholder="0"
            name="bookGoal"
            type="number"
            id="bookGoal"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="GoalDate">What is the date for this goal?</label>
          <input
            style={styles.inputBox}
            placeholder="MM /DD/YYYY"
            name="goalDate"
            type="Date"
            id="goalDate"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">
              Verify email/password(min8) are unique and all fields are filled
              in please!
            </p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button
            style={styles.button}
            className="bg-vdarkPurple px-4 hover:bg-medPurple rounded shadow hover:shadow-lg"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
