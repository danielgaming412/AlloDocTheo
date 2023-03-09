import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import BigRoundLogo from '../../public/images/BigRoundLogo.png';
import HeaderHero from '../../public/images/large-og.png';
import HeaderHeroMobile from '../../public/images/large-og-mobile.png';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

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

          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <NextImage
              src={BigRoundLogo}
              width='180'
              height='180'
              alt='Allo Doc Theo'
            />
            <h1 className='mt-4'>Docteur Théodore</h1>
            <p className='mt-2 text-sm text-gray-800'>
              Médecin généraliste spécialisé en nutrition anti-inflammatoire,
              j'aide mes patients à adopter un mode de vie sain et équilibré. À
              travers ce site, je souhaite vous transmettre tout mon savoir et
              vous guider pour adopter les bases pour maîtriser votre santé !
            </p>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} Par{' '}
              <UnderlineLink href=''>Docteur Théodore</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
