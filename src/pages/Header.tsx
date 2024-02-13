import { useContext } from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import logoImage from "../assets/images/logo.jpg";

const Header: React.FC = () => {
  const {isLoggedIn, setIsLoggedIn } = useContext(Context);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="flex justify-between">
      <div className="social text-white ms-10">
        <ul className="flex">
          <li className="m-1 py-2">
            <a href="">
              <FaFacebook />
            </a>
          </li>
          <li className="m-1 py-2">
            <a href="">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="Logo mb-20 flex justify-center">
        <img className="h-20 w-40" src={logoImage} alt="Logo" />
      </div>
      <div className="registration me-10 flex">
        {isLoggedIn ? (
          <div onClick={handleLogout} className="font-bold text-white">
            <Link to="/">LOGOUT</Link>
          </div>
        ) : (
          <>
            <div className="font-bold text-white">
              <Link to="/login">
                <button className="">LOGIN</button>
              </Link>
            </div>
            <div className="font-bold text-white mx-3">
              <Link to="/register">
                <button className="">SIGN UP</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;