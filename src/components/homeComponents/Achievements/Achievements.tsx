import { Container } from "@mui/material"
import {
  AchievementsWrapper,
  Card,
  StudentImageLeft,
  StudentImageRight,
  ActionWrapper,
  ViewButton,
  AchievementsTitle,
} from "./AchievementsStyle"

const achievements = [
  {
    title: "Third Place",
    name: "Yousef Barakat",
    studentImage: "/firstStud.png",
    backgroundImage: "/firstBGAch.png",
  },
  {
    title: "Special Recognition",
    name: "Kareem Mahmmoud",
    studentImage: "/secStud.png",
    backgroundImage: "/secondBGAch.png",
  },
  {
    title: "Second Place",
    name: "Reem Haddad",
    studentImage: "/thirdStud.png",
    backgroundImage: "/firstBGAch.png",
  },
]

function Achievements() {
  return (
    <Container maxWidth="md">
      <AchievementsTitle variant="h2">
        Achievements and Awards
      </AchievementsTitle>
      <AchievementsWrapper>
        {achievements.map((achievement, index) => {
          const isEven = index % 2 === 0

          return (
            <Card key={achievement.name} bg={achievement.backgroundImage}>
              {!isEven && (
                <StudentImageLeft
                  src={achievement.studentImage}
                  alt={achievement.name}
                />
              )}
              <ActionWrapper align={isEven ? "right" : "left"}>
                <ViewButton variant="outlined">
                  View Details
                </ViewButton>
              </ActionWrapper>
              {isEven && (
                <StudentImageRight
                  src={achievement.studentImage}
                  alt={achievement.name}
                />
              )}
            </Card>
          )
        })}
      </AchievementsWrapper>
    </Container>
  )
}

export default Achievements
