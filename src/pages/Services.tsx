// src/pages/Services.tsx
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';

const COLORS = {
  evergreen: '#07281C',
  evergreen2: '#0D3425',
  jungleTeal: '#49836D',
  frozenWater: '#DBF7EE',
};

const Services: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.frozenWater, minHeight: '100vh' }}>
      <HeroBanner
        title="Our Services"
        subtitle="Explore the diverse business lines of Divine Gown Limited"
      />

      <Container sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center" color={COLORS.evergreen}>
          What We Offer
        </Typography>

        {/* Real Estate & Apartments */}
        <ServiceCard
          title="Real Estate & Apartments"
          description="Divine Gown Limited owns and manages prime residential rental properties in Lusaka, providing stable, predictable income. We offer professionally managed apartments with high-quality standards and responsive property management. Our focus is on creating long-term asset value for both tenants and the company."
          link="/services/real-estate"
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />

        {/* Fashion & Divine Gowns */}
        <ServiceCard
          title="Fashion & Divine Gowns"
          description="Our Divine Gowns division specializes in elegant bridal wear, formal attire, event outfits, and curated second-hand designer handbags. We provide sales and rental options to make luxury fashion accessible. With attention to quality and detail, we aim to make every special occasion memorable."
          link="/services/fashion"
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />

        {/* Money Lending Services */}
        <ServiceCard
          title="Money Lending Services"
          description="We provide short-term, collateral-backed loans to individuals and small businesses, designed to be competitive yet profitable. Our lending is conducted with strict credit assessments, ensuring responsible financing and timely repayment. This allows clients to access liquidity when needed while maintaining disciplined risk management."
          link="/services/lending"
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />
      </Container>
    </Box>
  );
};

export default Services;
