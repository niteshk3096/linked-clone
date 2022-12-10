import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Hompage from "../pages/Hompage";
import Protected from "./Protected";
import Unprotected from "./Unprotected";

export default function Router() {
  const isLoading = useSelector((state) => state.loader.isLoading);
  console.log("loading", isLoading);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Unprotected>
              <Login />
            </Unprotected>
          }
        />
        <Route
          path="/signup"
          element={
            <Unprotected>
              <Registration />
            </Unprotected>
          }
        />
        <Route
          path="/feed"
          element={
            <Protected>
              <Hompage />
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

// export default Router;
