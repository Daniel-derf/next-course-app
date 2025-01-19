import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>home page</h1>
      <p>
        <Link href="/about">About us</Link>
      </p>
    </div>
  );
}
