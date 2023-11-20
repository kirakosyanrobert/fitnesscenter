"use client"
import { Box, Typography, styled } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import { gyms } from '@/mock/gyms';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const StyledSwiper = styled(Swiper)({
  '& .swiper-wrapper': {
    marginBottom: 40,
  }
});

const StyledSwiperSlide = styled(SwiperSlide)({});

export const Testimonials = () => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={6} mb={3}>
        Testimonials
      </Typography>
      <Box>
        <StyledSwiper
          loop
          slidesPerView={1}
          spaceBetween={16}
          pagination={true} 
          modules={[Pagination]}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          {
            gyms.map((gym, i) => (
              <StyledSwiperSlide key={`slide-${i}`}>
                <MediaCard key={`gym-${gym.id}-${i}`} gym={gym} />
              </StyledSwiperSlide>
            ))
          }
      </StyledSwiper>
    </Box>
    </Box>
  );
}
