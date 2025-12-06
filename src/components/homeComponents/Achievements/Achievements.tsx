import { Container } from "@mui/material"

import firstBGAch from "../../../assets/images/firstBGAch.png"
import secondBGAch from "../../../assets/images/secondBGAch.png"
import firstStud from "../../../assets/images/firstStud.png"
import secStud from "../../../assets/images/secStud.png"
import thirdStud from "../../../assets/images/thirdStud.png"
import {
  AchievementsWrapper,
  Card,
  StudentImageLeft,
  StudentImageRight,
  ActionWrapper,
  ViewButton,
  AchievementsTitle,
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
