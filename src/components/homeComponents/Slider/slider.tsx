import { Container } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
<<<<<<< HEAD
import { StyledSlide, ContentWrapper, Heading, Subtext, ExploreButton, StartButton, ButtonGroup, SecondHeading, ThirdSlideContent, ThirdSlideHeading, WhiteExploreButton, WhiteStartButton, ChartWrapper, ComPersonImg, MathBoy } from "./sliderStyle"
=======
import { StyledSlide, ContentWrapper, Heading, Subtext, ExploreButton, StartButton, ButtonGroup, SecondHeading, ThirdSlideContent, ThirdSlideHeading, WhiteExploreButton, WhiteStartButton, ChartWrapper, ComPersonImg, MathBoy } from "./slider.style"
>>>>>>> 00c592b (refactor! change image paths)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar } from "swiper/modules"

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      style={
        {
          "--swiper-navigation-color": "#7A1E3C",
          "--swiper-pagination-color": "#7A1E3C",
        } as React.CSSProperties
      }
    >
      <SwiperSlide>
<<<<<<< HEAD
        <StyledSlide bg={"/firstSlideBG.png"}>
=======
        <StyledSlide bg={"https://whatsmylevel.com/firstSlideBG.png"}>
>>>>>>> 00c592b (refactor! change image paths)
          <Container>
            <ContentWrapper>
              <Heading variant="h1">Where champions begin.</Heading>
              <Subtext>
                We seek students who think beyond numbers, solve puzzles before questions, and reimagine problems.
              </Subtext>
              <ButtonGroup>
                <ExploreButton variant="outlined">Explore</ExploreButton>
                <StartButton variant="contained">Start</StartButton>
              </ButtonGroup>
<<<<<<< HEAD
              <img src={"/threePeople.png"} alt="Three People" />
              <img src={"/twoPeople.png"} alt="Two People" />
              <MathBoy src={"/mathBoy.png"} alt="Math" />
=======
              <img src={"https://whatsmylevel.com/threePeople.png"} alt="Three People" />
              <img src={"https://whatsmylevel.com/twoPeople.png"} alt="Two People" />
              <MathBoy src={"https://whatsmylevel.com/mathBoy.png"} alt="Math" />
>>>>>>> 00c592b (refactor! change image paths)
            </ContentWrapper>
          </Container>
        </StyledSlide>
      </SwiperSlide>

      <SwiperSlide>
<<<<<<< HEAD
        <StyledSlide bg={"/secondSlideBG.png"} overlay>
=======
        <StyledSlide bg={"https://whatsmylevel.com/secondSlideBG.png"} overlay>
>>>>>>> 00c592b (refactor! change image paths)
          <Container>
            <ContentWrapper>
              <SecondHeading variant="h1">
                From Palestine..
                <br />
                to the World Stage......
              </SecondHeading>
              <ButtonGroup>
                <ExploreButton variant="outlined">Explore</ExploreButton>
                <StartButton variant="contained">Start</StartButton>
              </ButtonGroup>
            </ContentWrapper>
          </Container>
        </StyledSlide>
        <ChartWrapper>
<<<<<<< HEAD
          <img src={"/firstChart.png"} alt="First Chart" />
          <img src={"/secondChart.png"} alt="Second Chart" />
          <img src={"/thirdChart.png"} alt="Third Chart" />
=======
          <img src={"https://whatsmylevel.com/firstChart.png"} alt="First Chart" />
          <img src={"https://whatsmylevel.com/secondChart.png"} alt="Second Chart" />
          <img src={"https://whatsmylevel.com/thirdChart.png"} alt="Third Chart" />
>>>>>>> 00c592b (refactor! change image paths)
        </ChartWrapper>
      </SwiperSlide>

      <SwiperSlide>
<<<<<<< HEAD
        <StyledSlide bg={"/thirdSlideBG.png"}>
          <ComPersonImg src={"/comPerson.png"} alt="Programs illustration" />
=======
        <StyledSlide bg={"https://whatsmylevel.com/thirdSlideBG.png"}>
          <ComPersonImg src={"https://whatsmylevel.com/comPerson.png"} alt="Programs illustration" />
>>>>>>> 00c592b (refactor! change image paths)
          <ThirdSlideContent>
            <ThirdSlideHeading variant="h2">
              Programs, camps,
              <br />
              competitions
              <br />
              all in one place
            </ThirdSlideHeading>
            <ButtonGroup >
              <WhiteExploreButton variant="outlined">Explore</WhiteExploreButton>
              <WhiteStartButton variant="contained">Start</WhiteStartButton>
            </ButtonGroup>
          </ThirdSlideContent>
        </StyledSlide>
        <ChartWrapper>
<<<<<<< HEAD
          <img src={"/thirdChart.png"} alt="Third Chart" />
          <img src={"/secondChart.png"} alt="Second Chart" />
          <img src={"/firstChart.png"} alt="First Chart" />
=======
          <img src={"https://whatsmylevel.com/thirdChart.png"} alt="Third Chart" />
          <img src={"https://whatsmylevel.com/secondChart.png"} alt="Second Chart" />
          <img src={"https://whatsmylevel.com/firstChart.png"} alt="First Chart" />
>>>>>>> 00c592b (refactor! change image paths)
        </ChartWrapper>
      </SwiperSlide>

    </Swiper>
  )
}

export default Slider