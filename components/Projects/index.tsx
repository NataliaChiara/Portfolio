'use client'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { dataset } from '@/lib/dataset';
import s from './Projects.module.css'
import useIsMobile from '@/hooks/use-is-mobile';

const Projects = () => {
  const isMobile = useIsMobile()
  return (
    <Swiper
      className={s.swiper}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      {dataset.projects.map((project) => {
        const { slug, title, subtitle, tecnhologies, video } = project

        return (
          <SwiperSlide key={slug} className={s.slide}>
            {isMobile != null && (
              <video className={s.video} muted loop autoPlay playsInline preload='auto'>
                <source src={isMobile ? video.mobile : video.desktop} type="video/mp4" />
              </video>
            )}

            <div className={s.texts}>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <ul>
                {tecnhologies.map((tec) => (
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