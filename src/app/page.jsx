import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/menu/menu";

const Home = () => {
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
      <button className={styles.contactButton}>Contact me </button>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default Home;
