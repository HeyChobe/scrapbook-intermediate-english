import styles from "@/styles/Example.module.css";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Example({ example, cite }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.top} onClick={() => setOpen((curr) => !curr)}>
        <p className={styles.title}>Example</p>
        {open ? (
          <FaAngleUp className={styles["icon-up"]} />
        ) : (
          <FaAngleDown className={styles["icon-down"]} />
        )}
      </div>
      <div
        className={styles.down}
        style={open ? { display: "flex" } : { display: "none" }}
      >
        <p className={styles.example}>{`"${example}"`}</p>
        <p className={styles.cite}>{cite}</p>
      </div>
    </div>
  );
}
