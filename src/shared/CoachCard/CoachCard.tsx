import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Coach } from '@/mock/coaches';

export const CoachCard = ({coach}: {coach: Coach}) => {
  const { name, instagramNick, imageUrl } = coach;

  return (
    <Card variant="outlined">
      <Box display="flex">
        <Image
          alt={name}
          src={imageUrl || ''}
          width={240}
          height={240}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5" textAlign="center">
          {name}
        </Typography>
        <Box display="flex" justifyContent="center">
          <MuiLink 
            href={`https://www.instagram.com/${instagramNick}/`} 
            target="_blank"
            variant="body2"
            sx={{ textDecoration: 'none', display: 'flex', gap: 1 }}
          >
            @{instagramNick}
            <OpenInNewIcon fontSize="small" />
          </MuiLink>
        </Box>
      </CardContent>
    </Card>
  );
}
