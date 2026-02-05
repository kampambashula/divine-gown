// src/pages/Team.tsx
import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import FounderImage from '../assets/images/pm2.jpg'; // your local image

const COLORS = {
  evergreen: '#07281C',
  evergreen2: '#0D3425',
  jungleTeal: '#49836D',
  frozenWater: '#DBF7EE',
};

const teamMembers = [
  {
    name: 'Phyllis Mwanza',
    role: 'Chief Executive Officer',
    bio: 'Founder and CEO of Divine Gown Limited, bringing entrepreneurial drive, operational leadership, and asset-backed growth strategy.',
    photo: FounderImage, // ✅ use imported variable directly
  },
  // Additional team members can be added here
];

const Team: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.frozenWater, minHeight: '100vh', pb: 6 }}>
      <HeroBanner
        title="Meet Our Team"
        subtitle="The passionate people driving Divine Gown Limited"
      />

      <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center" color={COLORS.evergreen}>
          Leadership
        </Typography>

        {teamMembers.map((member, idx) => (
          <Card
            key={idx}
            sx={{
              maxWidth: 345,
              width: '100%',
              borderRadius: 2,
              backgroundColor: COLORS.frozenWater,
              color: COLORS.evergreen2,
              textAlign: 'center',
              boxShadow: 3,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={member.photo} // ✅ this now works
              alt={member.name}
              sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>{member.name}</Typography>
              <Typography variant="subtitle1" gutterBottom>{member.role}</Typography>
              <Typography variant="body2">{member.bio}</Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default Team;
