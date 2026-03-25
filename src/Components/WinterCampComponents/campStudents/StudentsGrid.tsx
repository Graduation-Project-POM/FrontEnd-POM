import { Box, Typography } from "@mui/material";
import { StudentCard } from "./studentsCard";
import { studentsData } from "./students";
import { useTranslation } from "react-i18next";
import { GridStyles } from "./studentsCardStyle";

export default function StudentsGrid() {
  const { t } = useTranslation();
  const students = studentsData(t);

  return (
    <Box>
      <Typography variant="h3" sx={GridStyles.title}>
        {t("studentsCard.title")}
        <Box>
          <Typography
            variant="h5"
            sx={GridStyles.subtitle}
          > 
            {t("studentsCard.subtitle")}
          </Typography>
        </Box>

         <Box>
          <Typography
            variant="h5"
            sx={GridStyles.line}
          />
        </Box>
      </Typography>
      <Box
        sx={GridStyles.boxWrapper}
      >
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </Box>
    </Box>
  );
}
