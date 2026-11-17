import { Suspense, lazy } from "react";
import { Box, CircularProgress } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { palette } from "./theme/tokens";

const Home = lazy(() => import("./pages/home"));
const Resources = lazy(() => import("./pages/resources"));
const Worksheets = lazy(() => import("./pages/worksheets"));
const TrainingCamp = lazy(() => import("./pages/trainingCamp"));
const Developers = lazy(() => import("./pages/Developers"));
const News = lazy(() => import("./pages/news"));

function RouteFallback() {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        backgroundColor: palette.canvas,
      }}
    >
      <CircularProgress size={26} thickness={4} sx={{ color: palette.maroon[600] }} />
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/worksheets/all" element={<Worksheets />} />
          <Route path="/trainingPath" element={<TrainingCamp />} />
          <Route path="/winterPath" element={<Navigate to="/trainingPath" replace />} />
          <Route path="/Developers" element={<Developers />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
