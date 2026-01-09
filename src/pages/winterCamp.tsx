import { Box } from "@mui/material";
import Trainers from "../components/WinterCampComponents/trainers/trainers.tsx";
import Home from "../Components/WinterCampComponents/homepage/home.tsx";
import {About} from "../Components/WinterCampComponents/about/about.tsx";
import Galary from "../Components/WinterCampComponents/galary/galary.tsx";

export default function WinterCamp() {
  return (
    <Box sx={{ background: "#f5f5f5" }}>
      <Home />
      <About />
      <Trainers />
      <Galary />
    </Box>
  )
}