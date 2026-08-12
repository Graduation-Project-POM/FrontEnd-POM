import { useEffect, type ReactNode } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import useDirection from "../ui/useDirection";

interface PageShellProps {
  children: ReactNode;
  overlayHeader?: boolean;
}

export function PageShell({ children, overlayHeader = false }: PageShellProps) {
  const { pathname, hash } = useLocation();
  useDirection();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return (
    <Box sx={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <Navbar overlay={overlayHeader} />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default PageShell;
