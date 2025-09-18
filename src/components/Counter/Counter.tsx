import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceAction,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"

import Button from "components/Button/Button"

import { CounterWrapper, Count, ButtonControl } from "./styles"

function Counter() {
  // хук useAppDispatch не принимает в себя аргументы, он просто возвращает нам 
  // функцию dispatch, которая передает action в redux store. Потом на переданный 
  // action заускается нужный нам reducer
  const dispatch = useAppDispatch()

  // забираем значение из redux store, затем передаем значения в нужные места
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    // counterSliceAction.plus() - это actionCreator - функция, которая возвращает 
    // нам action
    const plusAction = counterSliceAction.plus()
    // action - это объект , состоящий из 2 пар ключ/значение 
    // 1 - type - строка (тип экшеа), по которому у нас вызывается редьюсер. 
    // Например: "COUNTER/plus"
    // COUNTER - имя слайса
    // plus - имя редьюсера
    // 2 - payload - это данные, которые вы хотите передать из компонента в редьюсер
    dispatch(plusAction)

    // Более короткая запись
    // dispatch(counterSliceAction.plus())
  }

  const onMinus = () => {
    dispatch(counterSliceAction.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceAction.multiply(3))
  }

  const onDivide = () => {
    dispatch(counterSliceAction.divide(4))
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onMultiply} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onDivide} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
