import Image from "next/image";
import s from "./page.module.css";
import { Work } from "@/components";

export default function Home() {
  const logos = [
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

  const works = [
    {
      video: '/videos/facu-trainer-fit.mp4',
      titulo: 'Facu Trainer Fit',
      enlace: 'https://facutrainerfit.com.ar/',
      descripcion: 'Landing page hecha en conjunto con un equipo de diseñadores y desarrolladores como proyecto final para el curso de React de Coderhouse.',
      tecnologias: [
        '/images/ts.png',
        '/images/react.png'
      ]
    },
    {
      video: '/videos/facu-trainer-fit.mp4',
      titulo: 'Facu Trainer Fit',
      enlace: 'https://facutrainerfit.com.ar/',
      descripcion: 'Landing page hecha en conjunto con un equipo de diseñadores y desarrolladores como proyecto final para el curso de React de Coderhouse.',
      tecnologias: [
        '/images/ts.png',
        '/images/next.png'
      ]
    }
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
                {logos.map((url)=>(
                  <Image  className={s.main__section__content__logos__img} src={url} key={url} alt="technology-icon" width={30} height={30}/>
                ))}
              </div>
            </div>
            <Image src='/images/perfil.png' alt="profile-picture" width={300} height={300}/>
          </div>
        </div>
        {works.map((data, index) => (
          <Work key={index} data={data} isReverse={index % 2 === 0}/>
        ))}
        <div className={s.main__section}>
          experiencia profesional / marcas
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
