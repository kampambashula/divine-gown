import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string; // NEW: image for background
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 300, sm: 400, md: 500 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: theme.palette.common.white,
        px: 3,
        // Background image + overlay gradient
        backgroundImage: `
          linear-gradient(
            rgba(7, 40, 28, 0.6), 
            rgba(7, 40, 28, 0.6)
          ),
          url(${backgroundImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, mb: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: 400, mb: 4 }}
      >
        {subtitle}
      </Typography>

      {buttonText && buttonLink && (
        <Button
          variant="contained"
          href={buttonLink}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            px: 4,
            py: 1.5,
            '&:hover': { backgroundColor: theme.palette.primary.dark },
          }}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default HeroBanner;
