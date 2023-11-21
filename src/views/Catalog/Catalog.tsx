import { Container } from '@mui/material';
import { CatalogList } from './components/CatalogList';
import { gyms } from '@/mock/gyms';

export const Catalog = () => {
  return (
    <Container disableGutters>
      <CatalogList gyms={gyms} />
    </Container>
  );
}
