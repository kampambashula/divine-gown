import React from 'react';
import { Box, Typography, Button } from '@mui/material';

type FeatureSectionProps = {
  image: string;           // Background image
  title: string;           // Large heading
  subtitle?: string;       // Optional subheading
  text?: string;           // Optional descriptive text
  buttonText?: string;     // Optional CTA button
  buttonLink?: string;     // CTA link
  overlayColor?: string;   // Overlay rgba color for text visibility
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  image,
  title,
  subtitle,
  text,
  buttonText,
  buttonLink,
  overlayColor = 'rgba(0,0,0,0.5)', // darker overlay for better contrast
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 300, sm: 400, md: 500 },
        borderRadius: 2,
        overflow: 'hidden',
        mb: 6,
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.7)', // darken image slightly for text readability
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: overlayColor,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',          // enforce white text
          p: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 1, color: '#fff', textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, mb: 2, color: '#fff', textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}
          >
            {subtitle}
          </Typography>
        )}

        {text && (
          <Typography
            variant="body1"
            sx={{ maxWidth: 600, mb: 3, color: '#fff', textShadow: '0.5px 0.5px 2px rgba(0,0,0,0.6)' }}
          >
            {text}
          </Typography>
        )}

        {buttonText && buttonLink && (
          <Button
            href={buttonLink}
            variant="contained"
            sx={{
              backgroundColor: '#C9A24D',
              color: '#fff',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              '&:hover': { backgroundColor: '#B08D3D' },
            }}
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default FeatureSection;
