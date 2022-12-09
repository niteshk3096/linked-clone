import React from "react";
import Style from "./page.module.css";
import logo from "../assets/Logo.png";
import { Card } from "@mui/material";
// import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Registration() {
  const loginHandler = (event) => {
    console.log("login");
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
          <form onSubmit={loginHandler} className={Style.form}>
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="John Smith" />
            <label>Profile Picture</label>
            <input
              type="text"
              name="profilePic"
              placeholder="Profile pic URL"
            />
            <label>Email</label>
            <input type="email" name="email" placeholder="abc@email.com" />
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Sign up</button>
          </form>
        </Card>
        <p className={Style.registerText}>
          Already on LinkedIn? <span>Sign in</span>
        </p>
      </main>
    </div>
  );
}

export default Registration;
