"use client"
import Image from "next/image";
import { Box, styled } from "@mui/material"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';

const StyledSwiperSlide = styled(SwiperSlide)({
  height: 480,
})

export const Banner = () => {
  const slides = [
    {url: 'images/homeBanner/banner1.webp', alt: 'Banner image 1' },
    {url: 'images/homeBanner/banner2.webp', alt: 'Banner image 2' },
    {url: 'images/homeBanner/banner3.webp', alt: 'Banner image 3' },
  ];

  return (
    <Box>
      <Swiper 
        loop 
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {
          slides.map((slide, i) => (
            <StyledSwiperSlide key={`slide-${i}`}>
              <Image 
                alt={slides[i].alt || ''}
                src={slides[i].url || ''}
                width={1200}
                height={480}
                style={{
                  maxWidth: '100%',
                  height: '480px',
                  width: '1200px',
                  objectFit: 'cover',
                }}
              />
            </StyledSwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  )
}