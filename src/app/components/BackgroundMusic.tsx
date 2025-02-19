'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setShowPlayButton(false);
        }).catch(() => {
          // Si falla el autoplay, mantenemos el botón visible
          console.log("Autoplay prevented, showing button");
        });
      }
    }
  };

  useEffect(() => {
    // Intentamos reproducir automáticamente después de un pequeño delay
    const timer = setTimeout(() => {
      startMusic();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPlayButton && (
        <button
          onClick={startMusic}
          className="fixed bottom-4 right-4 z-50 bg-[#AC0D0D] text-white px-6 py-3 rounded-none border-2 border-[#000000] hover:bg-[#8A0B0B] transition-colors [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000] shadow-[0_0_10px_#AC0D0D]"
        >
          si quere que suene un temita ♫
        </button>
      )}
      <audio
        ref={audioRef}
        src="/burzum.mp3"
        loop
      />
    </>
  );
} 