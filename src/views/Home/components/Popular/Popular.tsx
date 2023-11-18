import { Box, Grid, Typography } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import { gyms } from '@/mock/gyms';

export const Popular = () => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={6} mb={3}>
        Popular
      </Typography>
      <Grid container spacing={2} px={2}>
        {
          [...gyms].map((gym, i) => (
            <Grid key={`gym-${gym.id}-${i}`} item xs={12} sm={6} md={4}>
              <MediaCard gym={gym} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
