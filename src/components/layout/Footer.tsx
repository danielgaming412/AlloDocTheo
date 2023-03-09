import UnderlineLink from '@/components/links/UnderlineLink';

export default function FooterComponent() {
  return (
    <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
      <footer className='absolute bottom-2 text-gray-700'>
        © {new Date().getFullYear()} Par{' '}
        <UnderlineLink href='/a-propos'>Docteur Théodore</UnderlineLink>
      </footer>
    </div>
  );
}
