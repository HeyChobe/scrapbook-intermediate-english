import styles from "../styles/ImportantBox.module.css";

export default function ImportantBox({ text }) {
  return (
    <div className={styles.container}>
      <p className={styles.info}>{text}</p>
    </div>
  );
}
