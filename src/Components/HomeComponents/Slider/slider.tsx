import { Container } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { StyledSlide, ContentWrapper, Heading, Subtext, ExploreButton, StartButton, ButtonGroup, SecondHeading, ThirdSlideContent, ThirdSlideHeading, WhiteExploreButton, WhiteStartButton, ChartWrapper, ComPersonImg, MathBoy } from "./sliderStyle.ts"
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
        <StyledSlide bg={"/firstSlideBG.png"}>
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
              <img src={"/threePeople.png"} alt="Three People" />
              <img src={"/twoPeople.png"} alt="Two People" />
              <MathBoy src={"/mathBoy.png"} alt="Math" />
            </ContentWrapper>
          </Container>
        </StyledSlide>
      </SwiperSlide>

      <SwiperSlide>
        <StyledSlide bg={"/secondSlideBG.png"} overlay>
          <Container>
            <ContentWrapper>
              <SecondHeading variant="h1">
                From Palestine’s PMO
                <br />
                to the World’s IMO
              </SecondHeading>
              <ButtonGroup>
                <ExploreButton variant="outlined">Explore</ExploreButton>
                <StartButton variant="contained">Start</StartButton>
              </ButtonGroup>
            </ContentWrapper>
          </Container>
        </StyledSlide>
        <ChartWrapper>
          <img src={"/firstChart.png"} alt="First Chart" />
          <img src={"/secondChart.png"} alt="Second Chart" />
          <img src={"/thirdChart.png"} alt="Third Chart" />
        </ChartWrapper>
      </SwiperSlide>

      <SwiperSlide>
        <StyledSlide bg={"/thirdSlideBG.png"}>
          <ComPersonImg src={"/comPerson.png"} alt="Programs illustration" />
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
          <img src={"/thirdChart.png"} alt="Third Chart" />
          <img src={"/secondChart.png"} alt="Second Chart" />
          <img src={"/firstChart.png"} alt="First Chart" />
        </ChartWrapper>
      </SwiperSlide>

    </Swiper>
  )
}

export default Slider