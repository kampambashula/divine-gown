import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

type FounderHighlightProps = {
  image: string;
  name: string;
  title: string;
  bio: string;
};

const FounderHighlight: React.FC<FounderHighlightProps> = ({ image, name, title, bio }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4,
        p: 3,
        borderRadius: 3,
        backgroundColor: '#DBF7EE',
        color: '#07281C',
        mb: 6,
      }}
    >
      {/* Founder Image */}
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: { xs: '100%', md: 300 },
          height: { xs: 300, md: 300 },
          borderRadius: 3,
          objectFit: 'cover',
          boxShadow: 3,
        }}
      />

      {/* Text */}
      <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          {bio}
        </Typography>
      </Box>
    </Paper>
  );
};

export default FounderHighlight;
