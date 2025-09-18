import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { CounterSliceState } from "./types"

const counterInitialState: CounterSliceState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  // name - это имя для slice и используется для нахождения событий slice
  // в redux devtools и создание type в action
  name: "COUNTER",
  // initialState - это state, в котором мы прописываем значение по умолчанию
  initialState: counterInitialState,
  // reducers - это функция, которя возвращает объект, содержащий функции
  // редьюсеры, которые будут изменять стейт
  reducers: create => ({
    plus: create.reducer((state: CounterSliceState) => {
      state.count++
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count--
    }),
    multiply: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count = Number((state.count * action.payload).toFixed(2))
      },
    ),
    divide: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count = Number((state.count / action.payload).toFixed(2))
      },
    ),
  }),
  // selectors - мы прописываем, какие именно данные мы хотим отдать компонентам
  selectors: {
    count: (state: CounterSliceState) => {
      return state.count
    },
  },
})

// counterSlice сам создает action для каждого отдельного reducer
export const counterSliceActions = counterSlice.actions

// selectors - это данные, которые мы будем отдавать компонентам,
// то есть позволять подписываеться на redux store
export const counterSliceSelectors = counterSlice.selectors
