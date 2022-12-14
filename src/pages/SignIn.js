import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/SignIn.css";
import image from "../assets/Logo4.png";

function SignIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "ctremayne",
      password: "123123"
    },
    {
      username: "jditch",
      password: "123123"
    },
    {
      username: "eyoung",
      password: "123123"
    },
    {
      username: "lproctor",
      password: "123123"
    },
    {
      username: "lgribbin",
      password: "123123"
    },
    {
      username: "obrew",
      password: "123123"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
              <div className="title-signin">Sign In</div>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <Link to ="/signup">
      <p>Don't have an Account? Sign Up here</p>
      </Link>
    </div>
  );

  return (
    <div className="app">
        {isSubmitted ? <div>
        <h1 className='login-success'>Login Successful.</h1>
       <h1 className='login-success'>Welcome to SportsOrg.</h1>
        <h1 className='login-success'>Click <a href='/about'>here</a> to get started.</h1>
      <img className='login-img-2' src={image} />
      </div> : renderForm}

      </div>
  );
}

export default SignIn;