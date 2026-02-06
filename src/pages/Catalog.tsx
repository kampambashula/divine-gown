// src/pages/Catalog.tsx
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import CatalogGrid, { CatalogItem } from '../components/CatalogGrid';

// Import catalog images
import img4 from '../assets/catalog/4.jpeg';
import img7 from '../assets/catalog/7.jpeg';
import img9 from '../assets/catalog/9.jpeg';
import img10 from '../assets/catalog/1.jpeg';
import img11 from '../assets/catalog/11.jpeg';
import img12 from '../assets/catalog/12.jpeg';
import img13 from '../assets/catalog/2.jpeg';
import img14 from '../assets/catalog/5.jpeg';

// Optional banner image for catalog page
import bannerImage from '../assets/images/bouquets/3.jpeg';

const catalogItems: CatalogItem[] = [
  { name: 'Trousers', category: 'Event Wear', price: 'ZMW 450', image: img4, inStock: true },
  { name: 'Vintage Flap Bag', category: 'Designer Bag', price: 'ZMW 450', image: img7, inStock: false },
  { name: 'Vintage Flap Bag', category: 'Designer Bag', price: 'ZMW 350', image: img9, inStock: false },
  { name: 'Trousers', category: 'Event Wear', price: 'ZMW 350', image: img14, inStock: true },
  { name: 'Strap beige Bag', category: 'Designer Bag', price: 'ZMW 400', image: img10, inStock: true },
  { name: 'Black Leather Bag', category: 'Designer Bag', price: 'ZMW 400', image: img13, inStock: true },
  { name: 'Flap designer Bag', category: 'Designer Bag', price: 'ZMW 400', image: img12, inStock: true },
  { name: 'Black Leather Bag', category: 'Designer Bag', price: 'ZMW 400', image: img11, inStock: true },
];

const Catalog: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', pb: 8 }}>
      
      {/* Hero Banner with background image */}
      <HeroBanner
        title="The Catalog"
        subtitle="A curated selection of timeless elegance"
        backgroundImage={bannerImage}
      />

      <Container sx={{ mt: 6 }}>
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          color={theme.palette.text.primary}
        >
          Signature Pieces
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          color={theme.palette.text.secondary}
        >
          Discover our hand-selected items, handbags, clothes, and luxury accessories.
          Each piece reflects refined craftsmanship, feminine strength, and quiet sophistication.
        </Typography>

        <CatalogGrid items={catalogItems} />
      </Container>
    </Box>
  );
};

export default Catalog;
