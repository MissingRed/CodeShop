import React from "react";
import "../Styles/topbar.css";

const Topbar = (props) => {
  return (
    <React.Fragment>
      <div className="topbar">
        <div className="recoment">
          <div className="item">
            <button onClick={props.Filter} value="">
              Todos
            </button>
          </div>
          <div className="item">
            <button onClick={props.Filter} value="League Of Legends">
              League Of Legends
            </button>
          </div>
          <div className="item">
            <button onClick={props.Filter} value="Fortnite">
              Fortnite
            </button>
          </div>
          <div className="item">
            <button onClick={props.Filter} value="Play Station">
              Play Station
            </button>
          </div>

          <div className="item">
            <button onClick={props.Filter} value="Valorant">
              Valorant
            </button>
          </div>
          <div className="item">
            <button onClick={props.Filter} value="Clash Of Clans">
              Clash Of Clans
            </button>
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
          {/* <button onClick={props.Filter} value="Putos">
            Hola
          </button> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
