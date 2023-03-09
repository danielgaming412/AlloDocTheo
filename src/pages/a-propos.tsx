import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import BigRoundLogo from '../../public/images/BigRoundLogo.png';

export default function AboutPage() {
  return (
    <>
      <Seo templateTitle='À propos' />
      <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
        <NextImage
          src={BigRoundLogo}
          width='180'
          height='180'
          alt='Allo Doc Theo'
        />
        <h1 className='mt-4'>Docteur Théodore</h1>
        <p className='my-1 text-gray-800'>
          En tant que médecin généraliste, j'ai à cœur d'aider mes patients à
          atteindre leur plein potentiel de santé. Grâce à mes recherches en
          nutrition anti-inflammatoire, j'ai développé une approche holistique
          pour accompagner chaque individu dans sa quête d'un mode de vie sain
          et équilibré.
        </p>
        <p className='my-1 text-gray-800'>
          Nous ne pouvons éviter le stress de notre quotidien, mais nous avons
          tous en nous la force nécessaire pour y faire face. C'est pourquoi
          j'ai décidé de partager mes connaissances simplifiées à travers ce
          site et mes réseaux sociaux, afin de vous guider dans votre recherche
          d'une meilleure santé.
        </p>
        <p className='mt-1 text-gray-800'>
          Je suis à votre disposition pour répondre à toutes vos questions et
          vous accompagner tout au long de votre parcours vers une vie plus
          saine. Ensemble, nous pouvons atteindre vos objectifs de santé.
        </p>
      </div>
    </>
  );
}
