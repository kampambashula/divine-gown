import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <Box
      sx={{
        p: 8,
        textAlign: 'center',
        background: 'linear-gradient(45deg, #07281C, #0D3425, #49836D, #07281B, #DBF7EE)',
        color: '#DBF7EE',
      }}
    >
      <Typography variant="h3" gutterBottom>{title}</Typography>
      <Typography variant="h6" gutterBottom>{subtitle}</Typography>
      {buttonText && buttonLink && (
        <Button variant="contained" color="primary" href={buttonLink}>{buttonText}</Button>
      )}
    </Box>
  );
};

export default HeroBanner;
