'use client'
import { useMemo, useState } from 'react';
import { Box, Button, ButtonGroup, Container } from '@mui/material';
import { CoachesList } from './components/CoachesList';
import { GenderType, coaches } from '@/mock/coaches';

export const Coaches = () => {
  const [gender, setGender] = useState<GenderType | 'all'>('all');

  // TODO: to be moved to server
  const coachesList = useMemo(() => {
    if (gender === 'all') return coaches;

    return coaches.filter(coach => coach.gender === gender);
  }, [gender]);

  return (
    <Container disableGutters sx={{py: 3}}>
      <Box display="flex" justifyContent="center" mb={3}>
        <ButtonGroup size="large">
          <Button 
            key="all" 
            variant={gender === 'all' ? 'contained' : 'outlined'} 
            onClick={() => {setGender('all')}}
          >
              All
          </Button>
          <Button 
            key="man" 
            variant={gender === 'man' ? 'contained' : 'outlined'} 
            onClick={() => {setGender('man')}}
          >
              Men
          </Button>
          <Button 
            key="woman" 
            variant={gender === 'woman' ? 'contained' : 'outlined'} 
            onClick={() => {setGender('woman')}}
          >
            Women
          </Button>
        </ButtonGroup>
      </Box>
      <CoachesList coaches={coachesList} />
    </Container>
  );
}
