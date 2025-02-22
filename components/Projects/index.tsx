'use client'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { dataset } from '@/lib/dataset';

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
          <SwiperSlide key={slug}>
            <video width="320" height="240" muted autoPlay>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default Projects