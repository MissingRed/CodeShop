import React from "react";
import "../Styles/topbar.css";

const Topbar = (props) => {
  return (
    <React.Fragment>
      <div className="topbar">
        <div className="recoment">
          <div className="item ">
            <p>League Of legends</p>
          </div>
          <div className="item">
            <p>Fortnite</p>
          </div>
          <div className="item negro">
            <p>Play Station</p>
          </div>
          <div className="item">
            <p>Google Play</p>
          </div>
          <div className="item">
            <p>Valorant</p>
          </div>
          <div className="item">
            <p>Clash Of Clans</p>
          </div>
        </div>
        <div className="inputSearch">
          <img src="Img/search.svg" alt="" className="icon1" />
          <input
            type="text"
            name=""
            id=""
            onChange={props.Search}
            className="input-search"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
