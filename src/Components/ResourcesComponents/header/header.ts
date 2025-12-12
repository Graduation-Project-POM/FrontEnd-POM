import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface RTLProps {
  isrtl?: boolean;
}

export const PageWrapper = styled(Box)<RTLProps>(({ isrtl }) => ({
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
  direction: isrtl ? "rtl" : "ltr",
}));

export const TopBanner = styled(Box)({
  backgroundColor: '#7A1E3C',
  color: 'white',
  padding: '12px 0',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
});

export const HeaderWrapper = styled(Box)({
  backgroundColor: 'white',
  borderBottom: '1px solid #e0e0e0',
  padding: '16px 0',
});

export const HeaderInner = styled(Box)<RTLProps>(({ isrtl }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: isrtl ? "row-reverse" : "row",
}));

export const HeaderLeft = styled(Box)<RTLProps>(({ isrtl }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: isrtl ? "row-reverse" : "row",
  gap: "12px",
}));

export const MainTitle = styled(Typography)({
  fontWeight: 600,
  color: '#333',
  marginBottom: '16px',
  lineHeight: 1.3,
});

export const DescriptionText = styled(Typography)({
  color: '#666',
  marginBottom: '16px',
  lineHeight: 1.8,
});