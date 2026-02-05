// src/pages/Lending.tsx
import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';

const loanFeatures = [
  'Short-term loans',
  'Collateral-based or salary-backed lending',
  'Competitive interest rates',
  'Strict credit assessment and collections policy',
];

const Lending: React.FC = () => {
  return (
    <Box>
      <HeroBanner
        title="Money Lending Services"
        subtitle="Accessible financing for individuals and SMEs"
      />
      <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Loan Features
        </Typography>

        {loanFeatures.map((feature, idx) => (
          <Card
            key={idx}
            sx={{
              maxWidth: 345,
              width: '100%',
              borderRadius: 2,
              background: 'linear-gradient(135deg, #0D3425, #07281C, #49836D, #DBF7EE, #07281B)',
              color: '#DBF7EE',
              textAlign: 'center',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)' },
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
