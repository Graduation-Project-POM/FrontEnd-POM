import type { ReactNode } from "react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import type { SxProps, Theme } from "@mui/material";
import { palette, motion, fonts, radius } from "../../theme/tokens";

interface FilterPillProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  count?: number;
  tone?: "light" | "dark";
}

export function FilterPill({
  children,
  active = false,
  onClick,
  count,
  tone = "light",
}: FilterPillProps) {
  const dark = tone === "dark";
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      aria-pressed={active}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        flexShrink: 0,
        px: 1.75,
        py: 0.875,
        borderRadius: `${radius.pill}px`,
        cursor: "pointer",
        fontFamily: fonts.body,
        fontSize: "0.8125rem",
        fontWeight: 500,
        whiteSpace: "nowrap",
        transition: `color ${motion.snap} ${motion.easeSnap}, background-color ${motion.snap} ${motion.easeSnap}, border-color ${motion.snap} ${motion.easeSnap}, transform ${motion.snapSlow} ${motion.easeSnap}`,
        border: `1px solid ${
          active ? "transparent" : dark ? palette.nightLine : palette.line
        }`,
        backgroundColor: active
          ? palette.maroon[600]
          : dark
            ? "rgba(255,255,255,0.04)"
            : palette.surface,
        color: active ? "#fff" : dark ? palette.textOnDarkMuted : palette.textSecondary,
        "&:hover": {
          borderColor: active ? "transparent" : palette.maroon[300],
          color: active ? "#fff" : palette.maroon[600],
          transform: "translateY(-1px)",
        },
      }}
    >
      {children}
      {count !== undefined && (
        <Box
          component="span"
          sx={{
            fontFamily: fonts.mono,
            fontSize: "0.6875rem",
            opacity: active ? 0.75 : 0.55,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {count}
        </Box>
      )}
    </Box>
  );
}

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  sx?: SxProps<Theme>;
}

export function SearchField({ value, onChange, placeholder, sx }: SearchFieldProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        px: 2,
        height: 46,
        borderRadius: `${radius.pill}px`,
        backgroundColor: palette.surface,
        border: `1px solid ${palette.line}`,
        transition: `border-color ${motion.snap} ${motion.easeSnap}, box-shadow ${motion.snap} ${motion.easeSnap}`,
        "&:focus-within": {
          borderColor: palette.maroon[400],
          boxShadow: `0 0 0 4px ${palette.maroon[50]}`,
        },
        ...sx,
      }}
    >
      <SearchIcon sx={{ fontSize: 19, color: palette.textMuted, flexShrink: 0 }} />
      <InputBase
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        sx={{
          flex: 1,
          fontSize: "0.9375rem",
          fontWeight: 300,
          "& input::placeholder": { color: palette.textMuted, opacity: 1 },
        }}
      />
      {value && (
        <IconButton
          size="small"
          onClick={() => onChange("")}
          aria-label="Clear search"
          sx={{ color: palette.textMuted }}
        >
          <CloseIcon sx={{ fontSize: 16 }} />
        </IconButton>
      )}
    </Box>
  );
}

interface EmptyStateProps {
  title: string;
  hint?: string;
  action?: ReactNode;
}

export function EmptyState({ title, hint, action }: EmptyStateProps) {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: 3,
        textAlign: "center",
        border: `1px dashed ${palette.lineStrong}`,
        borderRadius: `${radius.md}px`,
        backgroundColor: palette.surfaceMuted,
      }}
    >
      <Typography
        sx={{
          fontFamily: fonts.display,
          fontSize: "2.5rem",
          color: palette.maroon[200],
          lineHeight: 1,
          mb: 2,
        }}
      >
        ∅
      </Typography>
      <Typography variant="h4" component="p" sx={{ mb: 1 }}>
        {title}
      </Typography>
      {hint && (
        <Typography sx={{ color: palette.textMuted, maxWidth: "42ch", mx: "auto" }}>
          {hint}
        </Typography>
      )}
      {action && <Box sx={{ mt: 3 }}>{action}</Box>}
    </Box>
  );
}
