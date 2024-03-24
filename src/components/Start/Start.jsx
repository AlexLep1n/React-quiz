import { useDispatch } from "react-redux";
import { startGame } from "../../reducers/gameSlice";
import classes from "./Start.module.css";
import "animate.css";

export default function Start() {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`${classes.start} animate__animated animate__bounceInDown`}
      >
        <h1>Начать игру</h1>
        <button
          onClick={() => dispatch(startGame())}
          className={`${classes.start__btn} animate__animated animate__bounce animate__slow animate__delay-1s animate__infinite`}
        >
          Let`s go!
        </button>
      </div>
    </>
  );
}
