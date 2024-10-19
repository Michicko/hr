import { TextSectionProps } from "../../constants";
import styles from "./Section.module.css";

export default function TextSection({
  heading,
  text,
  button,
}: TextSectionProps) {
  return (
    <div className={styles["text-section"]}>
      {heading}
      <div className={styles.box}>
        {text}
        {button}
      </div>
    </div>
  );
}
