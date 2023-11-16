import MediaCard from '@/components/MediaCard';
import { gyms } from '@/mock/gyms';
import { Container, Grid } from '@mui/material';

export default function HomePage() {
  return (
    <Container>
      <Grid container spacing={2}>
        {
          [...gyms, ...gyms, ...gyms, ...gyms].map((gym, i) => (
            <Grid key={`gym-${gym.id}-${i}`} item xs={12} sm={6} md={4}>
              <MediaCard gym={gym} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}
