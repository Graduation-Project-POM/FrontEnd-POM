import { Container } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import threePeople from '../../../assets/images/threePeople.png';
import twoPeople from '../../../assets/images/twoPeople.png';
import firstSlideBG from "../../../assets/images/firstSlideBG.png"
import secondSlideBG from "../../../assets/images/secondSlideBG.png"
import { StyledSlide, ContentWrapper, Heading, Subtext, ExploreButton, StartButton, ButtonGroup, SecondHeading } from "./slider.style"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          <Container maxWidth="lg">
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
            </ContentWrapper>
          </Container>
        </StyledSlide>
      </SwiperSlide>

      <SwiperSlide>
        <StyledSlide bg={secondSlideBG} overlay>
          <Container maxWidth="lg">
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
      </SwiperSlide>

    </Swiper>
  )
}
