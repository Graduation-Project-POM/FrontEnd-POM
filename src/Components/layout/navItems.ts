export interface NavItem {
  to: string;
  /** i18n key, resolved at render time. */
  label: string;
}

/** The product's primary navigation, shared by the header, the mobile menu and the footer. */
export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "nav.home" },
  { to: "/resources", label: "nav.resources" },
  { to: "/trainingPath", label: "nav.camp" },
  { to: "/news", label: "nav.news" },
  { to: "/Developers", label: "nav.Developers" },
];
