import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>home page</h1>
      <p>
        <a href="/about">About us</a>
      </p>
    </div>
  );
}
