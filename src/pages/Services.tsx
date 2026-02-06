// src/pages/Services.tsx
import React from 'react';
import { Container, Box, useTheme } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';

// Optional hero banner image for Services page
import bannerImage from '../assets/images/bouquets/4.jpg';

const Services: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', pb: 6 }}>
      
      {/* ===== Hero Banner with background image ===== */}
      <HeroBanner
        title="Our Services"
        subtitle="Explore the diverse business lines of Divine Gown Limited"
        backgroundImage={bannerImage}
      />

      {/* ===== Services Section ===== */}
      <Container
        sx={{
          mt: 6,
          display: 'flex',
          flexWrap: 'wrap',            // allows wrapping on smaller screens
          gap: 4,
          justifyContent: 'center',    // center cards horizontally
        }}
      >
        <ServiceCard
          title="Real Estate & Apartments"
          description="Divine Gown Limited owns and manages prime residential rental properties in Lusaka, providing stable, predictable income. We offer professionally managed apartments with high-quality standards and responsive property management. Our focus is on creating long-term asset value for both tenants and the company."
          link="/services/real-estate"
          backgroundColor={theme.palette.background.default}
          textColor={theme.palette.text.primary}
        />

        <ServiceCard
          title="Fashion & Divine Gowns"
          description="Our Divine Gowns division specializes in elegant bridal wear, formal attire, event outfits, and curated second-hand designer handbags. We provide sales and rental options to make luxury fashion accessible. With attention to quality and detail, we aim to make every special occasion memorable."
          link="/catalog"
          backgroundColor={theme.palette.background.default}
          textColor={theme.palette.text.primary}
        />

        <ServiceCard
          title="Money Lending Services"
          description="We provide short-term, collateral-backed loans to individuals and small businesses, designed to be competitive yet profitable. Our lending is conducted with strict credit assessments, ensuring responsible financing and timely repayment. This allows clients to access liquidity when needed while maintaining disciplined risk management."
          link="/services/lending"
          backgroundColor={theme.palette.background.default}
          textColor={theme.palette.text.primary}
        />
      </Container>
    </Box>
  );
};

export default Services;
