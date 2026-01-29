import { Box, Container, Typography } from "@mui/material";
import { students } from "../../../data/students";
import { StudentCard } from "./studentsCard";
import { useTranslation } from "react-i18next";


export function StudentsGrid() {
    const { t } = useTranslation();
    return (
        <Container maxWidth="xl" sx={{ py: 12 }}>
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 800,
                    textAlign: "center",
                    color: "#7B2D47",
                    mb: 9,
                    textShadow: "0 2px 8px rgba(123, 45, 71, 0.2)",
                    letterSpacing: "-1px",
                }}
            >
                {t("studentsCard.title")}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "center",
                }}
            >
                {students.map((student) => (
                    <Box
                        key={student.id}
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "calc(50% - 8px)",
                                md: "calc(33.333% - 11px)",
                                lg: "calc(20% - 13px)",
                            },
                            minWidth: 150,
                        }}
                    >
                        <StudentCard student={student} />
                    </Box>
                ))}
            </Box>
        </Container>
    );
}
