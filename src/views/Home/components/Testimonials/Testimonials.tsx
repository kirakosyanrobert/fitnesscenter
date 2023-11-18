"use client"
import { Box, Typography, styled } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import { gyms } from '@/mock/gyms';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StyledSwiperSlide = styled(SwiperSlide)({})

export const Testimonials = () => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={6} mb={3}>
        Testimonials
      </Typography>
      <Box>
        <Swiper
          loop
          slidesPerView={1}
          spaceBetween={16}
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
      </Swiper>
    </Box>
    </Box>
  );
}
