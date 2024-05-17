import styles from "./page.module.css";
import { MyApp } from "@/client/MemoTests";

export default function Home() {
  return (
    <main className={styles.main}>
      <MyApp />
    </main>
  );
}
