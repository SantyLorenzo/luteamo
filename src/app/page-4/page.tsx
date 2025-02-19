'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '../components/Modal';
import ImageCarousel from '../components/ImageCarousel';

const images = [
  {
    src: '/page-4/x0.jpeg',
    alt: 'teamo x0'
  },
  {
    src: '/page-4/x1.jpeg',
    alt: 'teamo x1'
  },
  {
    src: '/page-4/x2.jpeg',
    alt: 'teamo x2'
  },
  {
    src: '/page-4/x4.jpeg',
    alt: 'teamo x4'
  },
  {
    src: '/page-4/x5.jpeg',
    alt: 'teamo x5'
  },
  {
    src: '/page-4/x6.jpeg',
    alt: 'teamo x6'
  },
  {
    src: '/page-4/x7.jpeg',
    alt: 'teamo x7'
  },
  {
    src: '/page-4/x8.jpeg',
    alt: 'teamo x8'
  },
];


export default function FourthPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="page-container bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/landing.jpeg')",
        backgroundBlendMode: 'overlay',
      }}>
      <div className="content-container space-y-8">
        <p className="text-xl md:text-lg text-white mb-12 max-w-lg mx-auto leading-relaxed [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
          te amo mi vida
          <br />
          sos la mas linda
          <br />
          me haces re bien y quiero que sigamo
          <br />
          haciendo cosas juntos pq con vos estoy re bien
          ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️
        </p>
        
        <div className="my-12 rounded-lg overflow-hidden">
          <ImageCarousel images={images} />
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/page-3" className="inline-block btn-primary bg-[#AC0D0D] rounded-none border-2 border-[#000000] [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
            patra
          </Link>

          <Link href="/page-5" className="inline-block btn-primary bg-[#AC0D0D] rounded-none border-2 border-[#000000] [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
            Te amo x4
          </Link>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc="/images/special-message.jpg"
          imageAlt="A special message for you"
        />
      </div>
    </main>
  );
}
