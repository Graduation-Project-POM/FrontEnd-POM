import { Box, Typography, Button } from "@mui/material"
import { styled } from "@mui/material/styles"

/* Colors */
export const BG = "#ffffff"
export const FG = "#111827"
export const MUTED = "#6b7280"
export const BORDER = "#e5e7eb"

/* Layout */
export const Page = styled(Box)(() => ({
  minHeight: "100vh",
  backgroundColor: BG,
}))

/* Main */
export const Main = styled(Box)(() => ({
  maxWidth: 1280,
  margin: "0 auto",
  padding: "64px 24px",
}))

export const PageTitle = styled(Typography)(() => ({
  fontSize: 48,
  fontWeight: 800,
  marginBottom: 16,
  color: "#7A1E3C",
  textAlign: "center",
}))

export const PageDescription = styled(Typography)(() => ({
  fontSize: 18,
  color: "#7A1E3C",
  textAlign: "center",
  marginBottom: 48,
}))

/* Day Tabs */
export const Tabs = styled(Box)(() => ({
  display: "flex",
  gap: 24,
  borderBottom: `1px solid ${BORDER}`,
  marginBottom: 32,
}))

export const TabButton = styled(Button)<{ active?: boolean }>(
  ({ active }) => ({
    borderRadius: 0,
    padding: "12px 0",
    fontSize: 14,
    fontWeight: 500,
    color: active ? "#7A1E3C" : "#8a4c60ff",
    borderBottom: active ? `2px solid ${"#5e142cff"}` : "2px solid transparent",
  })
)

/* Table */
export const Table = styled(Box)(() => ({
  border: `1px solid ${BORDER}`,
  borderRadius: 8,
  overflow: "hidden",
}))

export const TableHeader = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "3fr 5fr 4fr",
  padding: "16px 24px",
  backgroundColor: "#f9fafb",
  fontSize: 12,
  fontWeight: 700,
  color: "#7A1E3C",
}))

export const Row = styled(Box)<{ isBreak?: boolean }>(({ isBreak }) => ({
  display: "grid",
  gridTemplateColumns: "3fr 5fr 4fr",
  padding: "20px 24px",
  borderTop: `1px solid ${BORDER}`,
  backgroundColor: isBreak ? "#f9fafb" : "transparent",

  "&:hover": {
    backgroundColor: "#f3f4f6",
  },
}))

export const Cell = styled(Typography)(() => ({
  fontSize: 14,
  color: FG,
}))

export const MutedCell = styled(Typography)(() => ({
  fontSize: 14,
  color: MUTED,
}))
