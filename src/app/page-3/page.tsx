import Link from 'next/link';
import ImageCarousel from '../components/ImageCarousel';

const images = [
  {
    src: '/page-3/x1.jpeg',
    alt: 'teamo x0'
  },
  {
    src: '/page-3/x0.jpeg',
    alt: 'teamo x1'
  },
  {
    src: '/page-3/x6.jpeg',
    alt: 'teamo x6'
  },
  {
    src: '/page-3/x2.jpeg',
    alt: 'teamo x2'
  },
  {
    src: '/page-3/x3.jpeg',
    alt: 'teamo x3'
  },
  {
    src: '/page-3/x4.jpeg',
    alt: 'teamo x4'
  },
  {
    src: '/page-3/x5.jpeg',
    alt: 'teamo x5'
  },
  {
    src: '/page-3/x7.png',
    alt: 'teamo x7'
  },
];

export default function ThirdPage() {
  return (
    <main className="page-container bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/page-3/bg.png')",
        backgroundBlendMode: 'overlay',
      }}>
      <div className="content-container space-y-8">
        <p className="text-xl md:text-lg text-white mb-12 max-w-lg mx-auto leading-relaxed [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
          AAAAAAAAA sos muy lindaaaaa
        </p>
        
        <div className="my-12 rounded-lg overflow-hidden">
          <ImageCarousel images={images} />
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/page-2" className="inline-block btn-primary bg-[#AC0D0D] rounded-none border-2 border-[#000000] [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
            patra
          </Link>
          <Link href="/page-4" className="inline-block btn-primary bg-[#AC0D0D] rounded-none border-2 border-[#000000] [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
            te amo x3
          </Link>
        </div>
      </div>
    </main>
  );
}
