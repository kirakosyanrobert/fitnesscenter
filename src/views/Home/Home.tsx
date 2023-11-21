import { Container } from '@mui/material';
import { Banner } from './components/Banner';
import { Popular } from './components/Popular';
import { New } from './components/New';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { CoachesSection } from './components/CoachesSection';

export const Home = () => {
  return (
    <Container disableGutters>
      <Banner />
      <Popular />
      <New />
      <CoachesSection />
      <Testimonials />
      <Partners />
    </Container>
  );
}
