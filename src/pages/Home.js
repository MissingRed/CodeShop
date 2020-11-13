import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

import "../Styles/home.css";
import Swal from "sweetalert2";
import firebase from "firebase/app";
import NavbarHome from "../Components/NavbarHome";
import Topbar from "../Components/Topbar";
import Game from "../Components/Game";

const Home = () => {
  var usuario = firebase.auth().currentUser;
  // const [lista] = useState([1, 2, 3, 4, 5]);

  // if (!usuario.emailVerified) {
  //   Swal.fire({
  //     title: "Verifica tu correo!",
  //     text: "Por favor verifica tu correo para poder comprar",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Enviar correo de verifiación",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       usuario
  //         .sendEmailVerification()
  //         .then(function () {})
  //         .catch(function (error) {
  //           alert(error);
  //         });
  //       Swal.fire("Enviado!", "Revisa tu bandeja de entrada", "success");
  //     }
  //   });
  // }

  return (
    <div>
      <NavbarHome home="Tienda" />
      <Topbar />
      <Sidebar />
      <div className="store">
        <div className="forsale">
          <div className="ofert">
            <div className="banner">
              <h3>ASSASSIN'S CREED VALHALLA</h3>
              <div className="botones">
                <div className="button">
                  <p className="buy">Comprar Ahora</p>
                </div>
                <div className="button black">
                  <p className="see">Ver Review</p>
                </div>
              </div>
            </div>
            <video
              src="https://store.ubi.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dw8d0e1650/landings/2020/acv-hero/video.mp4"
              autoPlay
              playsInline
              loop
            ></video>
          </div>
          <div className="video">
            <iframe
              width="100%"
              height="70%"
              src="https://www.youtube.com/embed/7K7xXyNIuv4?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h4 className="title">ASSASSIN'S CREED VALHALLA</h4>
            <p className="subtitle">El Amo y el señor de Inglaterra</p>
          </div>
        </div>
        <div className="shop">
          <Game />
        </div>
      </div>
    </div>
  );
};

export default Home;
