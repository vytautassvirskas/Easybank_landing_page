import style from "./App.module.scss";
import MainPage from "./components/pages/MainPage";
function App() {
  return (
    <div className={style.app}>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
