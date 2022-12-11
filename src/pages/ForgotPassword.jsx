import React from "react";
import Style from "./page.module.css";
import logo from "../assets/Logo.png";
import { Card } from "@mui/material";
import { useDispatch } from "react-redux";
import { loaderAction } from "../store/loader";
import { userAction } from "../store/user";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { snackbarAction } from "../store/snackbar";
import { auth } from "../firebase";
function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const forgotPasswordHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(loaderAction.setLoading(true));
      await sendPasswordResetEmail(auth, event.target.email.value);
      dispatch(loaderAction.setLoading(false));
      dispatch(
        snackbarAction.enableSnackbar({
          status: true,
          message: "Reset email sent successfully",
          severity: "success",
        })
      );
      navigate("/");
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
          <h2>Forgot Password</h2>
          <p>Stay updated on your professional world</p>
          <form onSubmit={forgotPasswordHandler} className={Style.form}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="abc@email.com"
              required
            />
            <button type="submit">Reset password</button>
          </form>
        </Card>
        <p className={Style.registerText}>
          Already on LinkedIn?{" "}
          <span className={Style.joinButton} onClick={() => navigate("/")}>
            Sign In
          </span>
        </p>
      </main>
    </div>
  );
}

export default ForgotPassword;
