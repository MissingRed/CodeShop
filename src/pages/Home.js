import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../Components/Sidebar";
import { db } from "../Database/Base";
import "../Styles/home.css";
import Swal from "sweetalert2";
// import firebase from "firebase/app";
import NavbarHome from "../Components/NavbarHome";
import Topbar from "../Components/Topbar";
import Game from "../Components/Game";

import { AuthContext } from "../Database/Auth";

const Home = () => {
  // var usuario = firebase.auth().currentUser;
  const { currentUser } = useContext(AuthContext);
  const [SearchResult, setSearchResult] = useState([]);
  const [InputSearch, SetInputSearch] = useState("");

  const handleChangeSearch = async (e) => {
    SetInputSearch(e.target.value);

    if (e.target.value) {
      const user = await db
        .collection("Games")
        .limit(10)
        .where("name", ">=", e.target.value)
        .where("name", "<=", e.target.value + "\uf8ff")
        .get();

      const docs = [];

      user.forEach((doc) => {
        docs.push({
          name: doc.get("name"),
          price: doc.get("price"),
          quantity: doc.get("quantity"),
          url: doc.get("url"),
        });
      });
      console.log(docs);
      setSearchResult(docs);
      SearchResult.map((res) => console.log(res.name));
    } else {
      setSearchResult([]);
    }
  };

  const handleChangeFilter = async (e) => {
    SetInputSearch(e.target.value);

    if (e.target.value) {
      const user = await db
        .collection("Games")
        .limit(10)
        .where("category", ">=", e.target.value)
        .where("category", "<=", e.target.value + "\uf8ff")
        .get();

      const docs = [];

      user.forEach((doc) => {
        docs.push({
          name: doc.get("name"),
          price: doc.get("price"),
          quantity: doc.get("quantity"),
          url: doc.get("url"),
        });
      });
      console.log(docs);
      setSearchResult(docs);
      SearchResult.map((res) => console.log(res.name));
    } else {
      setSearchResult([]);
    }
  };

  const seares = () => {
    var name = "";
    name = SearchResult.map((res) => (
      <div className="card">
        <div className="start1">
          <img src="Img/start1.svg" alt="" />
        </div>
        <div className="section">
          <img src={res.url} className="photo" />
        </div>

        <div className="data">
          <p className="titleGame">{res.name}</p>

          <p className="precio">${res.price}</p>
        </div>

        <div className="add">
          <div className="circle1">
            <img src="Img/plus.svg" alt="" />
          </div>
        </div>
      </div>
    ));

    return name;
  };
  // const [lista] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    if (currentUser) {
      if (!currentUser.emailVerified) {
        Swal.fire({
          title: "Verifica tu correo!",
          text: "Por favor verifica tu correo para poder comprar",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Enviar correo de verifiación",
        }).then((result) => {
          if (result.isConfirmed) {
            currentUser
              .sendEmailVerification()
              .then(function () {})
              .catch(function (error) {
                alert(error);
              });
            Swal.fire("Enviado!", "Revisa tu bandeja de entrada", "success");
          }
        });
      }
    }
  }, []);

  return (
    <div>
      <div className="sticky-header">
        <NavbarHome home="Tienda" />
        <Topbar Search={handleChangeSearch} Filter={handleChangeFilter} />
      </div>

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
          <div
            onChange={(handleChangeSearch, handleChangeFilter)}
            className="Hola"
          >
            {InputSearch ? (
              <div className="cardSearch">{seares()}</div>
            ) : (
              <Game />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
