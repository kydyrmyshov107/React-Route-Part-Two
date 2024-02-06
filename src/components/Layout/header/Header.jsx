import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <header className={style.header}>
        <nav>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/Login">Login</Link>
          </ul>
          <ul>
            <Link to="/registration">Registration</Link>
          </ul>
          <ul>
            <Link to="/userhome">Users</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
