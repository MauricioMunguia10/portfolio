"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./menu.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [clase, setClase] = useState(`${styles.green}`);
  const [hover, setHover] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    setOpen(!open);
  };
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className={styles.box}
        onClick={openMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MenuIcon sx={{ fontSize: 35 }} />
      </div>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        ref={menuRef}
        className={clsx(styles.boxMenu, {
          [styles.visible]: hover || open,
        })}
      ></div>
    </>
  );
};

export default Menu;
