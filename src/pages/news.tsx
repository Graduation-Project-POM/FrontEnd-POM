import { Navbar } from "../Components/HomeComponents/Navbar/Navbar";
import News from "../Components/NewsComponent/News/News";
import ImoNews from "../Components/NewsComponent/ImoNews/ImoNews";
import CampFooter from "../Components/WinterCampComponents/footer/CampFooter";
export default function NewsPage() {
  return (
    <>
      <Navbar />
      <ImoNews />
      <News />
      <CampFooter />    </>
  );
}