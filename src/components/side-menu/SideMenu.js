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
    <div
      className={
        showMenu 
        ? sideMenuStyles['shown'] 
        : secondRender
          ? sideMenuStyles['hidden']
          : sideMenuStyles['first-render']
      }
    >
      <div className={sideMenuStyles['menu-icon']} onClick={openMenu}>
        {showMenu ? (
          
          <IoMdClose className={sideMenuStyles['menu-close']} />
          ) : (
          <IoMdMenu className={sideMenuStyles['menu-open']}/>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
