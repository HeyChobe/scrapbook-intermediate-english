import styles from "../styles/NavBar.module.css";
import { FiMenu } from "react-icons/fi";
import { points } from "../utils/points";
import { useState } from "react";

const toLeftStyle = {
  left: "0%",
};

const toRightStyle = {
  left: "100%",
};

export default function NavBar() {
  const [checked, setCheck] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Intermediate English Scrapbook</h1>
      <FiMenu
        className={styles.icon}
        onClick={() => setCheck((curr) => !curr)}
      />
      <ul className={styles.menu} style={checked ? toLeftStyle : toRightStyle}>
        {points.map((point, index) => (
          <a
            key={index}
            href={`#${index}`}
            onClick={() => setCheck((curr) => !curr)}
          >
            <li className={styles.option}>{point}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
