import React from 'react';
import { Box, Typography, Button } from '@mui/material';

type Props = {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
  buttonText?: string;
  buttonLink?: string;
};

const ImageTextSection: React.FC<Props> = ({ image, title, text, reverse = false, buttonText, buttonLink }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' },
        alignItems: 'center',
        gap: 4,
        my: 8,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ width: { xs: '100%', md: '50%' }, borderRadius: 2, objectFit: 'cover' }}
      />
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <Typography variant="h4" gutterBottom>{title}</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>{text}</Typography>
        {buttonText && buttonLink && (
          <Button href={buttonLink} variant="contained"> {buttonText} </Button>
        )}
      </Box>
    </Box>
  );
};

export default ImageTextSection;
