'use client'
import Image from "next/image";
import s from "./page.module.css";
import cs from 'classnames'
import { useState } from "react";

export default function Home() {

  const [isLight, setIsLight] = useState(false)

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
      video: '/videos/cinemark-hoyts-clon.mp4',
      titulo: 'Cinemark-Hoyts Clon',
      enlace: 'https://cinemark-hoyts-clon.vercel.app/',
      descripcion: 'Clon de la web de Cinemark-Hoyts',
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
    <div className={isLight ? s.light_page : s.page}>
      <button className={s.change_mode_btn} onClick={() => setIsLight(!isLight)}>{isLight? 'dark':'light'}</button>
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

        {works.map((data, index) => {
          const { video, titulo, enlace, descripcion, tecnologias } = data
          return (
            <div key={index} className={s.main__section}>
              <div className={cs(s.main__section__container, {[s.main__section__container__is_reverse] : index % 2 === 0})}>
                <video autoPlay loop muted className={s.main__section__container__video}>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className={s.main__section__container__info}>
                  <h1><a href={enlace}><Image src='/images/link.png' width={20} height={20} alt='link-icon'/>{titulo}</a></h1>
                  <p>{descripcion}</p>
                  <div className={s.main__section__container__info__logos}>
                    {tecnologias.map((url) => (
                      <Image className={s.main__section__container__info__logos__img} src={url} key={url} alt="technology-icon" width={30} height={30}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}

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
