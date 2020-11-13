import React, { useState, useEffect, useContext } from "react";
import { db } from "../Database/Base";
import { AuthContext } from "../Database/Auth";
import { storage } from "../Database/Base";

const ListformAdmin = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const initStateValue = {
    name: "",
    quantity: "",
    price: "",
    img: "",
  };

  const [values, setValues] = useState(initStateValue);
  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateImg();
    setValues({ ...initStateValue });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection(currentUser.uid).doc(id).get();
    setValues({ ...doc.data() });
  };

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const updateImg = () => {
    const uploadTask = storage.ref(`images/${values.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(values.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            props.addOrEditLink({ ...values, url: url });
          });
      }
    );
  };

  console.log("image:", image);
  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initStateValue });
    } else {
      getLinkById(props.currentId);
    }
  }, [props.currentId]);

  return (
    <>
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          name="name"
          onChange={handleInputChange}
          value={values.name}
        />
        <input
          name="quantity"
          placeholder="Numero de unidades"
          onChange={handleInputChange}
          value={values.quantity}
        ></input>
        <input
          name="price"
          placeholder="Precio"
          onChange={handleInputChange}
          value={values.price}
        ></input>
        <input type="file" name="" id="" onChange={uploadImage} />

        <button className="button">
          {props.currentId === "" ? "Guardar Link" : "Actualizar"}
        </button>
      </form>
    </>
  );
};

export default ListformAdmin;
