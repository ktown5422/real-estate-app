import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';

function Slider({ imageList }) {
  return (
    <div>
      {imageList ? (
        <Carousel className="overflow-hidden rounded-lg shadow-[0_24px_80px_rgba(18,28,38,0.16)]">
          <CarouselContent>
            {imageList.map((item, index) => (
              <CarouselItem key={index}>
                <Image src={item.url} width={1200} height={560} alt='image' className='h-[320px] w-full object-cover md:h-[560px]' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <div className='h-[320px] w-full animate-pulse rounded-lg bg-white/70 md:h-[560px]'></div>
      )}
    </div>
  );
}

export default Slider;
