import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <h3>covid-19 tracker</h3>
          </NavLink>
        </div>

        <div className={styles.nav_item}>
          <ul>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/"
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/usa"
            >
              <li>Usa</li>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/italy"
            >
              <li>Italy</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
