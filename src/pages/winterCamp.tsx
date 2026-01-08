import { Box } from "@mui/material";
import Trainers from "../Components/WinterCampComponents/trainers/trainers.tsx";
import Agenda from "../Components/WinterCampComponents/agenda/agenda.tsx";

export default function WinterCamp() {
 return (
    <Box sx={{ background: "#f5f5f5" }}>
     <Trainers />
     <Agenda />
    </Box>
  )
}