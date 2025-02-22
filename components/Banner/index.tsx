import Image from 'next/image';
import s from './Banner.module.css';
import Marquee from "react-fast-marquee";
import { dataset } from '@/lib/dataset';

const Banner = () => {
  return (
    <div className={s.container}>
      <Marquee>
        {dataset.clients.map((client) => (
          <div className={s.card} key={client}>
            <Image src={client} alt='Brand Logo' width={150} height={100} />
          </div>
        ))}

      </Marquee>
    </div>
  );
};

export default Banner;
