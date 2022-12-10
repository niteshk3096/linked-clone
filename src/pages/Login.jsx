import React from "react";
import Style from "./page.module.css";
import logo from "../assets/Logo.png";
import { Card } from "@mui/material";
import { useDispatch } from "react-redux";
import { loaderAction } from "../store/loader";
import { userAction } from "../store/user";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = async (event) => {
    console.log("login");
    event.preventDefault();
    try {
      dispatch(loaderAction.setLoading(true));
      const response = await signInWithEmailAndPassword(
        auth,
        event.target.email.value,
        event.target.password.value
      );
      console.log("login success", response.user);
      dispatch(userAction.login(response.user));
      navigate("/feed");
      dispatch(loaderAction.setLoading(false));
    } catch (err) {
      dispatch(loaderAction.setLoading(false));
      console.log("err", err.message);
    }
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
            <input
              type="email"
              name="email"
              placeholder="abc@email.com"
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <p>Forgot password?</p>
            <button type="submit">Sign in</button>
          </form>
        </Card>
        <p className={Style.registerText}>
          New to LinkedIn?{" "}
          <span className={Style.joinButton}>
            <Link to="signup">Join now</Link>
          </span>
        </p>
      </main>
    </div>
  );
}

export default Login;
