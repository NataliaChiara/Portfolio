import Image from 'next/image';
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.container}>
      <a target='__blank' rel='noopener' href="https://github.com/NataliaChiara"><Image src='/icons/github.svg' alt='Github logo' width={50} height={50} /></a>
      <a target='__blank' rel='noopener' href="https://www.linkedin.com/in/natalia-chiara/"><Image src='/icons/linkedin.svg' alt='Github logo' width={50} height={50} /></a>
      <a target='__blank' rel='noopener' href="documento.pdf" download><Image src='/icons/download.svg' alt='Github logo' width={50} height={50} /></a>
      <a target='__blank' rel='noopener' href="https://api.whatsapp.com/send?phone=5491150475451&text=Hola%20Natalia!"><Image src='/icons/whatsapp.svg' alt='Github logo' width={50} height={50} /></a>
    </footer>
  );
};

export default Footer;
