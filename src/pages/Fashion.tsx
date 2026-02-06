// src/pages/Fashion.tsx
import React from 'react';
import { Container, Typography, Card, CardContent, Box, useTheme } from '@mui/material';
import HeroBanner from '../components/HeroBanner';

// Optional banner image for Fashion page
import bannerImage from '../assets/images/bouquets/4.jpg';

const collections = [
  {
    name: 'Wedding Dresses',
    description:
      'Elegant bridal wear for your special day, designed to create timeless memories and reflect personal style. Available for sale and rental, our collection combines luxury with accessibility.',
  },
  {
    name: 'Event Wear',
    description:
      'Stylish and contemporary dresses for formal events, galas, and celebrations. We focus on quality, comfort, and elegance to make every occasion memorable.',
  },
  {
    name: 'Second-hand Designer Bags',
    description:
      'Curated selection of pre-owned luxury handbags. Each piece is authenticated, gently used, and provides a sustainable and fashionable option for our clients.',
  },
];

const Fashion: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', pb: 6 }}>
      
      {/* Hero Banner with background image */}
      <HeroBanner
        title="Fashion & Divine Gowns"
        subtitle="Elegant fashion for every occasion"
        backgroundImage={bannerImage}
      />

      <Container sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        
        {/* Collections */}
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          color={theme.palette.text.primary}
        >
          Our Collections
        </Typography>

        {collections.map((item, idx) => (
          <Card
            key={idx}
            sx={{
              maxWidth: 400,
              width: '100%',
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              textAlign: 'center',
              boxShadow: 3,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
              mt: 4,
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>{item.name}</Typography>
              <Typography variant="body1">{item.description}</Typography>
            </CardContent>
          </Card>
        ))}

        {/* Brand Philosophy */}
        <Card
          sx={{
            maxWidth: 600,
            width: '100%',
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            textAlign: 'center',
            boxShadow: 3,
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
            mt: 6,
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>Our Fashion Philosophy</Typography>
            <Typography variant="body1">
              Divine Gowns is committed to creating timeless, elegant fashion that empowers women to feel confident and radiant.  
              We combine bespoke craftsmanship, sustainable choices, and curated selections to provide a premium yet accessible experience.  
              Bridal and event services are complemented by styling advice and rental options, ensuring every client finds the perfect fit for their occasion.
            </Typography>
          </CardContent>
        </Card>

        {/* Services Overview */}
        <Card
          sx={{
            maxWidth: 600,
            width: '100%',
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            textAlign: 'center',
            boxShadow: 3,
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
            mt: 4,
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>Services & Experiences</Typography>
            <Typography variant="body1">
              - Bridal Dress Sales & Rentals for weddings and pre-wedding shoots<br />
              - Event & Formal Wear for galas, parties, and ceremonies<br />
              - Personalized Styling Consultations and Luxury Accessory Selection<br />
              - Curated Second-Hand Designer Bags and Sustainable Fashion Options
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Fashion;
