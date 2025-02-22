import localFont from 'next/font/local';

export const Futura = localFont({
  src: [
    {
      path: '../public/fonts/Futura-Book-font.woff',
      weight: 'normal',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--f-futura',
  preload: true
});

export const FuturaBold = localFont({
  src: [
    {
      path: '../public/fonts/Futura-Extra-Black-font.woff',
      weight: 'normal',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--f-futura-bold',
  preload: true
});