import Image from 'next/image';
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.container}>
      <a target='__blank' rel='noopener' href=""><Image src='/icons/github.svg' alt='Github logo' width={50} height={50} /></a>
      <a target='__blank' rel='noopener' href="https://www.linkedin.com/in/natalia-chiara/"><Image src='/icons/linkedin.svg' alt='Github logo' width={50} height={50} /></a>
      <a target='__blank' rel='noopener' href=""><Image src='/icons/download.svg' alt='Github logo' width={50} height={50} /></a>
      <a target='__blank' rel='noopener' href=""><Image src='/icons/whatsapp.svg' alt='Github logo' width={50} height={50} /></a>
    </footer>
  );
};

export default Footer;
