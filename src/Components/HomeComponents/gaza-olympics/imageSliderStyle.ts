import type { SxProps, Theme } from '@mui/material';

export const sliderContainerStyles: SxProps<Theme> = {
  width: '100%',
  maxWidth: 1400,
  margin: '0 auto',
  borderRadius: 2,
  boxShadow: 3,
  overflow: 'hidden',

  '.swiper': {
    width: '100%',
    height: 'auto',
  },

  '.swiper-slide': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  '.swiper-slide img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
  },

  '.swiper-button-next, .swiper-button-prev': {
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    color: '#7D1C48',
  },

  '.swiper-button-next::after, .swiper-button-prev::after': {
    fontSize: '12px !important',
    lineHeight: 1,
  },

  '.swiper-button-next': {
    right: '16px',
  },
  '.swiper-button-prev': {
    left: '16px',
  },
};

export const titleStyles: SxProps<Theme> = {
  fontSize: { xs: '40px', sm: '46px', md: '52px', lg: '64px' },
  fontWeight: 700,
  color: '#7D1C48',
  mb: 4,
  mt: 15,
};

export const descriptionStyles: SxProps<Theme> = {
  maxWidth: 800,
  margin: '0 auto',
  fontSize: { xs: '16px', md: '20px' },
  color: '#444',
  lineHeight: 1.8,
};

export const sectionBoxStyles: SxProps<Theme> = {
  textAlign: 'center',
  py: { xs: 6, md: 10 },
  px: 2,
};
