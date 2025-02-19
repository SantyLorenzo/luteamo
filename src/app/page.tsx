import Link from 'next/link';

export default function Home() {
  return (
    <main 
      className="page-container bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('bg.png')",
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="content-container">
        <p className="text-xl md:text-lg text-white mb-12 max-w-lg mx-auto leading-relaxed [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
          Hola mi amor
          <br />
          Soy yo.
        </p>
        <p className="text-xl md:text-lg text-white mb-12 max-w-lg mx-auto leading-relaxed [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
          Quiero que sepas q te quiero un monton ♥️♥️♥️♥️♥️♥️♥️!!
        </p>
        <p className="text-lg md:text-lg text-white mb-12 max-w-lg mx-auto leading-relaxed [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
          Queria hacerte algo especial y no sabia que
          asi que dije fue le hago una pagina si eso
          lo se hacer.
          <br />
          Asi que aca te hice esto pa vo.
        </p>
        <Link href="/page-2" className="inline-block btn-primary bg-[#AC0D0D] rounded-none border-2 border-[#000000] [text-shadow:_-1px_-1px_0_#000000,_1px_-1px_0_#000000,_-1px_1px_0_#000000,_1px_1px_0_#000000]">
          Te amo te amo
        </Link>
      </div>
    </main>
  );
}
