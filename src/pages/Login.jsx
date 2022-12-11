import React from "react";
import Style from "./page.module.css";
import logo from "../assets/Logo.png";
import { Card } from "@mui/material";
import { useDispatch } from "react-redux";
import { loaderAction } from "../store/loader";
import { userAction } from "../store/user";
import { snackbarAction } from "../store/snackbar";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(loaderAction.setLoading(true));
      const response = await signInWithEmailAndPassword(
        auth,
        event.target.email.value,
        event.target.password.value
      );
      dispatch(userAction.login(response.user));
      navigate("/feed");
      dispatch(loaderAction.setLoading(false));
      dispatch(
        snackbarAction.enableSnackbar({
          status: true,
          message: "Logged in successfully",
          severity: "success",
        })
      );
    } catch (err) {
      dispatch(loaderAction.setLoading(false));
      dispatch(
        snackbarAction.enableSnackbar({
          status: true,
          message: err.code.split("/")[1].replaceAll("-", " "),
          severity: "error",
        })
      );
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
            <p onClick={() => navigate("/reset-password")}>Forgot password?</p>
            <button type="submit">Sign in</button>
          </form>
        </Card>
        <p className={Style.registerText}>
          New to LinkedIn?{" "}
          <span
            className={Style.joinButton}
            onClick={() => navigate("/signup")}
          >
            Join now
          </span>
        </p>
      </main>
    </div>
  );
}

export default Login;
