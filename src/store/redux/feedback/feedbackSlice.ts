import { createSlice } from "@reduxjs/toolkit"

import { type FeedbackSliceState } from "./types"

const feedbackInitialState: FeedbackSliceState = {
  like: 0,
  dislike: 0,
}

export const feedbackSlice = createSlice({
  // name - это имя для slice и используется для нахождения событий slice
  // в redux devtools и создание type в action
  name: "FEEDBACK",
  // initialState - это state, в котором мы прописываем значение по умолчанию
  initialState: feedbackInitialState,
  // reducers - это функция, которя возвращает объект, содержащий функции
  // редьюсеры, которые будут изменять стейт
  reducers: create => ({
    like: create.reducer((state: FeedbackSliceState) => {
      state.like++
    }),
    dislike: create.reducer((state: FeedbackSliceState) => {
      state.dislike++
    }),
    reset: create.reducer((state: FeedbackSliceState) => {
      state.like = 0
      state.dislike = 0
    }),
  }),
  // selectors - мы прописываем, какие именно данные мы хотим отдать компонентам
  selectors: {
    like: (state: FeedbackSliceState) => {
      return state.like
    },
    dislike: (state: FeedbackSliceState) => {
      return state.dislike
    },
  },
})

// counterSlice сам создает action для каждого отдельного reducer
export const feedbackSliceActions = feedbackSlice.actions

// selectors - это данные, которые мы будем отдавать компонентам,
// то есть позволять подписываеться на redux store
export const feedbackSliceSelectors = feedbackSlice.selectors
