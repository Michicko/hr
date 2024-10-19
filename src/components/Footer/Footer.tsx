import { links } from "../../data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>Hr.</p>
      <div className={styles.links}>
        {links.map((link, i) => {
          return (
            <a className={styles["link"]} href={link.url} key={i}>
              {link.name}
            </a>
          );
        })}
      </div>
    </footer>
  );
}
