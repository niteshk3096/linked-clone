import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import { Link } from "react-router-dom";
import Style from "./page.module.css";

function Hompage() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Header name={user.displayName} photoURL={user.photoURL} />
      <div className={Style.feedPage}>
        <Sidebar
          name={user.displayName}
          email={user.email}
          photoURL={user.photoURL}
        />
        <Feed name={user.displayName} photoURL={user.photoURL} />
      </div>
    </>
  );
}

export default Hompage;
