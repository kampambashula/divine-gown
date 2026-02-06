// src/pages/Team.tsx
import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box, useTheme } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import FounderImage from '../assets/images/founders/pm2.jpg'; // your local image
import bannerImage from '../assets/images/bouquets/6.jpg'; // optional banner image for team page

const teamMembers = [
  {
    name: 'Phyllis Mwanza',
    role: 'Chief Executive Officer',
    bio: 'Founder and CEO of Divine Gown Limited, bringing entrepreneurial drive, operational leadership, and asset-backed growth strategy.',
    photo: FounderImage,
  },
  // Add more team members here
];

const Team: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', pb: 6 }}>
      
      {/* Hero Banner with background image */}
      <HeroBanner
        title="Meet Our Team"
        subtitle="The passionate people driving Divine Gown Limited"
        backgroundImage={bannerImage} // pass an image for overlay gradient
      />

      {/* Team Members */}
      <Container
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          color={theme.palette.text.primary}
        >
          Leadership
        </Typography>

        {teamMembers.map((member, idx) => (
          <Card
            key={idx}
            sx={{
              maxWidth: 345,
              width: '100%',
              borderRadius: 2,
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              textAlign: 'center',
              boxShadow: 3,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={member.photo}
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
