import style from "./App.module.scss";
import Header from "./components/Header/Header";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";
import SectionIntro from "./components/SectionIntro/SectionIntro";
function App() {
  return (
    <div className={style.app}>
      <Header></Header>
      <main>
        <SectionIntro></SectionIntro>
        <SectionFeatures></SectionFeatures>
      </main>
    </div>
  );
}

export default App;
