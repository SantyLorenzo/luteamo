'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function Modal({ isOpen, onClose, imageSrc, imageAlt }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsVisible(true), 0);
    } else {
      document.body.style.overflow = 'unset';
      setIsVisible(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-4xl aspect-[4/3] rounded-lg overflow-hidden shadow-[0_0_20px_#AC0D0D]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-[#AC0D0D] text-white rounded-none border-2 border-[#000000] flex items-center justify-center hover:bg-[#8A0B0B] transition-colors [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]"
        >
          <span className="sr-only">Close modal</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
}
