import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/navbarhome.css";
import { AuthContext } from "../Database/Auth";
import app from "../Database/Base.js";

const NavbarHome = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [openPerfil, setOpenPerfil] = useState(false);
  console.log(currentUser);

  // navigator.geolocation.getCurrentPosition(async (position) => {
  //   const lat = position.coords.latitude;
  //   const lon = position.coords.longitude;

  //   const current = { lat, lon };
  //   console.log(current);
  // });
  return (
    <>
      <div className="top">
        <div className="left">
          <img
            src={
              props.land == null
                ? "Img/align-justify.svg"
                : "Img/align-justify_land.svg"
            }
            alt=""
            className="lateral"
          />
          <h3>
            {props.land == null
              ? props.home == null
                ? props.admin
                : props.home
              : props.land}
          </h3>
        </div>
        <div>
          <img
            src={props.land == null ? "Img/Logo.svg" : "Img/Logo_land.svg"}
            alt=""
            className="logo"
          />
        </div>
        {!currentUser ? (
          <NavLink to="/login" className="loginBtn">
            Iniciar Sesión
          </NavLink>
        ) : (
          <div className="user-items">
            <h4>ES</h4>
            <img
              src={props.land == null ? "Img/star.svg" : "Img/star_land.svg"}
              alt=""
              className="logo"
              alt=""
              className="money"
            />
            <img
              src={
                currentUser.photoURL === null
                  ? "Img/4411.png"
                  : currentUser.photoURL
              }
              alt="User"
              className="circle-user"
              onClick={() => setOpenPerfil(!openPerfil)}
            />
            {openPerfil ? (
              <div className="modal">
                <img
                  src={
                    currentUser.photoURL === null
                      ? "Img/4411.png"
                      : currentUser.photoURL
                  }
                  alt="User"
                  className="circle-user"
                />
                <p>{currentUser.displayName}</p>

                <button onClick={() => app.auth().signOut()}>
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarHome;
