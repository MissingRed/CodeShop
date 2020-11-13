import React, { useContext, useState } from "react";
import "../Styles/navbarhome.css";
import { AuthContext } from "../Database/Auth";
import app from "../Database/Base.js";

const NavbarHome = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [openPerfil, setOpenPerfil] = useState(false);
  console.log(currentUser);

  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const current = { lat, lon };
    console.log(current);
  });
  return (
    <>
      <div className="top">
        <div className="left">
          <img src="Img/align-justify.svg" alt="" className="lateral" />
          <h3>{props.admin == null ? "Tienda" : props.admin}</h3>
        </div>
        <div>
          <img src="Img/Logo.svg" alt="" className="logo" />
        </div>

        <div className="user-items">
          <h4>HOLA PUTO</h4>
          <img src="Img/star.svg" alt="" className="money" />
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
      </div>
    </>
  );
};

export default NavbarHome;
