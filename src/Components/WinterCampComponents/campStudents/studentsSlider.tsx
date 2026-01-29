import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useRef } from "react";
import { StudentCard } from "./studentsCard";
import { studentsData } from "./students";
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
      <Typography variant="h3" sx={{ fontWeight: 800, textAlign: "center", color: "#7B2D47", mb: 6, textShadow: "0 2px 8px rgba(123, 45, 71, 0.2)", mt: 6 }}>
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
      
      <Box sx={{ position: "relative", p: 3 }}>
        <IconButton onClick={() => handleScroll("left")} sx={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "white", boxShadow: 2 }}>
          <ArrowBackIosNew />
        </IconButton>

        <Box ref={sliderRef} sx={{ display: "flex", gap: 2, overflowX: "auto", overflowY: "visible", scrollBehavior: "smooth", py: 6, "&::-webkit-scrollbar": { display: "none" } }}>
          {students.map((student) => (
            <Box key={student.id} sx={{ minWidth: 260, maxWidth: 260 }}>
              <StudentCard student={student} />
            </Box>
          ))}
        </Box>

        <IconButton onClick={() => handleScroll("right")} sx={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "white", boxShadow: 2 }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}