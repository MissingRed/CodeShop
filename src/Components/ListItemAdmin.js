import React, { useEffect, useState, useContext } from "react";
import "../Styles/Admin.css";
import { db } from "../Database/Base";
import { AuthContext } from "../Database/Auth";
import ListformAdmin from "../Components/ListformAdmin";
import Swal from "sweetalert2";
import { storage } from "../Database/Base";

function ListItemAdmin() {
  const [productos, SetProductos] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState("");

  const addOrEditLink = async (linkObject) => {
    if (currentId === "") {
      await db.collection(currentUser.uid).doc().set(linkObject);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agrado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      await db.collection(currentUser.uid).doc(currentId).update(linkObject);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto Actualizado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      setCurrentId("");
    }
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("Estas seguro de eliminar el enlace?") === true) {
      await db.collection(currentUser.uid).doc(id).delete();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto Eliminado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const getLinks = async () => {
    db.collection(currentUser.uid).onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      SetProductos(docs);
      // console.log(
      //   storage
      //     .ref("images")
      //     .child("google")
      //     .getDownloadURL()
      //     .then((url) => {
      //       setUrl(url);
      //     })
      // );
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <div className="op">
        <button onClick={() => setOpenModal(!openModal)}>AGREGAR</button>
      </div>
      {openModal ? (
        <div className="modalAdd">
          <ListformAdmin {...{ addOrEditLink, currentId, productos }} />
        </div>
      ) : (
        ""
      )}
      <div className="completos">
        {productos.map((producto) => (
          <div className="itemAdmin" key={producto.id}>
            <div className="info">
              <p>1.</p>
              <div className="img">
                <img src={url} alt="" />
              </div>
              <div className="nombre">
                <p>{producto.name}</p>
              </div>
            </div>
            <div>
              <p>Cantidad: {producto.quantity}</p>
            </div>
            <div>
              <p>Precio: ${producto.price}</p>
            </div>
            <div className="operaciones">
              <i className="red" onClick={() => onDeleteLink(producto.id)}>
                Eliminar
              </i>
              <i className="blue" onClick={() => setCurrentId(producto.id)}>
                Actualizar
              </i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItemAdmin;
