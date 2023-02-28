import styles from "../styles/ContentSummarize.module.css";
import { points } from "../utils/points";

export default function ContentSummarize() {
  return (
    <ol className={styles.container}>
      {points.map((point, index) => (
        <a key={index} href={`#${index}`} className={styles.option}>
          <li>{point}</li>
        </a>
      ))}
    </ol>
  );
}
