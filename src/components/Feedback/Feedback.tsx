import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import Button from "components/Button/Button"

import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonControl,
  Count,
  ButtonwithcountContainer,
} from "./styles"

function Feedback() {
  // хук useAppDispatch не принимает в себя аргументы, он просто возвращает нам
  // функцию dispatch, которая передает action в redux store. Потом на переданный
  // action заускается нужный нам reducer
  const dispatch = useAppDispatch()

  // забираем значение из redux store, затем передаем значения в нужные места
  const like = useAppSelector(feedbackSliceSelectors.like)
  const dislike = useAppSelector(feedbackSliceSelectors.dislike)

  const onLike = () => {
    // feedbackSliceActions.like() - это actionCreator - функция, которая возвращает
    // нам action
    // action - это объект , состоящий из 2 пар ключ/значение
    // 1 - type - строка (тип action), по которому у нас вызывается редьюсер.
    // Например: "FEEDBACK/like"
    // FEEDBACK - имя слайса
    // like - имя редьюсера
    // 2 - payload - это данные, которые вы хотите передать из компонента в редьюсер
    dispatch(feedbackSliceActions.like())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.dislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.reset())
  }

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonwithcountContainer>
          <ButtonControl>
            <Button name="Like" onClick={onLike} />
          </ButtonControl>
          <Count>{like}</Count>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <ButtonControl>
            <Button name="Dislike" onClick={onDislike} />
          </ButtonControl>
          <Count>{dislike}</Count>
        </ButtonwithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
