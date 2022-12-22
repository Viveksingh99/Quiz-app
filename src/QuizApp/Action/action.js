import { ActionTypes } from "./action-types";

export const fetchArray = () => {
  return { type: ActionTypes.FETCH_ARRAY };
};

export const incrementQuestionIndex = () => {
  return {
    type: ActionTypes.Increment_QuestionIndex,
  };
};

export const isQuizStart = () => {
  return {
    type: ActionTypes.IS_QUIZSTART,
  };
};

export const emptyQues = () => {
  return {
    type: ActionTypes.EMPTY_QUESTION,
  };
};

export const appliedColor = () => {
  return {
    type: ActionTypes.APPLY_COLOR,
  };
};
export const appliedScore = () => {
  return {
    type: ActionTypes.APPLY_SCORE,
  };
};
export const updateColor = () => {
  return {
    type: ActionTypes.UPDATE_COLOR,
  };
};
export const negScore = () => {
  return {
    type: ActionTypes.NEG_SCORE,
  };
};
export const emptyScore = () => {
  return {
    type: ActionTypes.EMPTY_SCORE,
  };
};
export const DisabledButton = () => {
  return {
    type: ActionTypes.DISABLED_BUTTON,
  };
};
export const DisabledButtonFalse = () => {
  return {
    type: ActionTypes.DISABLED_BUTTON_FALSE,
  };
};

export const SetTimer = () => {
  return {
    type: ActionTypes.SET_TIMER,
  };
};
export const updateTime = () => {
  return {
    type: ActionTypes.UPDATE_TIMER,
  };
};
export const timerEmpty = () => {
  return {
    type: ActionTypes.TIMER_EMPTY,
  };
};
