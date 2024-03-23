import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
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
  },
  reducers: {
    getCard: (state, { payload: step }) => {
      state.questions = state.questions.filter(
        (question) => question.id === step
      );
    },
  },
});

export const { getCard } = cardsSlice.actions;
export default cardsSlice.reducer;
