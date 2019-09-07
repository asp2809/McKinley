import React, { useState } from "react";
// import axios from "axios";

import "./Login.css";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = () => {
    // This is not used as the response is always "user not found" and hence dummy data is used below
    // const data = { email, password };
    // axios
    //   .post("https://reqres.in/api/login", data)
    //   .then(res => console.log(res));
    if (email === "submit@gmail.com" && password === "dummypassword") {
      props.history.push("/home");
    } else {
      setEmail("");
      setPassword("");
      setError(true);
    }
  };

  return (
    <div className="login">
      <div className="form">
        {error ? <div className="error">Incorrect Email/Password</div> : null}
        <div className="head">Welcome, Please Login.</div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button
              onClick={submitHandler}
              className="login-submit button is-success is-fullwidth"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
