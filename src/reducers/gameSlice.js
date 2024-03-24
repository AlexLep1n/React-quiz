import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    questions: [
      {
        id: 1,
        title: "React - это ... ?",
        variants: ["библиотека", "фреймворк", "приложение"],
        correct: 0,
      },
      {
        id: 2,
        title: "Компонент - это ... ",
        variants: [
          "приложение",
          "часть приложения или страницы",
          "то, что я не знаю что такое",
        ],
        correct: 1,
      },
      {
        id: 3,
        title: "Что такое JSX?",
        variants: [
          "Это простой HTML",
          "Это функция",
          "Это тот же HTML, но с возможностью выполнять JS-код",
        ],
        correct: 2,
      },
    ],
    isStart: false,
    correctAnswersCount: 0,
    isEnd: false,
  },
  reducers: {
    addCorrectAnswer: (state) => {
      state.correctAnswersCount++;
    },
    startGame: (state) => {
      state.isStart = !state.isStart;
    },
    checkEnd: (state, { payload: step }) => {
      state.questions.length === step + 1
        ? (state.isEnd = true)
        : (state.isEnd = false);
    },
    tryAgain: (state) => {
      state.isEnd = !state.isEnd;
      state.correctAnswersCount = 0;
    },
  },
});

export const { addCorrectAnswer, startGame, checkEnd, tryAgain } =
  gameSlice.actions;
export default gameSlice.reducer;
