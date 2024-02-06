import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import scss from "./UserHome.module.scss";
const url =
  "https://api.elchocrud.pro/api/v1/afc5f46e0ccea647582b890031c0c221/newusers";

const UserHome = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  const handleExit = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuth");
    navigate("/Login");
  };

  const getUserProfile = async () => {
    const response = await axios.get(url);

    const userProfile = response.data;
    const getUserIdLocalStorage = localStorage.getItem("isAuth");
    const findUser = userProfile.find(
      (item) => item._id === +getUserIdLocalStorage
    );
    setUserProfile(findUser);
  };

  const getRequest = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRequest();
    getUserProfile();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleExit}>Exit</button>
      </div>
      <div className={scss.aside}>
        {users.map((el, index) => (
          <div className={scss.inner} key={index}>
            <h1>{el.name}</h1>
            <h3>{el.password}</h3>
          </div>
        ))}
        <div>
          <h1>{userProfile.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
