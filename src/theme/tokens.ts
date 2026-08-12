export const maroon = {
  50: "#FBF4F7",
  100: "#F5E3EA",
  200: "#E8C4D2",
  300: "#D599AF",
  400: "#B96685",
  500: "#96375B",
  600: "#7A1E3C", // brand
  700: "#63182F",
  800: "#471125",
  900: "#2C0A16",
} as const;

export const ink = {
  0: "#FFFFFF",
  25: "#FCFBFB",
  50: "#F7F5F5",
  100: "#EFEBEC",
  200: "#E1DBDD",
  300: "#C6BDC0",
  400: "#9C9195",
  500: "#736A6D",
  600: "#544D50",
  700: "#3A3437",
  800: "#241F22",
  900: "#150F12",
  950: "#0C070A",
} as const;

export const gold = {
  100: "#FBF0D9",
  200: "#F4DCA8",
  300: "#E9C271",
  400: "#D9A441", // accent
  500: "#B9852C",
  600: "#8C611C",
} as const;

export const teal = {
  100: "#E0F0EE",
  200: "#B4DAD5",
  300: "#6FB3AB",
  400: "#2F7F76",
  500: "#215C55",
} as const;

export const status = {
  success: "#2E7D5B",
  successSoft: "#E4F1EA",
  warning: "#B5761C",
  warningSoft: "#FAF0DF",
  error: "#B3261E",
  errorSoft: "#FBE9E7",
  info: teal[400],
  infoSoft: teal[100],
} as const;

export const palette = {
  maroon,
  ink,
  gold,
  teal,
  status,

  canvas: ink[25], // page background
  surface: ink[0], // raised / content background
  surfaceMuted: ink[50],
  surfaceSunken: ink[100],

  night: "#150F12",
  nightRaised: "#221A1E",
  nightLine: "rgba(255,255,255,0.10)",

  text: ink[900],
  textSecondary: ink[600],
  textMuted: ink[500],
  textOnDark: "#F6F1F3",
  textOnDarkMuted: "rgba(246,241,243,0.66)",

  line: "rgba(21,15,18,0.10)",
  lineStrong: "rgba(21,15,18,0.18)",
} as const;

export const fonts = {
  display: '"Lenos", "Readex Pro", "Segoe UI", sans-serif',
  body: '"Readex Pro", "Lenos", "Segoe UI", sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
} as const;

export const type = {
  display: "clamp(2.75rem, 1.6rem + 5.2vw, 6rem)",
  h1: "clamp(2.25rem, 1.4rem + 3.6vw, 4rem)",
  h2: "clamp(1.75rem, 1.2rem + 2.4vw, 3rem)",
  h3: "clamp(1.375rem, 1.05rem + 1.4vw, 2.125rem)",
  h4: "clamp(1.125rem, 1rem + 0.6vw, 1.5rem)",
  h5: "1.125rem",
  h6: "1rem",
  lede: "clamp(1.0625rem, 1rem + 0.35vw, 1.3125rem)",
  body: "1rem",
  small: "0.875rem",
  micro: "0.78125rem",
  eyebrow: "0.6875rem",
} as const;

export const radius = {
  xs: 4,
  sm: 8,
  md: 14,
  lg: 22,
  xl: 32,
  pill: 999,
} as const;

export const shadow = {
  none: "none",
  xs: "0 1px 2px rgba(21,15,18,0.05)",
  sm: "0 2px 8px rgba(21,15,18,0.06)",
  md: "0 10px 30px -12px rgba(21,15,18,0.18)",
  lg: "0 24px 60px -24px rgba(21,15,18,0.28)",
  glow: `0 24px 70px -30px ${maroon[600]}80`,
} as const;

export const rhythm = {
  sectionY: { xs: 8, md: 14, lg: 18 },
  sectionYTight: { xs: 6, md: 10 },
  gutter: { xs: 2.5, sm: 4, lg: 6 },
  maxWidth: 1280,
  proseWidth: 68, // ch
} as const;

export const motion = {
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  fast: "180ms",
  base: "320ms",
  slow: "620ms",
  slower: "900ms",

  easeSnap: "cubic-bezier(0.25, 0.8, 0.25, 1)",
  snap: "140ms",
  snapSlow: "220ms",
  snapMedia: "340ms",
} as const;

export const zIndex = {
  rail: 5,
  header: 1200,
  drawer: 1300,
  lightbox: 1400,
} as const;

export const alpha = (hex: string, a: number) => {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

export const tokens = {
  palette,
  fonts,
  type,
  radius,
  shadow,
  rhythm,
  motion,
  zIndex,
  alpha,
};

export default tokens;
