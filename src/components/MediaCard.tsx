import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Gym } from '@/mock/gyms';
import { Box } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function MediaCard({gym}: {gym: Gym}) {
  const { name, instagramNick, imageUrl } = gym;
  return (
    <Card variant="outlined">
      <Box display="flex" justifyContent="center" py={1}>
        <Image
          alt={name}
          src={imageUrl || ''}
          width={112}
          height={112}
          style={{
            maxWidth: '100%',
            height: '112px',
            width: '112px',
            objectFit: 'contain',
            borderRadius: '100%'
          }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5" textAlign="center" noWrap>
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
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small" component={Link} href={`/${instagramNick}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
