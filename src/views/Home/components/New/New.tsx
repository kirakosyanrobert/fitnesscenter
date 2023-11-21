import Link from 'next/link';
import { Box, Button, Grid, Typography } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import { gyms } from '@/mock/gyms';
import { localRoutes } from '@/consts';

export const New = () => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={6} mb={3}>
        New
      </Typography>
      <Grid container spacing={2} px={2}>
        {
          [...gyms].slice(0, 4).map((gym, i) => (
            <Grid key={`gym-${gym.id}-${i}`} item xs={12} md={6}>
              <MediaCard gym={gym} />
            </Grid>
          ))
        }
      </Grid>
      <Box display="flex" justifyContent="center" pt={3}>
        <Button
          component={Link}
          href={localRoutes.catalog}
          variant="outlined"
          size="large"
        >
          Load more
        </Button>
      </Box>
    </Box>
  );
}
