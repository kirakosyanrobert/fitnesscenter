import Link from 'next/link';
import { Box, Button, Grid, Typography } from '@mui/material';
import { localRoutes } from '@/consts';
import { CoachCard } from '@/shared';
import { coaches } from '@/mock/coaches';

export const CoachesSection = () => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={6} mb={3}>
        Coaches
      </Typography>
      <Grid container spacing={2} px={2}>
        {
          [...coaches, ...coaches, ...coaches].slice(0, 8).map((coach, i) => (
            <Grid key={`coach-${coach.id}-${i}`} item xs={12} sm={6} md={4} lg={3}>
              <CoachCard coach={coach} />
            </Grid>
          ))
        }
      </Grid>
      <Box display="flex" justifyContent="center" pt={3}>
        <Button
          component={Link}
          href={localRoutes.coaches}
          variant="outlined"
          size="large"
        >
          Load more
        </Button>
      </Box>
    </Box>
  );
}
