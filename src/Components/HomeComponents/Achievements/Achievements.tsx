import { Box, Container, Typography } from "@mui/material"
import {
  AchievementsWrapper,
  Card,
  StudentImageLeft,
  StudentImageRight,
  ActionWrapper,
  AchievementsTitle,
  AchievementLabel,
  StudentName,
} from "./AchievementsStyle.ts"
import { useTranslation } from "react-i18next"

const achievements = [
  {
    title: "achievements.first_place",
    name: "achievements.first_place_name",
    center: "achievements.first_place_cnt",
    studentImage: "/P1.png",
    backgroundImage: "/firstBGAch.png",
  },
  {
    title: "achievements.second_place",
    name: "achievements.second_place_name",
    center: "achievements.second_place_cnt",
    studentImage: "/P2.png",
    backgroundImage: "/secondBGAch.png",
  },
  {
    title: "achievements.third_place",
    name: "achievements.third_place_name",
    center: "achievements.third_place_cnt",
    studentImage: "/P3.png",
    backgroundImage: "/firstBGAch.png",
  },
  {
    title: "achievements.fourth_place",
    name: "achievements.fourth_place_name",
    center: "achievements.fourth_place_cnt",
    studentImage: "/P4.png",
    backgroundImage: "/secondBGAch.png",
  },
  {
    title: "achievements.fifth_place",
    name: "achievements.fifth_place_name",
    center: "achievements.fifth_place_cnt",
    studentImage: "/P5.png",
    backgroundImage: "/firstBGAch.png",
  },
  {
    title: "achievements.sixth_place",
    name: "achievements.sixth_place_name",
    center: "achievements.sixth_place_cnt",
    studentImage: "/P6.png",
    backgroundImage: "/secondBGAch.png",
  },
  {
    title: "achievements.seventh_place",
    name: "achievements.seventh_place_name",
    center: "achievements.seventh_place_cnt",
    studentImage: "/P7.png",
    backgroundImage: "/firstBGAch.png",
  },
  {
    title: "achievements.seventh_place",
    name: "achievements.eighth_place_name",
    center: "achievements.eighth_place_cnt",
    studentImage: "/P8.png",
    backgroundImage: "/secondBGAch.png",
  },
  {
    title: "achievements.eighth_place",
    name: "achievements.ninth_place_name",
    center: "achievements.ninth_place_cnt",
    studentImage: "/P9.png",
    backgroundImage: "/firstBGAch.png",
  },
  {
    title: "achievements.eighth_place",
    name: "achievements.tenth_place_name",
    center: "achievements.tenth_place_cnt",
    studentImage: "/P10.png",
    backgroundImage: "/secondBGAch.png",
  },
 
]

function Achievements() {
  const { t, i18n } = useTranslation()

  return (
    <Container
      maxWidth="lg"
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
                  <Typography sx={{ color: "white" }}>{t(achievement.center)}</Typography>
                </Box>

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