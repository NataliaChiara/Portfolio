'use client'
import Image from "next/image";
import s from "./page.module.css";
import cs from 'classnames'
import { useState } from "react";
import { ReactSVG } from "react-svg";

export default function Home() {

  const [isLight, setIsLight] = useState(false)

  const logos = [
    '/images/js.png',
    '/images/ts.png',
    '/images/react.png',
    '/images/next.png'
  ]

  const certifications = [
    '/images/certificado-js.jpeg',
    '/images/certificado-python.jpeg',
    '/images/certificado-react.jpeg'
  ]

  const works = [
    {
      video: '/videos/cinemark-hoyts-clon.mp4',
      title: 'Cinemark-Hoyts Clon',
      url: 'https://cinemark-hoyts-clon.vercel.app/',
      description: 'Sitio web de práctica.',
      logos: [
        '/images/ts.png',
        '/images/next.png'
      ]
    },
    {
      video: '/videos/facu-trainer-fit.mp4',
      title: 'Facu Trainer Fit',
      url: 'https://facutrainerfit.com.ar/',
      description: 'Proyecto freelance hecho en conjunto con un equipo de diseñadores y desarrolladores.',
      logos: [
        '/images/ts.png',
        '/images/next.png'
      ]
    },
    // {
    //   video: '/videos/nancy-alicia-rizzo-frontend.mp4',
    //   title: 'Nancy Alicia Rizzo',
    //   url: 'https://github.com/NataliaChiara/Nancy-Alicia-Rizzo-Frontend',
    //   description: 'Landing page de práctica para psicologa hecha con Node para el backend, HTML, CSS y JS para el frontend y SQL para la database.',
    //   logos: [
    //     '/images/js.png',
    //     '/images/node.png',
    //     '/images/sql.png'
    //   ]
    // },
    {
      video: '/videos/luciana-castano.mp4',
      title: 'Luciana Castaño',
      url: 'http://www.luchicastano.com/',
      description: 'Trabajo freelance autonomo de una landing page para una coaching, desde el diseño hasta el manejo del hosting.',
      logos: [
        '/images/ts.png',
        '/images/next.png'
      ]
    }
  ]

  return (
    <div className={isLight ? s.light_page : s.page}>
      <header className={s.header}>
        <button onClick={() => setIsLight(!isLight)}>{isLight? 'dark':'light'}</button>
        <button>change language</button>
      </header>
      <main className={s.main}>
        
        <div className={s.main__section}>
          <div className={s.main__section__content}>
            <div>
              <h1 className={s.main__section__content__title}>NATALIA CHIARA</h1>
              <h2 className={s.main__section__content__subtitle}>Frontend Developer</h2>
              <div className={s.logos}>
                {logos.map((url)=>(
                  <Image  className={s.logos__img} src={url} key={url} alt="technology-icon" width={30} height={30}/>
                ))}
              </div>
            </div>
            <Image src='/images/perfil.png' alt="profile-picture" width={300} height={300}/>
            <button className={s.main__section__content__down_btn}>flecha abajo</button>
          </div>
        </div>
        
        {works.map((data, index) => {
          const { video, title, url, description, logos } = data
          return (
            <div key={index} className={s.main__section}>
              <div className={cs(s.main__section__container, {[s.main__section__container__is_reverse] : index % 2 === 0})}>
                <div className={s.main__section__container__video_container}>
                  <ReactSVG className={s.main__section__container__video_container__svg} src="/icons/notebook_outline.svg"/>
                  <video autoPlay loop muted className={s.main__section__container__video}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className={s.main__section__container__info}>
                  <h1><a href={url} target="__blank"><Image src='/images/link.png' width={20} height={20} alt='link-icon'/>{title}</a></h1>
                  <p>{description}</p>
                  <div className={s.logos}>
                    {logos.map((url) => (
                      <Image className={s.logos__img} src={url} key={url} alt="technology-icon" width={30} height={30}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* <div className={s.main__section}>
          experiencia profesional / marcas
        </div> */}
        
        <div className={s.main__section}>
          <div className={s.main__section__content}>
            <span className={s.main__section__content__top}><p>Top<br/>10</p></span>
            <div className={s.main__section__content__certifications}>
            <h3>Certificaciones</h3>
              <div className={s.main__section__content__certifications__images}>
                {certifications.map((url) => (
                  <Image className={s.main__section__content__certifications__images__img} key={url} src={url} alt="certification" width={300} height={250}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={s.footer}>
        contacto / descarga pdf - cv
      </footer>
    </div>
  );
}
