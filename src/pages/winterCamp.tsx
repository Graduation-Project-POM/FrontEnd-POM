import { Box } from "@mui/material";
import Trainers from "../components/WinterCampComponents/trainers/trainers.tsx";
import Home from "../Components/WinterCampComponents/homepage/home.tsx";

export default function WinterCamp() {
  return (
    <Box sx={{ background: "#f5f5f5" }}>
      <Home />
      <Trainers />
    </Box>
  )
}