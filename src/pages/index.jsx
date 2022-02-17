import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import { useSelector } from "react-redux";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import DashboardPage from "./DashboardPage";
import { auth } from "../redux/actions/auth.actions";
import { useDispatch } from "react-redux";

export default function AppRoutes() {
  function PrivateRoute({ children }) {
    const dispatch = useDispatch();
    dispatch(auth());
    const userlogged = useSelector((state) =>state.auth.isAuthenticated);
    return userlogged ? children : <Navigate to="/" />;
  }
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
