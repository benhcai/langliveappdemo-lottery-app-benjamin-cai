import timerTypes from "./timerInput.types";

export const updateHours = (payload) => ({
  type: timerTypes.SET_HOURS,
  payload,
});

export const updateMins = (payload) => ({
  type: timerTypes.SET_MINS,
  payload,
});

export const updateSecs = (payload) => ({
  type: timerTypes.SET_SECS,
  payload,
});
