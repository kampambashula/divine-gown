// src/pages/Contact.tsx
import React from 'react';
import { Container, Typography, TextField, Button, Box, useTheme } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';

// Optional banner image for contact page
import bannerImage from '../assets/images/bouquets/6.jpg';

const Contact: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', pb: 6 }}>
      
      {/* Hero Banner with background image */}
      <HeroBanner
        title="Contact Divine Gown Limited"
        subtitle="We’d love to hear from you"
        backgroundImage={bannerImage}
      />

      <Container sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        
        {/* Contact Info */}
        <ServiceCard
          title="Contact Information"
          description={
            <>
              Divine Gown Limited<br />
              Lusaka, Zambia<br />
              Email: info@divinegown.co.zm<br />
              Phone: +260 968 172 508
            </>
          }
          link="#"
          backgroundColor={theme.palette.background.paper}
          textColor={theme.palette.text.primary}
        />

        {/* Contact Form */}
        <Box
          sx={{
            maxWidth: 600,
            width: '100%',
            p: 3,
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" gutterBottom color={theme.palette.text.primary}>
            Send a Message
          </Typography>
          <Box
            component="form"
            sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField label="Name" variant="outlined" fullWidth required />
            <TextField label="Email" type="email" variant="outlined" fullWidth required />
            <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                '&:hover': { backgroundColor: theme.palette.primary.dark },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
