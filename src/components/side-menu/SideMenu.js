import React from "react";
import "./SideMenu.css";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const SideMenu = ({ showMenu, openMenu }) => {
  return (
    <div className={showMenu ? "shown" : "hidden"}>
      {
        <div className="menu-icon" onClick={openMenu}>
          {!showMenu ? (
            <IoMdMenu className="menu-open" />
          ) : (
            <IoMdClose className="menu-close" />
          )}
        </div>
      }
    </div>
  );
};

export default SideMenu;
