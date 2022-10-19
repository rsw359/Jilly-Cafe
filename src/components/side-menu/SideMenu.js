import React, {useEffect, useState} from "react";
import sideMenuStyles from "./SideMenu.module.css";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const SideMenu = ({ showMenu, openMenu }) => {

  const [secondRender, setSecondRender] = useState(false);

  useEffect(() => {
    if (showMenu) {
      setSecondRender(true);
    }
  }, [showMenu]);
  
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
