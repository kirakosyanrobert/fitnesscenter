import { Box, Grid } from '@mui/material';
import { Coach } from '@/mock/coaches';
import { CoachCard } from '@/shared';

type CoachesListPropsType = {
  coaches: Coach[];
}

export const CoachesList = ({coaches}: CoachesListPropsType) => {
  return (
    <Box>
      <Grid container spacing={2} px={2}>
        {
          [...coaches].map((coach, i) => (
            <Grid key={`coach-${coach.id}-${i}`} item xs={12} sm={6} md={4} lg={3}>
              <CoachCard coach={coach} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
