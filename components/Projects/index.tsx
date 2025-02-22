'use client'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { dataset } from '@/lib/dataset';
import s from './Projects.module.css'

const Projects = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      {dataset.projects.map((project) => {
        const { slug, title, subtitle, tecnhologies, video } = project
        return (
          <SwiperSlide key={slug} className={s.slide}>
            <video className={s.video} muted loop autoPlay playsInline preload='auto'>
              <source src={video} type="video/mp4" />
            </video>
            <div className={s.texts}>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <ul>
                {tecnhologies.map((tec)=>(
                  <li key={tec}>~ {tec}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default Projects