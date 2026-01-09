import { Box } from "@mui/material";
// import Trainers from "../Components/WinterCampComponents/trainers/trainers.tsx";
// import Agenda from "../Components/WinterCampComponents/agenda/agenda.tsx";
import Home from "../Components/WinterCampComponents/homepage/home.tsx";
import {About} from "../Components/WinterCampComponents/about/about.tsx";
import Galary from "../Components/WinterCampComponents/galary/galary.tsx";

export default function WinterCamp() {
  return (
    <Box sx={{ background: "#f5f5f5" }}>
      <Home />
      <About />
     {/* <Agenda />

      <Trainers /> */}
      <Galary />

    </Box>
  )
}