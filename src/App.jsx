import "./App.css";
import { useSelector } from "react-redux";
import Cards from "./components/Cards/Cards";
import Result from "./components/Result/Result";
import Start from "./components/Start/Start";

function App() {
  const { isStart, isEnd } = useSelector((state) => state.game);
  console.log(isEnd);
  return (
    <>
      {!isStart && <Start />}
      {isStart && !isEnd && <Cards />}
      {isStart && isEnd && <Result />}
    </>
  );
}

export default App;
