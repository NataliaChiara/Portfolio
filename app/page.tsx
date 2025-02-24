import Hero from "@/components/Hero";
import styles from "./page.module.css";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Hero />
      <Projects />
      <Services />
      <Banner />
      <Experience />
      </main>
      <Footer />
    </div>
  );
}
