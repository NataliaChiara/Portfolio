import Image from "next/image";
import s from "./page.module.css";

export default function Home() {
  const data = [
    '/images/js.png',
    '/images/ts.png',
    '/images/react.png',
    '/images/next.png',
    '/images/python.png',
    '/images/django.png',
    '/images/node.png',
  ]

  const certificados = [
    '/images/certificado-js.jpeg',
    '/images/certificado-react.jpeg',
    '/images/certificado-python.jpeg'
  ]

  return (
    <div className={s.page}>
      <main className={s.main}>
        <div className={s.main__section}>
          <div className={s.main__section__content}>
            <div>
              <h1 className={s.main__section__content__title}>NATALIA CHIARA</h1>
              <h2 className={s.main__section__content__subtitle}>Frontend Developer</h2>
              <div className={s.main__section__content__logos}>
                {data.map((url)=>(
                  <Image  className={s.main__section__content__logos__img} src={url} key={url} alt="technology-icon" width={30} height={30}/>
                ))}
              </div>
            </div>
            <Image src='/images/perfil.png' alt="profile-picture" width={300} height={300}/>
          </div>
        </div>

        <div className={s.main__section}>
          trabajos
        </div>
        
        <div className={s.main__section}>
          experiencia profesional
        </div>

        <div className={s.main__section}>
          <div className={s.main__section__content}>
          <span className={s.main__section__content__top}><p>Top<br/>10</p></span>
            <div className={s.main__section__content__certifications}>
            <h3>Certificaciones</h3>
              <div className={s.main__section__content__certifications__images}>
                {certificados.map((url) => (
                  <Image className={s.main__section__content__certifications__img} key={url} src={url} alt="certification" width={300} height={250}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={s.footer}>
        contacto
      </footer>
    </div>
  );
}
