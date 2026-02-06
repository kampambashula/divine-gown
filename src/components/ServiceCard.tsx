import React from 'react';
import { Card, Typography, Button, Box } from '@mui/material';

interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  link: string;
  gradient?: string;
  backgroundColor?: string;
  textColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
  gradient,
  backgroundColor,
  textColor,
}) => {
  return (
    <Card
      sx={{
        minWidth: 250,
        maxWidth: 345,
        borderRadius: 2,
        background: gradient || backgroundColor || '#f5f5f5',
        color: textColor || '#07281C',
        textAlign: 'center',
        p: 3,
        flex: '1 1 300px', // allow flexible width in a flex container
        transition: 'transform 0.3s',
        '&:hover': { transform: 'scale(1.05)' },
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
      {link !== '#' && (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button
            variant="contained"
            href={link}
            sx={{
              backgroundColor: '#49836D',
              color: '#DBF7EE',
              '&:hover': { backgroundColor: '#0D3425' },
            }}
          >
            Learn More
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default ServiceCard;
