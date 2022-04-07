import pickerTypes from "./picker.types";
const initialState = { pick: false, winner: "" };

const picker = (state = initialState, action) => {
  switch (action.type) {
    case pickerTypes.SET_PICK:
      return { ...state, pick: action.payload };
    case pickerTypes.SET_WINNER:
      return { ...state, winner: action.payload };
    default:
      return state;
  }
};

export default picker;
