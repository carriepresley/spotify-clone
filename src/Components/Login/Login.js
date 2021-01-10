import React from "react";
import "./Login.css";
import Logo from "./spotify.png";
import { loginUrl } from "./spotify"

function Login() {
  return (
    <div className="login">
      <div className="logo-container">
        <img src={Logo} alt="spotify logo" className="logo"></img>
      </div>

      <div className="login-button-container">
        <a className="login-button" href = {loginUrl}>Login with Spotify</a>
      </div>
    </div>
  );
}

export default Login;
