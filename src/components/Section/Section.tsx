import { TextSectionProps } from "../../constants";
import ImgSection from "./ImgSection";
import styles from "./Section.module.css";
import TextSection from "./TextSection";

interface SectionProps extends TextSectionProps {
  src?: string;
  alt?: string;
  padded?: boolean;
  children?: React.ReactNode;
  id?: string;
  topNotPadded?: boolean;
  roundImg?: boolean;
  bg?: string;
}

export default function Section({
  heading,
  text,
  button,
  src,
  alt,
  padded,
  children,
  id,
  topNotPadded,
  roundImg,
  bg,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${padded && styles.padded} ${
        !button && styles["no-btn"]
      } ${topNotPadded && styles["pt-0"]} ${bg && styles[bg]}`}
    >
      <TextSection heading={heading} text={text} button={button} />
      {src && <ImgSection src={src} alt={alt} roundImg={roundImg} />}
      {children && children}
    </section>
  );
}
