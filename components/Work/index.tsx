import Image from 'next/image';
import s from './work.module.css';
import cs from 'classnames'

interface dataType {    
  video: string,
  titulo: string,
  enlace: string,
  descripcion: string
  tecnologias: string[]
}

const Work = ({ data, isReverse }:{ data: dataType, isReverse: boolean }) => {
  const { video, titulo, enlace, descripcion, tecnologias } = data
  return (
    <section className={cs(s.container, {[s.container__is_reverse] : isReverse})}>
      <video autoPlay loop muted className={s.container__video}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={s.container__info}>
        <h1><a href={enlace}><Image src='/images/link.png' width={20} height={20} alt='link-icon'/>{titulo}</a></h1>
        <p>{descripcion}</p>
        <div className={s.container__info__logos}>
          {tecnologias.map((url) => (
            <Image className={s.container__info__logos__img} src={url} key={url} alt="technology-icon" width={30} height={30}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
