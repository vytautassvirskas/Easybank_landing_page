import Footer from "../organisms/Footer/Footer";
import Header from "../organisms/Header/Header";
import SectionArticles from "../organisms/SectionArticles/SectionArticles";
import SectionFeatures from "../organisms/SectionFeatures/SectionFeatures";
import SectionIntro from "../organisms/SectionIntro/SectionIntro";

const MainPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <SectionIntro></SectionIntro>
        <SectionFeatures></SectionFeatures>
        <SectionArticles></SectionArticles>
        <Footer></Footer>
      </main>
    </>
  );
};

export default MainPage;
