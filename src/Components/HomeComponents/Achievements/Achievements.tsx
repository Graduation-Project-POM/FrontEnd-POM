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
} from "./AchievementsStyle.ts"
import { useTranslation } from "react-i18next"

const achievements = [
  {
    title: "achievements.third_place",
    name: "achievements.yousef",
    studentImage: "/firstStud.png",
    backgroundImage: "/firstBGAch.png",
  },
  {
    title: "achievements.special",
    name: "achievements.kareem",
    studentImage: "/secStud.png",
    backgroundImage: "/secondBGAch.png",
  },
  {
    title: "achievements.second_place",
    name: "achievements.reem",
    studentImage: "/thirdStud.png",
    backgroundImage: "/firstBGAch.png",
  },
]

function Achievements() {
  const { t, i18n } = useTranslation()

  return (
    <Container
      maxWidth="md"
      sx={{
        direction: i18n.language === "ar" ? "rtl" : "ltr",
        textAlign: i18n.language === "ar" ? "right" : "left",
      }}
    >
      <br /><br /><br /><br /><br />

      <AchievementsTitle variant="h2">
        {t("achievements.title")}
      </AchievementsTitle>

      <AchievementsWrapper>
        {achievements.map((achievement, index) => {
          const isEven = index % 2 === 0

          return (
            <Card key={achievement.name} bg={achievement.backgroundImage}>

              {!isEven && (
                <StudentImageLeft
                  src={achievement.studentImage}
                  alt={t(achievement.name)}
                />
              )}

              <ActionWrapper align={isEven ? "right" : "left"}>
                <Box display="flex" flexDirection="column">
                  <AchievementLabel>{t(achievement.title)}</AchievementLabel>
                  <StudentName>{t(achievement.name)}</StudentName>
                </Box>

                <ViewButton variant="outlined">
                  {t("achievements.view_details")}
                </ViewButton>
              </ActionWrapper>

              {isEven && (
                <StudentImageRight
                  src={achievement.studentImage}
                  alt={t(achievement.name)}
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
