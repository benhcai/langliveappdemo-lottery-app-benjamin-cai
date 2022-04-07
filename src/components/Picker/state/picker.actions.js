import pickerTypes from "./picker.types";
export const setPick = (value) => ({ type: pickerTypes.SET_PICK, payload: value });
export const setWinner = (winner) => ({ type: pickerTypes.SET_WINNER, payload: winner });
