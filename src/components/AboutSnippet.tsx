import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';

type AboutSnippetProps = {
  title: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
  textColor?: string;
};

const AboutSnippet: React.FC<AboutSnippetProps> = ({
  title,
  text,
  buttonText,
  buttonLink,
  backgroundColor = '#DBF7EE',
  textColor = '#07281C',
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 700,
        width: '100%',
        textAlign: 'center',
        backgroundColor: backgroundColor,
        color: textColor,
        p: { xs: 3, md: 6 },
        borderRadius: 3,
        mx: 'auto',
        mb: 6,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        {title}
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.6, mb: buttonText ? 3 : 0 }}>
        {text}
      </Typography>

      {buttonText && buttonLink && (
        <Button
          href={buttonLink}
          variant="contained"
          sx={{
            backgroundColor: '#49836D',
            color: '#DBF7EE',
            px: 4,
            py: 1.5,
            '&:hover': { backgroundColor: '#07281C' },
          }}
        >
          {buttonText}
        </Button>
      )}
    </Paper>
  );
};

export default AboutSnippet;
