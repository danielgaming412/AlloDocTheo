import * as React from 'react';

import FloatinSocials from '@/components/buttons/FloatingSocials';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />

      <FloatinSocials />
      {children}

      <Footer />
    </>
  );
}
