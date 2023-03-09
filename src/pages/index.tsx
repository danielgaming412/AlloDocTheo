import Image from 'next/image';
import * as React from 'react';

import Seo from '@/components/Seo';

import HeaderHero from '../../public/images/large-og.png';
import HeaderHeroMobile from '../../public/images/large-og-mobile.png';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle='Acceuil' />
      <main>
        <section className='bg-white'>
          <div className='h-full w-full lg:h-[100vh]'>
            <Image
              src={HeaderHero}
              alt='Allo Doc Theo'
              className='hidden md:block'
            />
            <Image
              src={HeaderHeroMobile}
              alt='Allo Doc Theo'
              className='block md:hidden'
            />
          </div>
        </section>
      </main>
    </>
  );
}
