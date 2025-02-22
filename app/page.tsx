import Hero from "@/components/Hero";
import styles from "./page.module.css";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Hero />
      <Services />
      </main>
      <footer className={styles.footer}>
       <span>footer</span>
      </footer>
    </div>
  );
}
