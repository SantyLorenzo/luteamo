'use client';

import { useState } from 'react';
import Link from 'next/link';
import Modal from '../components/Modal';

const images = [
  {
    src: '/page-4/x0.jpeg',
    alt: 'teamo x0'
  },
  {
    src: '/page-4/x1.jpeg',
    alt: 'teamo x1'
  },
];


export default function FifthPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="page-container bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/page-5/x0.jpeg')",
        backgroundBlendMode: 'overlay',
        
      }}>
      <div className="content-container space-y-8">
        <p className="text-xl md:text-lg text-white mb-12 max-w-lg mx-auto leading-relaxed [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
          te quiero te amo te adoro te quiero un monton hermosahermosahermosa
          ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️
        </p>

        <Link href="/" className="inline-block btn-primary bg-[#AC0D0D] rounded-none border-2 border-[#000000] [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
          volve al principio
        </Link>

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
