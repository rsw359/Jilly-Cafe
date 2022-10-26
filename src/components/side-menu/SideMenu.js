import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sideMenuStyles from "./SideMenu.module.css";
import {
  IoMdImage,
  IoIosIceCream,
  IoMdContacts,
  IoLogoInstagram,
  IoMdMenu,
  IoMdClose,
} from "react-icons/io";

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
          ? sideMenuStyles["shown"]
          : secondRender
          ? sideMenuStyles["hidden"]
          : sideMenuStyles["first-render"]
      }
    >
      <div className={sideMenuStyles["menu-icon"]} onClick={openMenu}>
        {showMenu ? (
          <IoMdClose className={sideMenuStyles["menu-close"]} />
        ) : (
          <IoMdMenu className={sideMenuStyles["menu-open"]} />
        )}
      </div>
      <div>
        <nav>
          <ul
            className={
              showMenu
                ? sideMenuStyles["ul-item"]
                : sideMenuStyles["ul-item-hidden"]
            }
          >
            <li
              className={
                showMenu ? sideMenuStyles["li-item"] : sideMenuStyles["li-hide"]
              }
            >
              <IoIosIceCream />
              <Link className={sideMenuStyles["link-text"]} to="/">
                Shop
              </Link>
            </li>
            <li className={sideMenuStyles["li-item"]}>
              <IoMdImage />
              <Link className={sideMenuStyles["link-text"]} to="/">
                Photos
              </Link>
            </li>
            <li className={sideMenuStyles["li-item"]}>
              <IoMdContacts />
              <Link className={sideMenuStyles["link-text"]} to="/">
                Contact
              </Link>
            </li>
            <li className={sideMenuStyles["li-item"]}>
              <IoLogoInstagram />
              <Link className={sideMenuStyles["link-text"]} to="/">
                Instagram
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
