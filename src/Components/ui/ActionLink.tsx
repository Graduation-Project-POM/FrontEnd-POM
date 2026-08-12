import type { ElementType, ReactNode } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { palette, motion, fonts } from "../../theme/tokens";

interface ActionLinkProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  component?: ElementType;
  /** `external` swaps the arrow for a north-east glyph. */
  external?: boolean;
  tone?: "brand" | "dark" | "light";
  size?: "sm" | "md";
  sx?: SxProps<Theme>;
  target?: string;
  rel?: string;
}

/**
 * The product's one "go somewhere" affordance: a text link with a rule that
 * wipes in and an arrow that steps forward. Used instead of scattering
 * secondary buttons everywhere.
 */
export function ActionLink({
  children,
  component,
  tone = "brand",
  size = "md",
  external = false,
  sx,
  ...rest
}: ActionLinkProps) {
  const color =
    tone === "brand" ? palette.maroon[600] : tone === "dark" ? palette.textOnDark : palette.text;
  const Arrow = external ? NorthEastIcon : ArrowForwardIcon;

  return (
    <Box
      component={component ?? (rest.href ? "a" : "button")}
      {...rest}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        position: "relative",
        border: "none",
        background: "none",
        p: 0,
        cursor: "pointer",
        color,
        textDecoration: "none",
        fontFamily: fonts.body,
        fontWeight: 500,
        fontSize: size === "sm" ? "0.8125rem" : "0.9375rem",
        lineHeight: 1.4,
        letterSpacing: "0.01em",
        "&::after": {
          content: '""',
          position: "absolute",
          insetInline: 0,
          bottom: -5,
          height: "1px",
          backgroundColor: "currentColor",
          transformOrigin: "inline-start",
          transform: "scaleX(0)",
          transition: `transform ${motion.base} ${motion.ease}`,
        },
        "& .action-arrow": {
          transition: `transform ${motion.base} ${motion.ease}`,
          fontSize: size === "sm" ? 15 : 17,
        },
        "&:hover::after, &:focus-visible::after": { transform: "scaleX(1)" },
        "&:hover .action-arrow, &:focus-visible .action-arrow": {
          transform: external
            ? "translate(3px, -3px)"
            : "translateX(var(--pmo-arrow-shift, 5px))",
        },
        // Mirror the arrow, and its travel, in RTL.
        '[dir="rtl"] & .action-arrow': external ? {} : { transform: "scaleX(-1)" },
        '[dir="rtl"] &:hover .action-arrow': external
          ? {}
          : { transform: "scaleX(-1) translateX(5px)" },
        ...sx,
      }}
    >
      <Box component="span">{children}</Box>
      <Arrow className="action-arrow" />
    </Box>
  );
}

export default ActionLink;
