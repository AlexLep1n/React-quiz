import { useDispatch, useSelector } from "react-redux";
import classes from "./Cards.module.css";
import { useState } from "react";
import { addCorrectAnswer, checkEnd } from "../../reducers/gameSlice";

export default function Card() {
  const [step, setStep] = useState(0);
  const { questions } = useSelector((state) => state.game);
  const question = questions[step];

  const dispatch = useDispatch();

  const percentage = Math.round((step / questions.length) * 100);

  const clickHandler = (index) => {
    setStep((prev) => ++prev);
    if (question.correct === index) {
      dispatch(addCorrectAnswer());
    }
    dispatch(checkEnd(step));
  };

  return (
    <>
      <div className={classes.card}>
        <div className={classes.progress}>
          <div
            style={{ width: `${percentage}%` }}
            className={classes.progress__inner}
          ></div>
        </div>
        <h1>{question.title}</h1>
        <ul className={classes.card__answers}>
          {question.variants.map((variant, i) => (
            <button onClick={() => clickHandler(i)} key={i}>
              {variant}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}
