import styles from "./Button.module.css";
import ArrowUp from "../../assets/arrow-up-right.svg?react";

interface ButtonProps {
  text: string;
  handleOnClick?: () => void;
  id?: string;
}

export default function Button({ text, handleOnClick, id }: ButtonProps) {
  return (
    <button className={styles.button} onClick={handleOnClick} id={id}>
      {text}
      <div className={styles["icon-box"]}>
        <ArrowUp className={`${styles.icon} icon md`} />
      </div>
    </button>
  );
}
