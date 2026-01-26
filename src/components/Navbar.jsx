import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><a href="#chi-siamo">Chi siamo</a></li>
        <li><a href="#contatti">Contatti</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}
