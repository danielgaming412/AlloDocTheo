import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { GiFruitBowl } from 'react-icons/gi';
import { MdOutlineSick, MdTranslate } from 'react-icons/md';

import NextImage from '@/components/NextImage';

const products = [
  {
    name: 'Alimentation',
    description: 'Dites-moi ce que vous mangez, je vous dirais qui vous êtes !',
    href: '/alimentation',
    icon: GiFruitBowl,
  },
  {
    name: 'Micro-Nutrition ',
    description: 'À chacun·e ses vitamines et nutriments',
    href: '/micronutrition',
    icon: BsFillSearchHeartFill,
  },
  {
    name: 'Les mots barbares',
    description: "Colique néphré.. quoi ? C'est quoi ce mot barbare encore ?!",
    href: '/mots-barbares',
    icon: MdTranslate,
  },
  {
    name: 'Les maladies',
    description:
      'Un essai de vulgarisation sur les différents maux du corps humain',
    href: '/maladies',
    icon: MdOutlineSick,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <NextImage
              useSkeleton
              className='h-8 w-8'
              src='/favicon/android-chrome-192x192.png'
              width='180'
              height='180'
              alt='Icon'
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              Les bases pour une santé maitrisée
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href='/ebooks'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            E-books
          </a>
          <Link
            href='/mon-journal'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Mon journal
          </Link>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            href='/contact'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Une question ?<span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <NextImage
                useSkeleton
                className='h-8 w-8'
                src='/favicon/android-chrome-192x192.png'
                width='180'
                height='180'
                alt='Icon'
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50'>
                        Les bases
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href='/ebooks'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Ebooks
                </Link>
                <Link
                  href='/mon-journal'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Mon journal
                </Link>
              </div>
              <div className='py-6'>
                <Link
                  href='/contact'
                  className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Une question ?
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
