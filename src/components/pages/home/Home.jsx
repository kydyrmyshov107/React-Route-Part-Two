import { useNavigate } from "react-router-dom";

import scss from "./Home.module.scss";
import Header from "../../Layout/header/Header";
import Footer from "../../Layout/footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/Login");
  };
  return (
    <div>
      <div className={scss.home}>
        <Header />

        <button className={scss.button} onClick={navigateToLogin}>
          to login
        </button>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
