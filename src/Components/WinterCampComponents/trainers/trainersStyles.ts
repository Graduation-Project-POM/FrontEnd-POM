import type { SxProps, Theme } from "@mui/material"

export const pageWrapper: SxProps<Theme> = {
  p: 3,
}

export const sectionTitle = (mt = 0): SxProps<Theme> => ({
  textAlign: "center",
  mt,
  mb: 2,
  color: "#7A1E3C",
  fontWeight: 700,
})

export const cardsWrapper: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  gap: 3,
  justifyContent: "center",
  mt: 2,
}

export const card: SxProps<Theme> = {
  bgcolor: "#f5f5f5",
  color: "black",
  borderRadius: 2,
  width: { xs: "100%", sm: 350 },
  minHeight: 250,
  transition: "all 0.3s ease",
  cursor: "pointer",
  border: "2px solid transparent",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 24px rgba(122, 30, 60, 0.3)",
    borderColor: "#7A1E3C",
    bgcolor: "#fff",
  },
}

export const cardContent: SxProps<Theme> = {
  p: 2,
}

export const textWrapper: SxProps<Theme> = {
  textAlign: "right",
}

export const image: SxProps<Theme> = {
  width: 120,
  height: "auto",
  float: "left",
  marginRight: 2,
  marginBottom: 1,
  borderRadius: 1,
  objectFit: "cover",
  transition: "all 0.3s ease",
  border: "3px solid #7A1E3C",
  boxShadow: "0 4px 8px rgba(122, 30, 60, 0.2)",
}

export const nameText: SxProps<Theme> = {
  mb: 1,
  color: "#7A1E3C",
  fontWeight: 700,
}

export const subtitleText: SxProps<Theme> = {
  mb: 1,
  color: "#333",
  opacity: 0.9,
  fontWeight: 600,
}

export const descriptionText: SxProps<Theme> = {
  lineHeight: 1.7,
  fontSize: { xs: "0.8rem", md: "0.9rem" },
  whiteSpace: "normal",
  wordBreak: "break-word",
  color: "#555",
}
