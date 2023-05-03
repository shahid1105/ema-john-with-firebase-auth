import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLoggedOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
        {user && (
          <span className="text-white">
            welcome {user.email}{" "}
            <button
              className="bg-slate-300 text-black"
              onClick={handleLoggedOut}>
              Sign Out
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
