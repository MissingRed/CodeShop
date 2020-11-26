import React, { useCallback, useContext } from "react";
import Swal from "sweetalert2";
import { withRouter, Redirect } from "react-router";
import "../Styles/login.css";
import { NavLink } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";
import app from "../Database/Base.js";
import { AuthContext } from "../Database/Auth.js";

const Login = ({ history }) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Home");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error,
        });
      }
    },
    [history]
  );

  const googleAuth = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .catch((err) => {
        alert(err);
      });
  };
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    if (currentUser.email == "rodriguezdaniel048@gmail.com") {
      return <Redirect to="/Admin" />;
    } else {
      return <Redirect to="/Home" />;
    }
  }

  return (
    <div className="divLogin">
      <div className="log">
        <h4>BIENVENIDO A</h4>
        <div className="logo">
          <img src="Img/Logo.svg" alt="" />
          <h1>CodeShop</h1>
        </div>
        <div className="register">
          <p>Inicia sesión para comprar los juegos que mas te gustan </p>
          <form onSubmit={handleLogin}>
            <div className="inputUser">
              <img src="Img/user.svg" alt="" className="icon" />
              <input className="input-field" name="email" type="email" />
            </div>

            <div className="inputUser">
              <img src="Img/lock.svg" alt="" className="icon" />
              <input type="password" name="password" className="input-field" />
            </div>
            <button type="submit">INICIAR SESIÓN</button>
            <img
              src="Img/google.png"
              alt="Google"
              onClick={googleAuth}
              className="AuthGoogle"
            />
          </form>
        </div>

        <span className="create">
          <p>¿No tienes una cuenta?</p>
          <NavLink to="/Register">Registrate Ahora!</NavLink>
        </span>
      </div>
      <div className="image">
        <div className="paper">
          <img src="Img/Logo_land.svg" alt="" />
          <h1>CodeShop</h1>
          <p>
            Compra los juegos que mas te gustan de manera digital y de forma
            segura
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
