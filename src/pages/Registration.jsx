import React from "react";
import Style from "./page.module.css";
import logo from "../assets/Logo.png";
import { Card } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loaderAction } from "../store/loader";
import { userAction } from "../store/user";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../firebase";

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrationHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(loaderAction.setLoading(true));
      const response = await createUserWithEmailAndPassword(
        auth,
        event.target.email.value,
        event.target.password.value
      );
      const user = response.user;
      await updateProfile(user, {
        displayName: event.target.fullName.value,
        photoURL: event.target.profilePic.value,
      });
      dispatch(userAction.login(user));
      navigate("/feed");
      dispatch(loaderAction.setLoading(false));
    } catch (err) {
      dispatch(loaderAction.setLoading(false));
      console.log("account failed", err.message);
    }
  };
  return (
    <div className={Style.page}>
      <header>
        <img src={logo} alt="Linked logo" />
      </header>
      <main>
        <Card sx={{ minWidth: 325 }} className={Style.card}>
          <h2>Sign up</h2>
          <p>Stay updated on your professional world</p>
          <form onSubmit={registrationHandler} className={Style.form}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Smith"
              required
            />
            <label>Profile Picture</label>
            <input
              type="text"
              name="profilePic"
              placeholder="Profile pic URL"
            />
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
            <button type="submit">Sign up</button>
          </form>
        </Card>
        <p className={Style.registerText}>
          Already on LinkedIn?{" "}
          <span className={Style.joinButton}>
            <Link to="/">Sign In</Link>
          </span>
        </p>
      </main>
    </div>
  );
}

export default Registration;
