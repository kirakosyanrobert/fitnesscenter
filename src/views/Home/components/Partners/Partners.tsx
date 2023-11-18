"use client"
import { Box, Typography, styled } from '@mui/material';
import { gyms } from '@/mock/gyms';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { PartnerCard } from './PartnerCard';

const StyledSwiperSlide = styled(SwiperSlide)({})

export const Partners = () => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={6} mb={3}>
        Partners
      </Typography>
      <Box>
        <Swiper
          loop
          slidesPerView={2}
          spaceBetween={16}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          {
            [...gyms, ...gyms].map((gym, i) => (
              <StyledSwiperSlide key={`slide-${i}`}>
                <PartnerCard key={`gym-${gym.id}-${i}`} gym={gym} />
              </StyledSwiperSlide>
            ))
          }
      </Swiper>
    </Box>
    </Box>
  );
}
