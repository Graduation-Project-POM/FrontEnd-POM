import { Box } from "@mui/material";
import Trainers from "../Components/WinterCampComponents/trainers/trainers.tsx";
import Agenda from "../Components/WinterCampComponents/agenda/agenda.tsx";
import Home from "../Components/WinterCampComponents/homepage/home.tsx";
import {About} from "../Components/WinterCampComponents/about/about.tsx";
import Galary from "../Components/WinterCampComponents/galary/galary.tsx";
import Material from "../Components/WinterCampComponents/trainingMaterial/material.tsx";
import CampFooter from "../Components/WinterCampComponents/footer/CampFooter.tsx";
import StudentsGrid from "../Components/WinterCampComponents/campStudents/StudentsGrid.tsx";


export default function WinterCamp() {
  return (
    <Box sx={{ background: "#f5f5f5" }}>
      <Home />
      <About />
      <Agenda />
      <Trainers /> 
      <StudentsGrid />
      <Galary />
      <Material />
      <CampFooter/>
    </Box>
  )
}