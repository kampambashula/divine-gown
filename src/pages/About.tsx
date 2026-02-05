// src/pages/About.tsx
import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';

const coreValues = [
  'Integrity and trust',
  'Customer focus',
  'Financial discipline',
  'Quality and excellence',
  'Long-term value creation',
];

// Theme colors
const COLORS = {
  evergreen: '#07281C',
  evergreen2: '#0D3425',
  jungleTeal: '#49836D',
  frozenWater: '#DBF7EE',
};

const About: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.frozenWater, minHeight: '100vh' }}>
      <HeroBanner
        title="About Divine Gown Limited"
        subtitle="Quality, trust, and asset-backed growth"
      />

      <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        {/* Company Overview */}
        <Typography variant="h4" gutterBottom textAlign="center" color={COLORS.evergreen}>
          Company Overview
        </Typography>
        <ServiceCard
          title="Divine Gown Limited Overview"
          description="Divine Gown Limited is a diversified Zambian private company operating in real estate, fashion, and money lending. Led by Ms. Phyllis Mwanza, the company is committed to quality, integrity, and long-term value creation."
          link="/services"
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />

        {/* Vision */}
        <ServiceCard
          title="Vision"
          description="To build a diversified, asset-backed company that delivers sustainable income, empowers customers, and creates long-term wealth."
          link="/services"
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />

        {/* Mission */}
        <ServiceCard
          title="Mission"
          description="To provide quality housing, elegant fashion, and accessible financing solutions while maintaining integrity, professionalism, and financial discipline."
          link="/services"
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />

        {/* Core Values */}
        <Typography variant="h4" gutterBottom textAlign="center" color={COLORS.evergreen}>
          Our Core Values
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', width: '100%' }}>
          {coreValues.map((value, index) => (
            <ServiceCard
              key={index}
              title={value}
              description=""
              link="/services"
              backgroundColor={COLORS.frozenWater}
              textColor={COLORS.evergreen2}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
