import Link from 'next/link';
import ImageCarousel from '../components/ImageCarousel';

const images = [
  {
    src: '/page-2/x0.jpeg',
    alt: 'Te amo x0'
  },
  {
    src: '/page-2/x1.jpeg',
    alt: 'Te amo x1'
  },
  {
    src: '/page-2/x2.jpeg',
    alt: 'Te amo x2'
  },
  {
    src: '/page-2/x3.jpeg',
    alt: 'Te amo x3'
  },
  {
    src: '/page-2/x4.jpeg',
    alt: 'Te amo x4'
  },
  {
    src: '/page-2/x5.jpeg',
    alt: 'Te amo x5'
  },
  {
    src: '/page-2/x6.jpeg',
    alt: 'Te amo x6'
  },
  {
    src: '/page-2/x7.jpeg',
    alt: 'Te amo x7'
  },
  {
    src: '/page-2/x8.jpeg',
    alt: 'Te amo x8'
  },
  {
    src: '/page-2/x9.jpeg',
    alt: 'Te amo x9'
  },
  {
    src: '/page-2/x10.jpeg',
    alt: 'Te amo x10'
  },
  {
    src: '/page-2/x11.jpeg',
    alt: 'Te amo x11'
  },
  {
    src: '/page-2/x12.jpeg',
    alt: 'Te amo x12'
  },
];

export default function SecondPage() {
  return (
    <main className="page-container bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/page-2/bg.png')",
        backgroundBlendMode: 'overlay',
      }}>
      <div className="content-container space-y-8">
        <p className="text-xl md:text-lg text-white mb-12 max-w-lg mx-auto leading-relaxed [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
          me puse sentimental y tuve viendo como
          todas las fotos que tenemos.
          <br />
          mencantan
        </p>
        
        <div className="my-12 rounded-lg overflow-hidden">
          <ImageCarousel images={images} />
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/" className="inline-block btn-primary bg-[#AC0D0D] rounded-none border-2 border-[#000000] [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
            patra
          </Link>
          <Link href="/page-3" className="inline-block btn-primary bg-[#AC0D0D] rounded-none border-2 border-[#000000] [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
            te amo x2
          </Link>
        </div>
      </div>
    </main>
  );
}