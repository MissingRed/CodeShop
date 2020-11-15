import React, { useEffect, useState, useContext } from "react";
import "../Styles/game.css";
import { db } from "../Database/Base";
import { AuthContext } from "../Database/Auth";

function Game() {
  const [productos, SetProductos] = useState([]);

  const getLinks = async () => {
    db.collection("Games").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      SetProductos(docs);
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      {productos.map((producto) => (
        <div className="card">
          <div className="start1">
            <img src="Img/start1.svg" alt="" />
          </div>
          <div className="section">
            <img src={producto.url} className="photo" />
          </div>

          <div className="data">
            <p className="titleGame">{producto.name}</p>

            <p className="precio">${producto.price}</p>
          </div>

          <div className="add">
            <div className="circle1">
              <img src="Img/plus.svg" alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Game;
