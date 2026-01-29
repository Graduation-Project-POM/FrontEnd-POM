import { CardContent, Avatar, Typography, Box } from "@mui/material";
import { Award } from "lucide-react";
import { LocationOn } from "@mui/icons-material";
import { StyledCard, AvatarWrapper, BadgeWrapper, RoleBadge, cardStyles } from "./studentsCardStyle";


interface Student {
  id: number;
  imageUrl: string;
  name: string;
  directorate: string;
  school: string;
}

interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <StyledCard>
      <CardContent sx={cardStyles.cardContent}>
        <AvatarWrapper>
          <Avatar src={student.imageUrl} alt={student.name} sx={cardStyles.avatar} />
          <BadgeWrapper>
            <Award size={14} color="white" />
          </BadgeWrapper>
        </AvatarWrapper>

        <Typography variant="subtitle2" sx={cardStyles.name}>
          {student.name}
        </Typography>

        <RoleBadge>{student.school}</RoleBadge>
        <Box sx={cardStyles.countryBox}>
          <LocationOn sx={cardStyles.locationIcon} />
          <Typography variant="body2" color="text.secondary">
            {student.directorate}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
}