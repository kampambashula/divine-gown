import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const COLORS = {
  evergreen: '#07281C',
  frozenWater: '#DBF7EE',
};

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: COLORS.frozenWater,
        color: COLORS.evergreen,
        p: 3,
        mt: 6,
        textAlign: 'center',
        borderTop: `1px solid ${COLORS.evergreen}`,
      }}
    >
      <Typography variant="body1" gutterBottom>
        © 2026 Divine Gown Limited. All Rights Reserved.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lusaka, Zambia
      </Typography>
      <Typography variant="body2">
        <Link href="/contact" underline="hover" color={COLORS.evergreen}>
          Contact Us
        </Link>{' '}
        |{' '}
        <Link href="/about" underline="hover" color={COLORS.evergreen}>
          About
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
