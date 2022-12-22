import { combineReducers } from "redux";
import {
  QuestionReducer,
  QuizStartReducer,
  QuizArray,
  AppliedColor,
  AppliedScore,
  disabledButton,
  setTimer,
} from "./QuestionReducer";
const reducers = combineReducers({
  queArr: QuizArray,
  quizStart: QuizStartReducer,
  increment: QuestionReducer,
  color: AppliedColor,
  score: AppliedScore,
  disabled: disabledButton,
  timer: setTimer,
});
export default reducers;
