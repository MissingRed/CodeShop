import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/landingpage.css";

function LandingPage() {
  return (
    <div className="content">
      <img src="Img/Rectangle 5.svg" alt="fondo" className="wall" />
      <Navbar></Navbar>
      <div className="primary">
        <div className="izquierda">
          <div>
            <h1>DISFRUTA EN GRANDE</h1>
            <p>Con el mejor contenido digital</p>
            <button>Obtener más</button>
          </div>
        </div>
        <div className="derecha">
          <img src="Img/xbox.png" alt="xbox" />
          <h3> ̶$̶3̶2̶.̶0̶0̶0̶ HOY $25.900</h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
