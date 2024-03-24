import { useDispatch, useSelector } from "react-redux";
import { tryAgain } from "../../reducers/gameSlice";
import classes from "./Result.module.css";

export default function Result() {
  const { correctAnswersCount, questions } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.result}>
        <img
          className={classes.result__img}
          src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        />
        <h2>
          Вы отгадали {correctAnswersCount} ответа из {questions.length}
        </h2>
        <button onClick={() => dispatch(tryAgain())}>Попробовать снова</button>
      </div>
    </>
  );
}
