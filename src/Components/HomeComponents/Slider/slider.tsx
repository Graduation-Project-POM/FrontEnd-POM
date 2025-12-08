import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  StyledSlide,
  ContentWrapper,
  Heading,
  Subtext,
  ExploreButton,
  StartButton,
  ButtonGroup,
  SecondHeading,
  ThirdSlideContent,
  ThirdSlideHeading,
  WhiteExploreButton,
  WhiteStartButton,
  ChartWrapper,
  ComPersonImg,
  MathBoy
} from "./sliderStyle.ts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useTranslation } from "react-i18next";

function Slider() {
  const { t } = useTranslation();

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
          "--swiper-pagination-color": "#7A1E3C"
        } as React.CSSProperties
      }
    >
      {/* SLIDE 1 */}
      <SwiperSlide>
        <StyledSlide bg={"/firstSlideBG.png"}>
          <Container>
            <ContentWrapper>
              <Heading variant="h1">
                {t("slider.slide1.title")}
              </Heading>

              <Subtext>
                {t("slider.slide1.desc")}
              </Subtext>

              <ButtonGroup>
                <ExploreButton variant="outlined">
                  {t("slider.buttons.explore")}
                </ExploreButton>
                <StartButton variant="contained">
                  {t("slider.buttons.start")}
                </StartButton>
              </ButtonGroup>

              <img src={"/threePeople.png"} alt="Three People" />
              <img src={"/twoPeople.png"} alt="Two People" />
              <MathBoy src={"/mathBoy.png"} alt="Math" />
            </ContentWrapper>
          </Container>
        </StyledSlide>
      </SwiperSlide>

      {/* SLIDE 2 */}
      <SwiperSlide>
        <StyledSlide bg={"/secondSlideBG.png"} overlay>
          <Container>
            <ContentWrapper>
              <SecondHeading variant="h1">
                {t("slider.slide2.title1")}
                <br />
                {t("slider.slide2.title2")}
              </SecondHeading>

              <ButtonGroup>
                <ExploreButton variant="outlined">
                  {t("slider.buttons.explore")}
                </ExploreButton>
                <StartButton variant="contained">
                  {t("slider.buttons.start")}
                </StartButton>
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

      {/* SLIDE 3 */}
      <SwiperSlide>
        <StyledSlide bg={"/thirdSlideBG.png"}>
          <ComPersonImg src={"/comPerson.png"} alt="Programs Illustration" />

          <ThirdSlideContent>
            <ThirdSlideHeading variant="h2">
              {t("slider.slide3.line1")}
              <br />
              {t("slider.slide3.line2")}
              <br />
              {t("slider.slide3.line3")}
            </ThirdSlideHeading>

            <ButtonGroup>
              <WhiteExploreButton variant="outlined">
                {t("slider.buttons.explore")}
              </WhiteExploreButton>
              <WhiteStartButton variant="contained">
                {t("slider.buttons.start")}
              </WhiteStartButton>
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
  );
}

export default Slider;
