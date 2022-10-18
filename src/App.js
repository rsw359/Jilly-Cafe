import "./App.css";
import mountains from "./assets/mountains.png";

import { useState } from "react";
import SideMenu from "./components/side-menu/SideMenu";

const App = () => {
  const [showMenu, setshowMenu] = useState(false);
  const openMenu = () => {
    if (showMenu === false) {
      setshowMenu(true);
    } else if (showMenu === true) {
      setshowMenu(false);
    }
    console.log(showMenu);
  };

  return (
    <>
      <div className="App">
        <div className="box">
          <div className="mtn-box">
            <button id="logo" onClick={openMenu}>
              Jily
            </button>
            <img src={mountains} alt="mtns" />
          </div>
          <SideMenu />
        </div>
      </div>
    </>
  );
};

export default App;
