import React, { useCallback, useContext } from "react";
import Swal from "sweetalert2";
import "../Styles/login.css";
import { NavLink } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import app from "../Database/Base.js";

const Register = ({ history }) => {
  var usuario = firebase.auth().currentUser;
  const handleRegister = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, user } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(function (result) {
            return result.user.updateProfile({
              displayName: user.value,
            });
          });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cuenta creada con exito",
          showConfirmButton: false,
          timer: 1500,
        });
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

  return (
    <div className="divLogin">
      <div className="log">
        <div className="return">
          <NavLink to="/">
            <img src="Img/left.svg" alt="" />
          </NavLink>
        </div>

        <h4>BIENVENIDO A</h4>
        <div className="logo">
          <div className="circle"> </div>
          <h1>LOGO</h1>
        </div>
        <div className="register">
          <p>Crea tu cuenta para comprar los juegos que mas te gustan</p>
          <form onSubmit={handleRegister}>
            <div className="inputUser">
              <img src="Img/user.svg" alt="" className="icon" />
              <input className="input-field" name="user" type="text" />
            </div>
            <div className="inputUser">
              <img src="Img/mail.svg" alt="" className="icon" />
              <input className="input-field" name="email" type="email" />
            </div>
            {/* <div className="inputUser">
              <img src="Img/lock.svg" alt="" className="icon" />
              <input className="input-field" name="email" type="email" />
            </div> */}

            <div className="inputUser">
              <img src="Img/lock.svg" alt="" className="icon" />
              <input type="password" name="password" className="input-field" />
            </div>
            <button type="submit">CREAR CUENTA</button>
            <img src="Img/google.png" alt="Google" className="AuthGoogle" />
          </form>
        </div>
      </div>
      <div className="image">
        <div className="paper">
          <img src="Img/circle.png" alt="" />
          <h1>LOGO</h1>
          <p>
            Compra los juegos que mas te gustan de manera digital y de forma
            segura
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
