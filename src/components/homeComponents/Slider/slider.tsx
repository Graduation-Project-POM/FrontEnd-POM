import { Container } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import firstSlideBG from "../../../assest/images/firstSlideBG.png"
import threePeople from '../../../assest/images/threePeople.png';
import twoPeople from '../../../assest/images/twoPeople.png';
import mathBoy from '../../../assest/images/mathBoy.png';
import secondSlideBG from "../../../assest/images/secondSlideBG.png"
import firstChart from "../../../assest/images/firstChart.png"
import secondChart from "../../../assest/images/secondChart.png"
import thirdChart from "../../../assest/images/thirdChart.png"
import thirdSlideBG from "../../../assest/images/thirdSlideBG.png"
import comPerson from "../../../assest/images/comPerson.png"
import { StyledSlide, ContentWrapper, Heading, Subtext, ExploreButton, StartButton, ButtonGroup, SecondHeading, ThirdSlideContent, ThirdSlideHeading, WhiteExploreButton, WhiteStartButton, ChartWrapper, ComPersonImg, MathBoy } from "./slider.style"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar } from "swiper/modules"

export function Slider() {
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
        <StyledSlide bg={firstSlideBG}>
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
              <img src={threePeople} alt="Three People" />
              <img src={twoPeople} alt="Two People" />
              <MathBoy src={mathBoy} alt="Math" />
            </ContentWrapper>
          </Container>
        </StyledSlide>
      </SwiperSlide>

      <SwiperSlide>
        <StyledSlide bg={secondSlideBG} overlay>
          <Container>
            <ContentWrapper>
              <SecondHeading variant="h1">
                From Palestine..
                <br />
                to the World Stage.
              </SecondHeading>
              <ButtonGroup>
                <ExploreButton variant="outlined">Explore</ExploreButton>
                <StartButton variant="contained">Start</StartButton>
              </ButtonGroup>
            </ContentWrapper>
          </Container>
        </StyledSlide>
        <ChartWrapper>
          <img src={firstChart} alt="First Chart" />
          <img src={secondChart} alt="Second Chart" />
          <img src={thirdChart} alt="Third Chart" />
        </ChartWrapper>
      </SwiperSlide>

      <SwiperSlide>
        <StyledSlide bg={thirdSlideBG}>
          <ComPersonImg src={comPerson} alt="Programs illustration" />
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
          <img src={thirdChart} alt="Third Chart" />
          <img src={secondChart} alt="Second Chart" />
          <img src={firstChart} alt="First Chart" />
        </ChartWrapper>
      </SwiperSlide>

    </Swiper>
  )
}
