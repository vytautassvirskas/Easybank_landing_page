import style from "./App.module.scss";
import Header from "./components/Header/Header";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";
import SectionIntro from "./components/SectionIntro/SectionIntro";
import SectionArticles from "./components/SectionArticles/SectionArticles";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className={style.app}>
      <Header></Header>
      <main>
        <SectionIntro></SectionIntro>
        <SectionFeatures></SectionFeatures>
        <SectionArticles></SectionArticles>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
