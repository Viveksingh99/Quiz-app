import { ActionTypes } from "../Action/action-types";
import { QuesData } from "../QuestionArray";
let arr = QuesData;
const initialState = {
  ar: arr,
  isQuizStart: false,
  currentQuestionIndex: 0,
  color: "",
  score: 0,
  disabled: false,
  time: 20,
};
export const QuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Increment_QuestionIndex:
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case ActionTypes.EMPTY_QUESTION:
      return {
        ...state,
        currentQuestionIndex: (state.currentQuestionIndex = 0),
      };
    default:
      return state;
  }
};

export const QuizStartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.IS_QUIZSTART:
      return { ...state, isQuizStart: true };
    default:
      return state;
  }
};

export const QuizArray = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ARRAY:
      return { ...state, ar: state.ar };
    default:
      return state;
  }
};

export const AppliedColor = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.APPLY_COLOR:
      return { ...state, color: "green" };
    case ActionTypes.UPDATE_COLOR:
      return { ...state, color: "" };
    default:
      return state;
  }
};
export const AppliedScore = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.APPLY_SCORE:
      return { ...state, score: state.score + 4 };
    case ActionTypes.NEG_SCORE:
      return { ...state, score: state.score - 2 };
    case ActionTypes.EMPTY_SCORE:
      return { ...state, score: 0 };
    default:
      return state;
  }
};

export const disabledButton = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DISABLED_BUTTON:
      return { ...state, disabled: true };
    case ActionTypes.DISABLED_BUTTON_FALSE:
      return { ...state, disabled: false };
    default:
      return state;
  }
};

export const setTimer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TIMER:
      return { ...state, time: state.time - 1 };
    case ActionTypes.UPDATE_TIMER:
      return { ...state, time: (state.time = 20) };
    case ActionTypes.TIMER_EMPTY:
      return { ...state, time: "" };
    default:
      return state;
  }
};
