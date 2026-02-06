// src/pages/Home.tsx
import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';
import FounderImage from '../assets/images/pm2.jpg';

// Theme colors
const COLORS = {
  evergreen: '#07281C',
  evergreen2: '#0D3425',
  jungleTeal: '#49836D',
  frozenWater: '#DBF7EE',
};

const Home: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.frozenWater, minHeight: '100vh', pb: 6 }}>
      
      {/* Hero Banner */}
      <HeroBanner
        title="Welcome to Divine Gown Limited"
        subtitle="Quality, trust, and elegance across Real Estate, Fashion & Lending"
        buttonText="See Catalog"
        buttonLink="/Catalog"
      />

      {/* Services Section */}
      <Container
        sx={{
          mt: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center" color={COLORS.evergreen}>
          Our Services
        </Typography>

        
        <ServiceCard
          title="Fashion & Divine Gowns"
          description="Elegant bridal wear and curated designer bags."
          link="/services/fashion"
          gradient="none"
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />

        <ServiceCard
          title="Real Estate & Apartments"
          description="Stable rental income through prime properties."
          link="/services/real-estate"
          gradient="none"
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />

        <ServiceCard
          title="Money Lending Services"
          description="Accessible short-term loans for individuals & SMEs."
          link="/services/lending"
          gradient="none"
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />
      </Container>

      {/* About Snippet Section */}
      <Container
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center" color={COLORS.evergreen}>
          About Divine Gown Limited
        </Typography>

        <Paper
          elevation={3}
          sx={{
            maxWidth: 600,
            width: '100%',
            textAlign: 'center',
            backgroundColor: COLORS.frozenWater,
            color: COLORS.evergreen2,
            p: 4,
            borderRadius: 2,
          }}
        >
          Divine Gown Limited is a diversified Zambian private company operating across Real Estate, Fashion, and Money Lending.
          Led by Ms. Phyllis Mwanza, the company is committed to quality, integrity, and long-term value creation.
          We combine stable income from properties, elegant fashion offerings, and accessible financial solutions for individuals and businesses.
        </Paper>

        <Button
          variant="contained"
          sx={{
            backgroundColor: COLORS.jungleTeal,
            color: COLORS.frozenWater,
            '&:hover': { backgroundColor: COLORS.evergreen2 },
            mt: 2,
          }}
          href="/about"
        >
          Learn More
        </Button>
      </Container>

      {/* Founder Highlight Section */}
      <Container
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center" color={COLORS.evergreen}>
          Meet Our Founder
        </Typography>

        <Box
          sx={{
            maxWidth: 345,
            width: '100%',
            borderRadius: 2,
            backgroundColor: COLORS.frozenWater,
            color: COLORS.evergreen2,
            textAlign: 'center',
            boxShadow: 3,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
          }}
        >
          <Box
            component="img"
            src={FounderImage}
            alt="Phyllis Mwanza"
            sx={{ width: '100%', height: 300, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
          />
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Phyllis Mwanza</Typography>
            <Typography variant="subtitle1" gutterBottom>Chief Executive Officer</Typography>
            <Typography variant="body2">
              Founder and CEO of Divine Gown Limited, bringing entrepreneurial drive, operational leadership, and an asset-backed growth strategy.
              Passionate about building sustainable businesses in Real Estate, Fashion, and Lending.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
