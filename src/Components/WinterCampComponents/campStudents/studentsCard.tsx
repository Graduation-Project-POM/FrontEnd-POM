import { CardContent, Avatar, Typography, Box } from "@mui/material";
import { Award } from "lucide-react";
import type { Student } from "../../../types/students";
import { StyledCard, GradientOverlay, AvatarWrapper, HoverBlur, Ring, BadgeWrapper, RoleBadge } from "./studentsCardStyle";
import { useTranslation } from "react-i18next";

interface StudentCardProps {
    student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
    const { t } = useTranslation();

    return (
        <StyledCard>
            <GradientOverlay />

            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 6,
                    pb: 2,
                }}
            >

                <AvatarWrapper>
                    <HoverBlur />
                    <Ring />

                    <Avatar
                        src={student.imageUrl}
                        alt={student.name}
                        sx={{
                            width: "100%",
                            height: "100%",
                            border: "3px solid #7B2D47",
                            boxSizing: "border-box",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "scale(1.1)",
                                boxShadow: "0 0 0 4px rgba(123,45,71,0.3)",
                            },
                        }}
                    />

                    <BadgeWrapper>
                        <Award size={14} color="white" />
                    </BadgeWrapper>
                </AvatarWrapper>

                <Typography
                    variant="subtitle2"
                    sx={{
                        color: "#7B2D47",
                        fontWeight: "bold",
                        fontSize: 16,
                        textAlign: "center",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {student.name}
                </Typography>

                <RoleBadge>{t("studentsCard.studentDesc")}</RoleBadge>

                <Typography
                    variant="body2"
                    sx={{
                        color: "gray",
                        fontSize: 12,
                        textAlign: "center",
                        mt: 0.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {student.directorate}
                </Typography>
            </CardContent>

            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 48,
                    height: 48,
                    background: "linear-gradient(to bottom left, #7B2D47, transparent)",
                    borderBottomLeftRadius: "50%",
                    opacity: 0.1,
                    pointerEvents: "none",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 48,
                    height: 48,
                    background: "linear-gradient(to top right, #7B2D47, transparent)",
                    borderTopRightRadius: "50%",
                    opacity: 0.1,
                    pointerEvents: "none",
                }}
            />
        </StyledCard>
    );
}
