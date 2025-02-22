import s from './Services.module.css';
import { dataset } from '@/lib/dataset';

const Services = () => {
  return (
    <div className={s.container}>
      {dataset.services.map((item) => {
        const { slug, title, list } = item
        return (
          <div className={s.card_bg} key={slug}>
            <div className={s.card}>
              <h3>{title}</h3>
              <ul>
                {list.map((li, i) => (
                  <li key={i}>
                    <p>
                      {li}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Services;
