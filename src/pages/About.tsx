// src/pages/About.tsx
import React from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';

// Optional banner image for about page
import bannerImage from '../assets/images/bouquets/5.jpeg';

const coreValues = [
  'Integrity and trust',
  'Customer focus',
  'Financial discipline',
  'Quality and excellence',
  'Long-term value creation',
];

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
      
      {/* Hero Banner with background image */}
      <HeroBanner
        title="About Divine Gown Limited"
        subtitle="Quality, trust, and asset-backed growth"
        backgroundImage={bannerImage}
      />

      <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        {/* Company Overview */}
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          color={theme.palette.text.primary}
        >
          Company Overview
        </Typography>
        <ServiceCard
          title="Divine Gown Limited Overview"
          description="Divine Gown Limited is a diversified Zambian private company operating in real estate, fashion, and money lending. Led by Ms. Phyllis Mwanza, the company is committed to quality, integrity, and long-term value creation."
          link="/services"
          backgroundColor={theme.palette.background.default}
          textColor={theme.palette.text.primary}
        />

        {/* Vision */}
        <ServiceCard
          title="Vision"
          description="To build a diversified, asset-backed company that delivers sustainable income, empowers customers, and creates long-term wealth."
          link="/services"
          backgroundColor={theme.palette.background.default}
          textColor={theme.palette.text.primary}
        />

        {/* Mission */}
        <ServiceCard
          title="Mission"
          description="To provide quality housing, elegant fashion, and accessible financing solutions while maintaining integrity, professionalism, and financial discipline."
          link="/services"
          backgroundColor={theme.palette.background.default}
          textColor={theme.palette.text.secondary}
        />

        {/* Core Values */}
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          color={theme.palette.text.primary}
        >
          Our Core Values
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', width: '100%' }}>
          {coreValues.map((value, index) => (
            <ServiceCard
              key={index}
              title={value}
              description=""
              link="/services"
              backgroundColor={theme.palette.background.default}
              textColor={theme.palette.text.secondary}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
