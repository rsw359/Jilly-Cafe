import React from "react";
import "./SideMenu.css";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={showMenu ? "shown" : "hidden"}>
      {
        <div className="menu-icon" onClick={openMenu}>
          {!showMenu ? (
            <IoMdMenu className="menu-open" />
          ) : (
            <IoMdClose
              className={showMenu ? "menu-close" : "close-animation"}
            />
          )}
        </div>
      }
    </div>
  );
};

export default SideMenu;
