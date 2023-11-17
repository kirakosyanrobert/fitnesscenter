import { Container, Grid } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import { Gym, gyms } from '@/mock/gyms';

export default function GymPage({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const gym = gyms.find(g => g.instagramNick === params.slug) as Gym;

  return (
    <Container>
      <MediaCard gym={gym} />
    </Container>
  );
}