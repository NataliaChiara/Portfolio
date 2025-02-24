import Image from 'next/image';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.container__info}>
        <div className={s.container__info__texts}>
          <div>
            <h2>NATALIA CHIARA</h2>
            <h1>Frontend Developer - Web Analytics</h1>
          </div>
          <div  className={s.container__info__texts__location}>
            <Image src='/images/location-pin.png' alt='Location pin' width={24} height={24} />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
        <Image className={s.profile} src='/images/perfil.png' alt='Avatar' width={300} height={300} />
      </div>
    </div>
  );
};

export default Hero;
