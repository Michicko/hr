import styles from "./Section.module.css";

interface ImgSectionProps {
  src: string;
  alt?: string;
  roundImg?: boolean;
}

export default function ImgSection({ src, alt, roundImg }: ImgSectionProps) {
  return (
    <div className={`${styles["img-section"]} ${roundImg && styles.rounded}`}>
      <img src={src} alt={alt} />
    </div>
  );
}
