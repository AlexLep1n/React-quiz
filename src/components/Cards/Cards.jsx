import { useDispatch, useSelector } from "react-redux";
import classes from "./Cards.module.css";
import { useEffect, useState } from "react";
import { getCard } from "../../reducers/cardsSlice";

export default function Card() {
  const [step, setStep] = useState(0);
  const questions = useSelector((state) => state.cards.questions);
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.card}>
        <div className={classes.progress}>
          <div
            style={{ width: "20%" }}
            className={classes.progress__inner}
          ></div>
        </div>
        <h1 className={classes.card__title}>{questions[step].title}</h1>
        <ul className={classes.card__answers}>
          {questions[step].variants.map((variant, i) => (
            <button key={i} className={classes.card__answer}>
              {variant}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}
