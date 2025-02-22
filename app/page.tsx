import Hero from "@/components/Hero";
import styles from "./page.module.css";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Hero />
      <Projects />
      <Services />
      </main>
      <footer className={styles.footer}>
       <span>footer</span>
      </footer>
    </div>
  );
}
