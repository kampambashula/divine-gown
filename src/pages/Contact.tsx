// src/pages/Contact.tsx
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';

const COLORS = {
  evergreen: '#07281C',
  evergreen2: '#0D3425',
  jungleTeal: '#49836D',
  frozenWater: '#DBF7EE',
};

const Contact: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.frozenWater, minHeight: '100vh', pb: 6 }}>
      <HeroBanner
        title="Contact Divine Gown Limited"
        subtitle="We’d love to hear from you"
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
          backgroundColor={COLORS.frozenWater}
          textColor={COLORS.evergreen2}
        />

        {/* Contact Form */}
        <Box
          sx={{
            maxWidth: 600,
            width: '100%',
            p: 3,
            backgroundColor: COLORS.frozenWater,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" gutterBottom color={COLORS.evergreen}>
            Send a Message
          </Typography>
          <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Name" variant="outlined" fullWidth required />
            <TextField label="Email" type="email" variant="outlined" fullWidth required />
            <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: COLORS.jungleTeal,
                color: COLORS.frozenWater,
                '&:hover': { backgroundColor: COLORS.evergreen2 },
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
