import styles from "../styles/Subtitle.module.css";

export default function Subtitle({ info }) {
  return <h3 className={styles.info}>{info}</h3>;
}
