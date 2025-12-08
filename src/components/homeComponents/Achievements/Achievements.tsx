import { Box, Container } from "@mui/material"
import {
  AchievementsWrapper,
  Card,
  StudentImageLeft,
  StudentImageRight,
  ActionWrapper,
  ViewButton,
  AchievementsTitle,
  AchievementLabel,
  StudentName,
} from "./Achievements.style"

const achievements = [
  {
    title: "Third Place",
    name: "Yousef Barakat",
    studentImage: firstStud,
    backgroundImage: firstBGAch,
  },
  {
    title: "Special Recognition",
    name: "Kareem Mahmmoud",
    studentImage: secStud,
    backgroundImage: secondBGAch,
  },
  {
    title: "Second Place",
    name: "Reem Haddad",
    studentImage: thirdStud,
    backgroundImage: firstBGAch,
  },
]

export function Achievements() {
  return (
    <Container maxWidth="md">
      <br />
      <br />
      <br />
      <br />
      <br />
      <AchievementsTitle variant="h2">Achievements and Awards</AchievementsTitle>
      <AchievementsWrapper>
        {achievements.map((achievement, index) => {
          const isEven = index % 2 === 0

          return (
            <Card key={achievement.name} bg={achievement.backgroundImage}>
              {!isEven && <StudentImageLeft src={achievement.studentImage} alt={achievement.name} />}
              <ActionWrapper align={isEven ? "right" : "left"}>
                <Box display="flex" flexDirection="column">
                  <AchievementLabel>{achievement.title}</AchievementLabel>
                  <StudentName>{achievement.name}</StudentName>
                </Box>
                <ViewButton variant="outlined">View Details</ViewButton>
              </ActionWrapper>
              {isEven && <StudentImageRight src={achievement.studentImage} alt={achievement.name} />}
            </Card>
          )
        })}
      </AchievementsWrapper>
    </Container>
  )
}
