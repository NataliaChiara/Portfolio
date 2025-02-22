import s from './Services.module.css';

const Services = () => {

  const data = [
    {
      slug: 'fullstack-developer',
      title: 'Fullstack Developer',
      list: [
        'Desarrollo de webs responsive.',
        'Implementacion e integracion de APIs RESTful',
        'Mantenimiento de codigo.'
      ]
    },
    {
      slug: 'web-analytics',
      title: 'Web Analytics',
      list: [
        'Implementacion de tracking.',
        'Integraciones con pixels.',
        'Elaboracion de reportes.'
      ]
    }
  ]

  return (
    <div className={s.container}>
      {data.map((item) => {
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
