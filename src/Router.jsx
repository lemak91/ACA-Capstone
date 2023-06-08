/* eslint-disable react/prop-types */
import { Routes, Route, Navigate } from "react-router";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import cookie from "cookie";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/signup" />
  );
};

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<ProtectedRoute component={Home} />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
