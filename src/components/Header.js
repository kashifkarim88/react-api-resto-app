import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../components-css/Header.css";

function Header() {
  const navigate = useNavigate()

  function logOut(){
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className="parent-wrapper">
      <div className="header-wrapper">
        <h2>
          RESTO<span>.com</span>
        </h2>
        <ul>
          <li>
            <NavLink className="navLink" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to={"/resturantList"}>
              Restaurant List
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to={"/createResturant"}>
              Create Restaurant
            </NavLink>
          </li>
          {
            localStorage.getItem('login')?(
              <button className="login-btn" onClick={()=> logOut()}>Logout</button>
              ):
              <button className="login-btn" onClick={()=> navigate('/login')}>Login</button>

          }
        </ul>
      </div>
    </div>
  );
}

export default Header;
