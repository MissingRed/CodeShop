import React, { useState, useContext } from "react";
import "../Styles/topbar.css";
import NavbarHome from "../Components/NavbarHome";
import Sidebar from "../Components/Sidebar";
import ListItemAdmin from "../Components/ListItemAdmin";
// import ListformAdmin from "../Components/ListformAdmin";
import { AuthContext } from "../Database/Auth";
import { withRouter, Redirect } from "react-router";

const Admin = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <React.Fragment>
      {currentUser.email == "rodriguezdaniel048@gmail.com" ? (
        <div>
          <NavbarHome admin="Admin" />
          <Sidebar admin="true" />

          <div className="store">
            <h2>Lista de productos</h2>

            <div className="lista">
              <ListItemAdmin />
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/Home" />
      )}
    </React.Fragment>
  );
};

export default Admin;
