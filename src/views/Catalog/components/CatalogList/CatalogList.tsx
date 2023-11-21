import { Box, Grid } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import { Gym } from '@/mock/gyms';

type CatalogListPropsType = {
  gyms: Gym[];
}

export const CatalogList = ({gyms}: CatalogListPropsType) => {
  return (
    <Box py={3}>
      <Grid container spacing={2} px={2}>
        {
          [...gyms, ...gyms, ...gyms, ...gyms,].map((gym, i) => (
            <Grid key={`gym-${gym.id}-${i}`} item xs={12} sm={6} md={4}>
              <MediaCard gym={gym} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
