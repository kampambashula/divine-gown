import React from 'react';
import { Grid, Box } from '@mui/material';

type Props = { images: string[] };

const GalleryGrid: React.FC<Props> = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((img, idx) => (
        <Grid
          key={idx}
          sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}
        >
          <Box
            component="img"
            src={img}
            alt={`gallery-${idx}`}
            loading="lazy"
            sx={{ width: '100%', borderRadius: 2, objectFit: 'cover' }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryGrid;
