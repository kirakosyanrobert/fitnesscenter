import { Container } from '@mui/material';
import { Gym, gyms } from '@/mock/gyms';
import { GymInfoCard } from './components/GymInfoCard';
import { Coaches } from './components/Coaches';
 
export const GymDetails = ({slug}: { slug: string }) => {
  const gym = gyms.find(g => g.instagramNick === slug) as Gym;

  return (
    <Container sx={{py: 3}}>
      <GymInfoCard gym={gym} />
      <Coaches />
    </Container>
  );
}