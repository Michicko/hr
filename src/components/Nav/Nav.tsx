import Button from "../Button/Button";
import styles from "./Nav.module.css";
import Menu from "../../assets/menu.svg?react";
import Close from "../../assets/close.svg?react";
import { useState } from "react";
import { links } from "../../data";

export default function Nav() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {links.map((link, i) => {
          return (
            <a className={styles["nav-link"]} href={link.url} key={i}>
              {link.name}
            </a>
          );
        })}
      </div>
      <p className={styles.logo}>Hr.</p>

      <Button text="Request a Demo"  />
      <button
        className={styles["hamburger-menu"]}
        onClick={() => setIsSidebarOpened(!isSidebarOpened)}
      >
        {isSidebarOpened ? (
          <Close className="icon" />
        ) : (
          <Menu className="icon" />
        )}
      </button>
      <aside
        className={`${styles.sidebar} ${
          isSidebarOpened ? styles.isOpened : ""
        }`}
      >
        <Button
          text="Get started"
          handleOnClick={() => setIsSidebarOpened(false)}
        />
        <div className={`${styles["links"]} ${styles.mobile}`}>
          {links.map((link, i) => {
            return (
              <a
                className={styles["nav-link"]}
                href={link.url}
                key={i}
                onClick={() => setIsSidebarOpened(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </aside>
    </nav>
  );
}
