import style from "./App.module.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={style.app}>
      <Header></Header>
    </div>
  );
}

export default App;
