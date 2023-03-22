// import React, { useState, useEffect } from "react";
// import { useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
//import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

const styles = {
  main: {
    backgroundColor: "#73557D",
    color: "white",
    textAlign: "center",
    fontSize: "1.5rem",
    fontFamily: "Italiana",
    marginBottom: "50px",
  },
  title: {
    fontFamily: "Italianno",
    fontSize: "3rem",
  },
  inputBox: {
    color: "black",
    fontFamily: "Sans-Serif",
  },
  button: {
    fontFamily: "Italianno",
    color: "white",
    fontSize: "2rem",
  },
};

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <div style={styles.main} className="w-4/12 p-4 mt-20">
      <div flex flex-row >
        <h2 style={styles.title}>Login</h2>
      </div>
  
      <form onSubmit={handleFormSubmit}>
        <div flex flex-row>
        <div className="flex-row space-between my-2">
          <label style={styles.loginText} htmlFor="email" className="mr-2">
            Email:
          </label>
          <input
            style={styles.inputBox}
            placeholder="Enter your email address"
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
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        </div>
        <div flex flex-row>
        <div className="flex-row flex-end">
          <button
            style={styles.button}
            className="bg-vdarkPurple px-4 hover:bg-medPurple rounded shadow hover:shadow-lg"
            type="submit"
          >
            Login
          </button>
        </div>
        </div>
      </form>
      </div>
  );
}

export default Login;


