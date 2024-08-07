"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/menu/menu";

const Home = () => {
  async function inicioSesion(event) {
    event.preventDefault();

    const username = "mau";
    const password = "123456";

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Inicio de sesión exitoso:", data.message);
      // Redirigir o manejar el estado de inicio de sesión exitoso aquí
    } else {
      console.error("Error al iniciar sesión:", data.message);
    }
  }

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
      <button className={styles.contactButton} onClick={inicioSesion}>
        Contact me{" "}
      </button>
      <button onClick={inicioSesion} style={{ backgroundColor: "red" }}>
        salir
      </button>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default Home;
