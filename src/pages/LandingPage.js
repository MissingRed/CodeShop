import React from "react";

import NavbarHome from "../Components/NavbarHome";
import { NavLink } from "react-router-dom";

import "../Styles/landingpage.css";

function LandingPage() {
  const videoSource = "Video/Video_land.mp4";
  return (
    <div className="content">
      <div className="Container">
        <video autoPlay="autoplay" loop="loop" muted className="Video">
          <source src={videoSource} type="video/mp4" />
        </video>

        <div className="Content">
          <div className="SubContent">
            <NavbarHome land="CodeShop" />
            <div className="primary">
              <div className="izquierda">
                <div>
                  <h1>DISFRUTA EN GRANDE</h1>
                  <p>Con el mejor contenido digital</p>
                  <NavLink to="/Home" className="storeBtn">
                    Ir a la Tienda
                  </NavLink>
                </div>
              </div>
              <div className="derecha">
                <img src="Img/xbox.png" alt="xbox" />
                <h3> ̶$̶3̶2̶.̶0̶0̶0̶ HOY $25.900</h3>
              </div>
              {/* <div onClick={() => {}}>PLAY!</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
