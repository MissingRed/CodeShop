import React from "react";
import "../Styles/Sidebar.css";

const Sidebar = (props) => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <h3>{props.admin == "true" ? "Opciones" : "Productos"}</h3>
        <div className="prod">
          <p>Todos</p>
          <p>Tarjetas de regalo</p>
          <p>Steam</p>
          <p>Recargables</p>
          <p>League Of Legends</p>
          <p>CS Go</p>
          <p>Clash Of Clans</p>
          <p>Google Play</p>
          <p>Spotify</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
