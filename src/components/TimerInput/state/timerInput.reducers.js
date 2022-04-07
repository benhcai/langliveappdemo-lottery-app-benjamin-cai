import timerTypes from "./timerInput.types";

const initialState = { hours: 0, mins: 0, secs: 0 };

const timer = (state = initialState, action) => {
  switch (action.type) {
    case timerTypes.SET_HOURS:
      return { ...state, hours: action.payload };
    case timerTypes.SET_MINS:
      return { ...state, mins: action.payload };
    case timerTypes.SET_SECS:
      return { ...state, secs: action.payload };
    default:
      return state;
  }
};

export default timer;
