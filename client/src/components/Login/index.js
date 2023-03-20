import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

import "../assets/css/fonts.css";
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
  title: {
    fontFamily: "Italianno",
    fontSize: "3rem",
  },
  loginText: {
    fontSize: "3rem",
    fontFamily: "Italianno",
  },
  button: {
    fontFamily: "Italianno",
    color: "white",
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
  //maybe add back under current div
  //  <Link to="/signup">← Go to Signup</Link>

  return (
    <div style={styles.main} className="container my-1">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label style={styles.loginText} htmlFor="email">
            Email address:
          </label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label style={styles.loginText} htmlFor="pwd">
            Password:
          </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p style={styles.loginText} className="error-text">
              The provided credentials are incorrect
            </p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button style={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

// export default function Login() {
//   return (
//     <>
//       <div style={styles.main} className="w-4/12 p-4">
//         <h1 style={styles.title}>Login</h1>
//         {/* this syntax will most likely need to be changed once the queries are made */}
//         <div>
//           {/* reading goal number query */}
//           <h2 style={styles.bookNumber}>___ books</h2>
//           {/* reading goal date query */}
//           <h2 style={styles.bookDate}>by ___</h2>
//         </div>
//         {/*on click, have the 'new reading goal' modal pop up*/}
//         <button style={styles.button} className="bg-vdarkPurple px-4">
//           Login
//         </button>
//       </div>
//     </>
//   );
// }
