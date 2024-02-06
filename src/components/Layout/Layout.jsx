import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Home from "../pages/home/Home";
import UserHome from "../pages/userhome/UserHome";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const isAuth = localStorage.getItem("isAuth");

  useEffect(() => {
    if (!!isAuth && pathname === "/login") {
      navigate("/home");
    } else if (!isAuth && pathname === "/home") {
      navigate("/login");
    }
  }, [isAuth, pathname, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Layout;
