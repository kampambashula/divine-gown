import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Grid,
  Modal,
  IconButton,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const COLORS = {
  evergreen: '#07281C',
  evergreen2: '#0D3425',
  jungleTeal: '#49836D',
  softGold: '#C9A24D',
  mutedGrey: '#9E9E9E',
};

export type CatalogItem = {
  name: string;
  category: string;
  price?: string;
  image: string;
  inStock: boolean;
};

type Props = {
  items: CatalogItem[];
};

// 👉 Replace with client WhatsApp number
const WHATSAPP_NUMBER = '260968172508';

const CatalogGrid: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<CatalogItem | null>(null);

  const handleOpen = (item: CatalogItem) => {
    setActiveItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveItem(null);
  };

  const getWhatsappLink = (item: CatalogItem) => {
    const message = `Hello, I’m interested in the following item:%0A
• ${item.name}
• Category: ${item.category}
• Price: ${item.price ?? 'Enquiry'}
Is it available?`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <>
      <Grid container spacing={4} columns={12}>
        {items.map((item, idx) => (
          <Grid
            key={idx}
            sx={{
              gridColumn: {
                xs: 'span 12',
                sm: 'span 6',
                md: 'span 4',
              },
            }}
          >
            <Card
              sx={{
                position: 'relative',
                height: '100%',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 4,
                cursor: 'pointer',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: 10,
                  '& .overlay': { opacity: 1 },
                },
              }}
              onClick={() => handleOpen(item)}
            >
              {/* Image */}
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="340"
                  image={item.image}
                  alt={item.name}
                  loading="lazy" // ✅ Lazy loading
                  sx={{
                    filter: item.inStock ? 'none' : 'grayscale(80%)',
                  }}
                />

                {/* Stock */}
                <Chip
                  label={item.inStock ? 'In Stock' : 'Out of Stock'}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: item.inStock
                      ? COLORS.softGold
                      : COLORS.mutedGrey,
                    color: '#fff',
                    fontWeight: 600,
                  }}
                />

                {/* Hover Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(7,40,28,0.65)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{
                      color: '#fff',
                      border: '1px solid #fff',
                      px: 3,
                      py: 1,
                      letterSpacing: 1,
                    }}
                  >
                    View Details
                  </Typography>
                </Box>
              </Box>

              {/* Text */}
              <CardContent>
                <Typography
                  variant="subtitle2"
                  sx={{ color: COLORS.jungleTeal }}
                >
                  {item.category}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ color: COLORS.evergreen, fontWeight: 600 }}
                >
                  {item.name}
                </Typography>

                {item.price && (
                  <Typography
                    variant="body1"
                    sx={{ mt: 1, color: COLORS.evergreen2 }}
                  >
                    {item.price}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ===== MODAL ===== */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '92%', sm: 420 },
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 24,
            p: 2,
            outline: 'none',
          }}
        >
          {activeItem && (
            <>
              <IconButton
                onClick={handleClose}
                sx={{ position: 'absolute', top: 8, right: 8 }}
              >
                <CloseIcon />
              </IconButton>

              <Box
                component="img"
                src={activeItem.image}
                alt={activeItem.name}
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  mb: 2,
                }}
              />

              <Typography
                variant="subtitle2"
                sx={{ color: COLORS.jungleTeal }}
              >
                {activeItem.category}
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: COLORS.evergreen, fontWeight: 600 }}
              >
                {activeItem.name}
              </Typography>

              {activeItem.price && (
                <Typography
                  variant="body1"
                  sx={{ mt: 1, color: COLORS.evergreen2 }}
                >
                  {activeItem.price}
                </Typography>
              )}

              <Button
                fullWidth
                startIcon={<WhatsAppIcon />}
                sx={{
                  mt: 3,
                  backgroundColor: '#25D366',
                  color: '#fff',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#1ebe5d',
                  },
                }}
                href={getWhatsappLink(activeItem)}
                target="_blank"
              >
                Enquire on WhatsApp
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CatalogGrid;
