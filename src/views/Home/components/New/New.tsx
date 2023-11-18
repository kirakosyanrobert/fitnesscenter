import { Box, Grid, Typography } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import { gyms } from '@/mock/gyms';

export const New = () => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={6} mb={3}>
        New
      </Typography>
      <Grid container spacing={2} px={2}>
        {
          [...gyms].map((gym, i) => (
            <Grid key={`gym-${gym.id}-${i}`} item xs={12} md={6}>
              <MediaCard gym={gym} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
