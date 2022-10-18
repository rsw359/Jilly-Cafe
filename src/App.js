import "./App.css";
import mountains from "./assets/mountains.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import SideMenu from "./components/side-menu/SideMenu";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    setShowMenu(!showMenu);
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
          <Router>
            <Routes>
              <Route
                path="/"
                element={<SideMenu showMenu={showMenu} openMenu={openMenu} />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
