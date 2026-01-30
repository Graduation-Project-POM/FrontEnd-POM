import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useRef } from "react";
import { StudentCard } from "./studentsCard";
import { studentsData } from "./students";
import {sliderStyles} from "./studentsCardStyle";
import { useTranslation } from "react-i18next";

export default function StudentsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const students = studentsData(t);

  const handleScroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Typography variant="h3" sx={sliderStyles.title}>
        {t("studentsCard.title")}
        <Box>
          <Typography
            variant="h5"
            sx={{
              width: "100px",
              height: 4,
              backgroundColor: "#7D1C48",
              borderRadius: 2,
              mx: "auto",
              mt: 3,
            }}
          >
          </Typography>
        </Box>
      </Typography>

      <Box sx={sliderStyles.wrapper}>
        <IconButton onClick={() => handleScroll("left")} sx={sliderStyles.leftButton}>
          <ArrowBackIosNew />
        </IconButton>

        <Box ref={sliderRef} sx={sliderStyles.slider}>
          {students.map((student) => (
            <Box key={student.id} sx={sliderStyles.cardWrapper}>
              <StudentCard student={student} />
            </Box>
          ))}
        </Box>

        <IconButton onClick={() => handleScroll("right")} sx={sliderStyles.rightButton}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}