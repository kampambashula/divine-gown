// src/pages/Lending.tsx
import React from 'react';
import { Container, Typography, Card, CardContent, Box, useTheme } from '@mui/material';
import HeroBanner from '../components/HeroBanner';

// Optional banner image for Lending page
import bannerImage from '../assets/images/bouquets/2.jpg';

const loanFeatures = [
  'Short-term loans',
  'Collateral-based or salary-backed lending',
  'Competitive interest rates',
  'Strict credit assessment and collections policy',
];

const Lending: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', pb: 6 }}>
      
      {/* Hero Banner with background image */}
      <HeroBanner
        title="Money Lending Services"
        subtitle="Accessible financing for individuals and SMEs"
        backgroundImage={bannerImage}
      />

      <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          color={theme.palette.text.primary}
        >
          Loan Features
        </Typography>

        {loanFeatures.map((feature, idx) => (
          <Card
            key={idx}
            sx={{
              maxWidth: 345,
              width: '100%',
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
              mt: 4,
            }}
          >
            <CardContent>
              <Typography variant="body1">• {feature}</Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default Lending;
