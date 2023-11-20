"use client"
import { Box, Typography, styled } from '@mui/material';
import { gyms } from '@/mock/gyms';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { PartnerCard } from './PartnerCard';

const StyledSwiper = styled(Swiper)({
  '& .swiper-wrapper': {
    marginBottom: 40,
  }
});

const StyledSwiperSlide = styled(SwiperSlide)({})

export const Partners = () => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={6} mb={3}>
        Partners
      </Typography>
      <Box>
        <StyledSwiper
          loop
          slidesPerView={2}
          spaceBetween={16}
          pagination={true} 
          modules={[Pagination]}
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
      </StyledSwiper>
    </Box>
    </Box>
  );
}
