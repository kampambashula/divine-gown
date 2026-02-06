import React from 'react';
import Slider from "react-slick";
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type Props = {
  images: string[];
};

const GalleryCarousel: React.FC<Props> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <Box sx={{ my: 6 }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box key={idx} sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={img}
              alt={`slide-${idx}`}
              sx={{
                width: '100%',
                maxHeight: { xs: 300, sm: 450, md: 500 },
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default GalleryCarousel;
