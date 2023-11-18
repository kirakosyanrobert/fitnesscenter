import { Container } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import { Gym, gyms } from '@/mock/gyms';
 
export const GymDetails = ({slug}: { slug: string }) => {
  const gym = gyms.find(g => g.instagramNick === slug) as Gym;

  return (
    <Container>
      <MediaCard gym={gym} />
    </Container>
  );
}