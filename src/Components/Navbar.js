import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/navbar.css";
import { AuthContext } from "../Database/Auth";

import app from "../Database/Base";

function Navbar({ home }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={`header ${home ? "home" : ""}`}>
      <div className="logo2">
        <div className="circle"> </div>
        <h1>LOGO</h1>
      </div>

      <ul>
        <li>
          <a href="">Incio</a>
        </li>
        <li>
          <a href="">Productos</a>
        </li>
        {!localStorage.usertoken ? (
          <li className="probar">
            <NavLink to="/login">Iniciar Sesión</NavLink>
          </li>
        ) : (
          <div>
            {currentUser.displayName}
            <button
              onClick={
                (() => app.auth().signOut(),
                localStorage.removeItem("usertoken"))
              }
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
