"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/menu/menu";
import Cookie from "js-cookie";

const Home = () => {
  const logOut = () => {
    Cookie.remove("token");
    Cookie.remove("roles");
  };
  const logIn = () => {
    Cookie.set("token", "123456789", { httpOnly: true, expires: 1 });
    Cookie.set("roles", "user", { httpOnly: true, expires: 1 });
  };
  return (
    <div className={styles.home}>
      <Image
        src="/mLogo.png"
        alt="Logo"
        width={50}
        height={50}
        className={styles.logo}
      />
      <h1 className={styles.name}>MMG</h1>
      <button className={styles.contactButton} onClick={logIn}>
        Contact me{" "}
      </button>
      <button onClick={logOut} style={{ backgroundColor: "red" }}>
        salir
      </button>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default Home;
