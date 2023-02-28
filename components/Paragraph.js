import styles from "../styles/Paragraph.module.css";

export default function Paragraph({ info, li, li2, li3, li4 }) {
  if (li) return <li className={styles.li}>{info}</li>;
  if (li2) return <li className={styles.li2}>{info}</li>;
  if (li3) return <li className={styles.li3}>{info}</li>;
  if (li4) return <li className={styles.li4}>{info}</li>;

  return <p className={styles.info}>{info}</p>;
}
