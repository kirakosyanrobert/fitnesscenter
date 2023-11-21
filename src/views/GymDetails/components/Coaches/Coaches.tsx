"use client"
import { Box, Typography, styled } from '@mui/material';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CoachCard } from '@/shared/CoachCard';
import { coaches } from '@/mock/coaches';

const StyledSwiper = styled(Swiper)({
  '& .swiper-wrapper': {
    marginBottom: 40,
  }
});

const StyledSwiperSlide = styled(SwiperSlide)({});

export const Coaches = () => {
  return (
    <Box component="section">
      <Typography variant="h4" textAlign="center" mt={6} mb={3}>
        Coaches
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
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {
            [...coaches, ...coaches].map((coach, i) => (
              <StyledSwiperSlide key={`slide-${i}`}>
                <CoachCard key={`coach-${coach.id}-${i}`} coach={coach} />
              </StyledSwiperSlide>
            ))
          }
      </StyledSwiper>
    </Box>
    </Box>
  );
}
