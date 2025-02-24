'use client'

import { dataset } from '@/lib/dataset';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import s from './Experience.module.css';

const Experience = () => {
  return (
    <Swiper
      className={s.swiper}
      modules={[Navigation]}
      navigation
    >
      {dataset.experience.map((ex) => {
        const { slug, title, subtitle, list } = ex

        return (
          <SwiperSlide key={slug} className={s.slide}>
            <div className={s.info}>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <ul>
                {list.map((li) => (
                  <li key={li}>~ {li}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default Experience;
