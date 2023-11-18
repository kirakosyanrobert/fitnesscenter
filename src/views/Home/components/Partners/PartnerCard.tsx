import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Gym } from '@/mock/gyms';
import { Box } from '@mui/material';
import { Link as MuiLink } from '@mui/material';

export const PartnerCard = ({gym}: {gym: Gym}) => {
  const { name, instagramNick, instagramUrl } = gym;
  return (
    <Card variant="outlined">
      <Box display="flex" justifyContent="center" py={1}>
        <Image
          alt={name}
          src={instagramUrl || ''}
          width={104}
          height={104}
          style={{
            maxWidth: '100%',
            height: '104px',
            width: '104px',
            objectFit: 'contain',
            borderRadius: '100%'
          }}
        />
      </Box>
      <CardContent>
        <Box display="flex" justifyContent="center">
          <MuiLink 
            href={`https://www.instagram.com/${instagramNick}/`} 
            target="_blank"
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: 'none' }}
          >
            @{instagramNick}
          </MuiLink>
        </Box>
      </CardContent>
    </Card>
  );
}
