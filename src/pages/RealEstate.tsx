// src/pages/RealEstate.tsx
import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';

const COLORS = {
  evergreen: '#07281C',
  evergreen2: '#0D3425',
  jungleTeal: '#49836D',
  frozenWater: '#DBF7EE',
};

const properties = [
  {
    name: 'Libala Property',
    value: 'K1,500,000 approx.',
    description: 'A prime residential property in Lusaka, representing the foundation of our asset-backed growth strategy.',
  },
  {
    name: 'Lusaka West Property',
    value: 'K800,000 approx.',
    description: 'A modern apartment unit delivering stable rental income and long-term value creation.',
  },
  // Add more properties here if needed
];

const RealEstate: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.frozenWater, minHeight: '100vh', pb: 6 }}>
      <HeroBanner
        title="Real Estate & Apartments"
        subtitle="Stable rental income through asset-backed properties"
      />

      <Container sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center" color={COLORS.evergreen}>
          Our Properties
        </Typography>

        {properties.map((property, idx) => (
          <Card
            key={idx}
            sx={{
              maxWidth: 400,
              width: '100%',
              borderRadius: 2,
              backgroundColor: COLORS.frozenWater,
              color: COLORS.evergreen2,
              textAlign: 'center',
              boxShadow: 3,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
              mt: 4,
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>{property.name}</Typography>
              <Typography variant="body1" paragraph>
                {property.description}
              </Typography>
              <Typography variant="subtitle1">Estimated Value: {property.value}</Typography>
            </CardContent>
          </Card>
        ))}

        {/* Property Management Section */}
        <Card
          sx={{
            maxWidth: 600,
            width: '100%',
            borderRadius: 2,
            backgroundColor: COLORS.frozenWater,
            color: COLORS.evergreen2,
            textAlign: 'center',
            boxShadow: 3,
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
            mt: 6,
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>Property Management & Expansion</Typography>
            <Typography variant="body1">
              Divine Gown Limited takes a holistic approach to property management, combining professional oversight, tenant-focused services, and strategic acquisition.  
              Our ambition extends to incremental development, innovative enhancements, and broadening our residential portfolio across Lusaka and beyond.  
              We aim to create sustainable, long-term value through disciplined management, market-driven growth, and forward-looking investment strategies.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default RealEstate;
