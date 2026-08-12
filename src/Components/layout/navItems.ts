export interface NavItem {
  to: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "nav.home" },
  { to: "/resources", label: "nav.resources" },
  { to: "/trainingPath", label: "nav.camp" },
  { to: "/news", label: "nav.news" },
  { to: "/Developers", label: "nav.Developers" },
];
