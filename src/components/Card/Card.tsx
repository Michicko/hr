import styles from "./Card.module.css";

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
  bordered?: boolean;
  bg?: string;
}

export default function Card({ icon, title, text, bordered, bg }: CardProps) {
  return (
    <div
      className={`${styles.card} ${bordered && styles.bordered} ${
        bg && styles[bg]
      }`}
    >
      {icon && icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
