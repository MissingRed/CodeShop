import React from "react";

import NavbarHome from "../Components/NavbarHome";
import { NavLink } from "react-router-dom";

import "../Styles/landingpage.css";

function LandingPage() {
  const videoSource =
    "https://r1---sn-cvb7lne7.googlevideo.com/videoplayback?expire=1605311454&ei=fseuX5n8GYiz4gK785CIDA&ip=59.153.249.0&id=o-AAkpyy46WrUXn69o-ug6jFsSet5bs2J1m8n8tZ8QqVwY&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=33134606&dur=98.698&lmt=1605065109277068&fvip=1&keepalive=yes&c=WEB&txp=5532232&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgIn0ELOPEQS5bj52gURfrkgeTjH0vAYIyln7ur0HwTSACIQCAPZROqogVU4EvTFcAU1H8wzwmOBs8BVixfVP34Yupxw%3D%3D&title=Assassin%27s%2BCreed%2BValhalla%3A%2BLaunch%2BTrailer%2B%7C%2BUbisoft%2B%5BNA%5D&cms_redirect=yes&mh=QB&mip=2800:484:808b:4f00:e1be:5050:6275:7874&mm=31&mn=sn-cvb7lne7&ms=au&mt=1605289723&mv=m&mvi=1&pl=40&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAPl27JW1rsZxEERPGoShntg251fK8Cg46Nr_nhHxM8zqAiEAsSJBg4SAVLZ_QPrqrucAzjZ9sexZA-hAEd5gTI-oIUE%3D";
  return (
    <div className="content">
      <div className="Container">
        <video autoPlay="autoplay" loop="loop" muted className="Video">
          <source src={videoSource} type="video/mp4" />
        </video>

        <div className="Content">
          <div className="SubContent">
            <NavbarHome land="CodeShop" />
            <div className="primary">
              <div className="izquierda">
                <div>
                  <h1>DISFRUTA EN GRANDE</h1>
                  <p>Con el mejor contenido digital</p>
                  <NavLink to="/Home" className="storeBtn">
                    Ir a la Tienda
                  </NavLink>
                </div>
              </div>
              <div className="derecha">
                <img src="Img/xbox.png" alt="xbox" />
                <h3> ̶$̶3̶2̶.̶0̶0̶0̶ HOY $25.900</h3>
              </div>
              {/* <div onClick={() => {}}>PLAY!</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
