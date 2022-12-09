import React from "react";
import Style from "./page.module.css";
import logo from "../assets/Logo.png";
import { Card } from "@mui/material";
import { useDispatch } from "react-redux";
import { loaderAction } from "../store/loader";
import { Link } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    console.log("login");
    event.preventDefault();
    dispatch(loaderAction.setLoading(true));
  };
  return (
    <div className={Style.page}>
      <header>
        <img src={logo} alt="Linked logo" />
      </header>
      <main>
        <Card sx={{ minWidth: 325 }} className={Style.card}>
          <h2>Sign in</h2>
          <p>Stay updated on your professional world</p>
          <form onSubmit={loginHandler} className={Style.form}>
            <label>Email</label>
            <input type="email" name="email" placeholder="abc@email.com" />
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
            <p>Forgot password?</p>
            <button type="submit">Sign in</button>
          </form>
        </Card>
        <p className={Style.registerText}>
          New to LinkedIn?{" "}
          <span>
            <Link to="signup">Join now</Link>
          </span>
        </p>
      </main>
    </div>
  );
}

export default Login;
