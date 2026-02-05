import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Theme colors
const COLORS = {
  evergreen: '#07281C',
  evergreen2: '#0D3425',
  jungleTeal: '#49836D',
  frozenWater: '#DBF7EE',
};

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        bgcolor: COLORS.frozenWater,
        color: COLORS.evergreen2,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo / Company Name */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: COLORS.evergreen,
            fontWeight: 600,
            fontSize: '1.25rem',
          }}
        >
          Divine Gown Limited
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          {['Home', 'About', 'Services', 'Team', 'Contact'].map((page) => (
            <Button
              key={page}
              component={Link}
              to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
              sx={{
                color: COLORS.evergreen2,
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  color: COLORS.jungleTeal,
                  backgroundColor: 'transparent',
                },
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
