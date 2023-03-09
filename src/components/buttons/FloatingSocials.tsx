import Link from 'next/link';
import { BsInstagram, BsTelegram, BsTiktok, BsYoutube } from 'react-icons/bs';

export default function FloatinSocials() {
  return (
    <div className='z-90 fixed right-8 bottom-16 flex-col md:flex'>
      <Link
        title='Contact Sale'
        href='https://tiktok.com'
        className='my-3 h-12 w-12 items-center justify-center rounded-full bg-black text-4xl text-white drop-shadow-lg duration-300 hover:animate-bounce hover:bg-primary-700 hover:drop-shadow-2xl md:flex'
      >
        <BsTiktok className='w-6' />
      </Link>
      <Link
        title='Contact Sale'
        href='https://instagram.com'
        className=' my-3  h-12 w-12 items-center justify-center rounded-full bg-black text-4xl text-white drop-shadow-lg duration-300 hover:animate-bounce hover:bg-primary-700 hover:drop-shadow-2xl md:flex'
      >
        <BsInstagram className='w-6' />
      </Link>
      <Link
        title='Contact Sale'
        href='https://youtube.com'
        className='my-3 h-12 w-12 items-center justify-center rounded-full bg-black text-4xl text-white drop-shadow-lg duration-300 hover:animate-bounce hover:bg-primary-700 hover:drop-shadow-2xl md:flex'
      >
        <BsYoutube className='w-6' />
      </Link>
      <Link
        title='Contact Sale'
        href='https://telegram.com'
        className='my-3 h-12 w-12 items-center justify-center rounded-full bg-black text-4xl text-white drop-shadow-lg duration-300 hover:animate-bounce hover:bg-primary-700 hover:drop-shadow-2xl md:flex'
      >
        <BsTelegram className='w-6' />
      </Link>
    </div>
  );
}
