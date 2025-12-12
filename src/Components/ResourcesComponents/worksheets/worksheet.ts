import { Box, Typography, Card, CardMedia, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface RTLProps {
  isrtl?: boolean;
}

export const PageWrapper = styled(Box)<RTLProps>(({ isrtl }) => ({
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
  direction: isrtl ? "rtl" : "ltr",
}));

export const SectionTitle = styled(Typography)({
  fontWeight: 600,
  color: '#7A1E3C',
  marginBottom: '32px',
});

export const SectionBox = styled(Box)({
  backgroundColor: '#F7E6D1',
  borderRadius: '16px',
  padding: '32px',
});

export const SectionHeader = styled(Box)<RTLProps>(({ isrtl }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: isrtl ? "row-reverse" : "row",
}));

export const CardsGrid = styled(Box)<RTLProps>(({ isrtl }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  marginTop: "24px",
  marginBottom: "24px",
  direction: isrtl ? "rtl" : "ltr",
}));

export const StyledCard = styled(Card)({
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  overflow: 'hidden',
});

export const StyledCardMedia = styled(CardMedia)({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  cursor: 'pointer',
});

export const NavButtonsWrapper = styled(Box)<RTLProps>(({ isrtl }) => ({
  display: "flex",
  justifyContent: isrtl ? "flex-start" : "flex-end",
  flexDirection: isrtl ? "row-reverse" : "row",
  gap: "8px",
}));


export const PrevBtn = styled(IconButton)({
  backgroundColor: '#a15566',
  color: 'white',
  '&:hover': { backgroundColor: '#8a4857' },
});

export const NextBtn = styled(IconButton)({
  backgroundColor: '#7A1E3C',
  color: 'white',
  '&:hover': { backgroundColor: '#6a2534' },
});
