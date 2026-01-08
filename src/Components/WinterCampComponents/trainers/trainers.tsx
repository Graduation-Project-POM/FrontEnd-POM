import { Grid, Stack } from "@mui/material"
import {
  PageWrapper,
  Container,
  Header,
  HeaderTitle,
  HeaderLine,
  TeacherCard,
  HoverOverlay,
  ImageWrapper,
  ImageCard,
  ImageBox,
  ContentGrid,
  Subtitle,
  Title,
  Description,
  TeacherName,
  TeacherJob,
  PartnerGrid,
  PartnerItem,
  PartnerCard,
  PartnerImageBox,
  PartnerImage,
  TeacherImage,
} from "./trainersStyles"

type Teacher = {
  name: string
  title: string
  subtitle: string
  description: string
  image: string
}

export default function Trainers() {
  const teachers: Teacher[] = [
    {
      name: "Dr. Adnan Qadri",
      title: "Dr. Adnan Qadri",
      subtitle: "طريق الأولمبياد الدولي للبرمجيات من القاع إلى القمة",
      description:
        "Expert in problem-solving strategies, experienced Olympiad mentor, author of math-training guides used in schools.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    },
    {
      name: "Ms. Rana Shweiki",
      title: "Name: Ms. Rana Shweiki",
      subtitle: "طريق الأولمبياد الدولي للبرمجيات من القاع إلى القمة",
      description:
        "Specialization: Extensive experience designing gifted student programs.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    },
  ]

  return (
    <PageWrapper>
      <Container>
        <Header>
          <HeaderTitle>Teachers</HeaderTitle>
          <HeaderLine />
        </Header>

        <Stack spacing={8}>
          {teachers.map((teacher, index) => (
            <TeacherCard key={index}>
              <HoverOverlay />

              <Grid container>
                <ImageWrapper>
                  <ImageCard>
                    <ImageBox>
                      <TeacherImage
                        src={teacher.image}
                        alt={teacher.name}
                      />
                    </ImageBox>

                    <Stack spacing={1} alignItems="center">
                      <TeacherName>{teacher.name}</TeacherName>
                      <TeacherJob>{teacher.title}</TeacherJob>
                    </Stack>
                  </ImageCard>
                </ImageWrapper>

                <ContentGrid item xs={12} md={6}>
                  <Subtitle>{teacher.subtitle}</Subtitle>
                  <Title>{teacher.title}</Title>
                  <Description>{teacher.description}</Description>

                  <PartnerGrid container spacing={2}>
                    {["/Partner1.png", "/Partner2.png", "/Partner3.jpg"].map(
                      (src, i) => (
                        <PartnerItem item xs={4} key={i}>
                          <PartnerCard>
                            <PartnerImageBox>
                              <PartnerImage src={src} alt={`Partner ${i + 1}`} />
                            </PartnerImageBox>
                          </PartnerCard>
                        </PartnerItem>
                      )
                    )}
                  </PartnerGrid>
                </ContentGrid>
              </Grid>
            </TeacherCard>
          ))}
        </Stack>
      </Container>
    </PageWrapper>
  )
}
