import { createTheme } from "@mui/material/styles";
import { palette, fonts, type, radius, shadow, motion, rhythm } from "./tokens";

/* ---------------------------------------------- custom variant type support */

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display: React.CSSProperties;
    eyebrow: React.CSSProperties;
    lede: React.CSSProperties;
    mono: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
    eyebrow?: React.CSSProperties;
    lede?: React.CSSProperties;
    mono?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
    eyebrow: true;
    lede: true;
    mono: true;
  }
}

/* ----------------------------------------------------------------- theme */

export const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },

  palette: {
    mode: "light",
    primary: {
      main: palette.maroon[600],
      light: palette.maroon[400],
      dark: palette.maroon[800],
      contrastText: "#fff",
    },
    secondary: {
      main: palette.gold[400],
      light: palette.gold[200],
      dark: palette.gold[600],
      contrastText: palette.ink[900],
    },
    info: { main: palette.teal[400] },
    success: { main: palette.status.success },
    warning: { main: palette.status.warning },
    error: { main: palette.status.error },
    background: {
      default: palette.canvas,
      paper: palette.surface,
    },
    text: {
      primary: palette.text,
      secondary: palette.textSecondary,
      disabled: palette.textMuted,
    },
    divider: palette.line,
  },

  shape: { borderRadius: radius.md },

  typography: {
    fontFamily: fonts.body,
    htmlFontSize: 16,

    display: {
      fontFamily: fonts.display,
      fontSize: type.display,
      fontWeight: 800,
      lineHeight: 0.94,
      letterSpacing: "-0.035em",
    },
    h1: {
      fontFamily: fonts.display,
      fontSize: type.h1,
      fontWeight: 800,
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: fonts.display,
      fontSize: type.h2,
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontFamily: fonts.display,
      fontSize: type.h3,
      fontWeight: 700,
      lineHeight: 1.18,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: fonts.display,
      fontSize: type.h4,
      fontWeight: 700,
      lineHeight: 1.28,
      letterSpacing: "-0.012em",
    },
    h5: {
      fontFamily: fonts.body,
      fontSize: type.h5,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: fonts.body,
      fontSize: type.h6,
      fontWeight: 600,
      lineHeight: 1.45,
    },
    lede: {
      fontFamily: fonts.body,
      fontSize: type.lede,
      fontWeight: 300,
      lineHeight: 1.62,
      color: palette.textSecondary,
    },
    body1: { fontSize: type.body, lineHeight: 1.72, fontWeight: 300 },
    body2: { fontSize: type.small, lineHeight: 1.68, fontWeight: 300 },
    eyebrow: {
      fontFamily: fonts.mono,
      fontSize: type.eyebrow,
      fontWeight: 500,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      lineHeight: 1,
    },
    mono: {
      fontFamily: fonts.mono,
      fontSize: type.micro,
      fontWeight: 400,
      letterSpacing: "0.04em",
      fontVariantNumeric: "tabular-nums",
    },
    button: {
      fontFamily: fonts.body,
      fontWeight: 500,
      fontSize: type.small,
      letterSpacing: "0.01em",
      textTransform: "none",
    },
    caption: {
      fontFamily: fonts.mono,
      fontSize: type.eyebrow,
      letterSpacing: "0.06em",
    },
  },

  transitions: {
    duration: {
      shortest: 150,
      shorter: 180,
      short: 240,
      standard: 320,
      complex: 480,
      enteringScreen: 280,
      leavingScreen: 220,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": { boxSizing: "border-box" },
      },
    },

    MuiContainer: {
      defaultProps: { maxWidth: false },
      styleOverrides: {
        root: ({ theme }) => ({
          maxWidth: rhythm.maxWidth,
          paddingInline: theme.spacing(rhythm.gutter.xs),
          [theme.breakpoints.up("sm")]: {
            paddingInline: theme.spacing(rhythm.gutter.sm),
          },
          [theme.breakpoints.up("lg")]: {
            paddingInline: theme.spacing(rhythm.gutter.lg),
          },
        }),
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: false },
      styleOverrides: {
        root: {
          borderRadius: radius.pill,
          paddingInline: 22,
          paddingBlock: 11,
          transition: `background-color ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}, transform ${motion.fast} ${motion.ease}`,
          "&:active": { transform: "translateY(1px)" },
        },
        sizeSmall: { paddingInline: 16, paddingBlock: 7, fontSize: type.micro },
        sizeLarge: { paddingInline: 30, paddingBlock: 15, fontSize: type.body },
        contained: {
          boxShadow: "none",
          "&:hover": { boxShadow: shadow.md },
        },
        containedPrimary: {
          backgroundColor: palette.maroon[600],
          "&:hover": { backgroundColor: palette.maroon[700] },
        },
        outlined: {
          borderColor: palette.lineStrong,
          color: palette.text,
          "&:hover": {
            borderColor: palette.maroon[600],
            backgroundColor: palette.maroon[50],
          },
        },
        text: {
          "&:hover": { backgroundColor: palette.maroon[50] },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: `all ${motion.base} ${motion.ease}`,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: fonts.mono,
          fontSize: type.eyebrow,
          letterSpacing: "0.06em",
          borderRadius: radius.xs,
          height: 26,
        },
        outlined: { borderColor: palette.lineStrong },
      },
    },

    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },

    MuiLink: {
      defaultProps: { underline: "none" },
      styleOverrides: {
        root: {
          color: "inherit",
          transition: `color ${motion.base} ${motion.ease}`,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.ink[900],
          fontFamily: fonts.mono,
          fontSize: type.eyebrow,
          letterSpacing: "0.06em",
          borderRadius: radius.xs,
          paddingInline: 10,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radius.pill,
          backgroundColor: palette.surface,
          fontSize: type.small,
          "& fieldset": { borderColor: palette.line },
          "&:hover fieldset": { borderColor: palette.lineStrong },
          "&.Mui-focused fieldset": {
            borderColor: palette.maroon[600],
            borderWidth: 1,
          },
        },
        input: { paddingBlock: 12 },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: { borderRadius: radius.lg },
      },
    },
  },
});

export default theme;
