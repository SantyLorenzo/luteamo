'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="w-full max-w-xl mx-auto shadow-[0_0_10px_#AC0D0D]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-opacity duration-1000"
              sizes="(max-width: 508px) 100vw, 800px"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
