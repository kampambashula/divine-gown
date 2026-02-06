// src/pages/Home.tsx
import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';
import AboutSnippet from '../components/AboutSnippet';
import FounderHighlight from '../components/FounderHighlight';
import FeatureSection from '../components/FeatureSection';
import GalleryCarousel from '../components/GalleryCarousel';

// Example images
import founderImg from '../assets/images/founders/pm2.jpg';
import gown3 from '../assets/images/weddingGowns/3.jpg';
import bouquet1 from '../assets/images/bouquets/1.jpeg';
import bouquet2 from '../assets/images/bouquets/2.jpg';
import bouquet3 from '../assets/images/bouquets/4.jpg';
import heroImg from '../assets/images/bouquets/2.jpg';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, pb: 6 }}>
      
      {/* ===== Hero Banner ===== */}
      <HeroBanner
        title="Welcome to Divine Gown Limited"
        subtitle="Quality, trust, and elegance across Real Estate, Fashion & Lending"
        buttonText="See Catalog"
        buttonLink="/catalog"
        backgroundImage={heroImg}
      />

      {/* ===== Services Section ===== */}
      <Container
        sx={{
          mt: 6,
          display: 'flex',
          flexWrap: 'wrap',        // wrap on smaller screens
          gap: 3,
          justifyContent: 'center', // center horizontally
        }}
      >
        <ServiceCard
          title="Fashion & Divine Gowns"
          description="Elegant bridal wear and curated designer bags."
          link="/services/fashion"
          gradient="none"
          backgroundColor={theme.palette.background.paper}
          textColor={theme.palette.text.primary}
        />
        <ServiceCard
          title="Real Estate & Apartments"
          description="Stable rental income through prime properties."
          link="/services/real-estate"
          gradient="none"
          backgroundColor={theme.palette.background.paper}
          textColor={theme.palette.text.primary}
        />
        <ServiceCard
          title="Money Lending Services"
          description="Accessible short-term loans for individuals & SMEs."
          link="/services/lending"
          gradient="none"
          backgroundColor={theme.palette.background.paper}
          textColor={theme.palette.text.primary}
        />
      </Container>

      {/* ===== Carousel for Bouquets ===== */}
      <Container sx={{ mt: 6 }}>
        <GalleryCarousel images={[bouquet1, bouquet2, bouquet3]} />
      </Container>

      {/* ===== Feature Section (Wedding Gown Highlight) ===== */}
      <Container sx={{ mt: 6 }}>
        <FeatureSection
          image={gown3}
          title="Timeless Wedding Gowns"
          subtitle="Elegant designs for your special day"
          text="Our curated collection of wedding gowns combines craftsmanship, luxury, and elegance to make your wedding day unforgettable."
          buttonText="Explore Catalog"
          buttonLink="/catalog"
          overlayColor="rgba(7, 40, 28, 0.4)"
        />
      </Container>

      {/* ===== About Snippet ===== */}
      <Container sx={{ mt: 8 }}>
        <AboutSnippet
          title="About Divine Gown Limited"
          text="Divine Gown Limited is a diversified Zambian private company operating across Real Estate, Fashion, and Money Lending. Led by Ms. Phyllis Mwanza, the company is committed to quality, integrity, and long-term value creation. We combine stable income from properties, elegant fashion offerings, and accessible financial solutions for individuals and businesses."
          buttonText="Learn More"
          buttonLink="/about"
          backgroundColor={theme.palette.background.default}
          textColor={theme.palette.text.secondary}
        />
      </Container>

      {/* ===== Founder Highlight ===== */}
      <Container sx={{ mt: 6 }}>
        <FounderHighlight
          image={founderImg}
          name="Phyllis Mwanza"
          title="Chief Executive Officer"
          bio="Founder and CEO of Divine Gown Limited, bringing entrepreneurial drive, operational leadership, and an asset-backed growth strategy. Passionate about building sustainable businesses in Real Estate, Fashion, and Lending."
        />
      </Container>
    </Box>
  );
};

export default Home;
