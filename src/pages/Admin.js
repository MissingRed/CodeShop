import React, { useState } from "react";
import "../Styles/topbar.css";
import NavbarHome from "../Components/NavbarHome";
import Sidebar from "../Components/Sidebar";
import ListItemAdmin from "../Components/ListItemAdmin";
// import ListformAdmin from "../Components/ListformAdmin";

const Admin = () => {
  return (
    <React.Fragment>
      <NavbarHome admin="Admin" />
      <Sidebar admin="true" />

      <div className="store">
        <h2>Lista de productos</h2>

        <div className="lista">
          <ListItemAdmin />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
