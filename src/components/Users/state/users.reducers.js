import userTypes from "./user.types";
const initialState = { users: [{ id: "", users: "" }] };

const users = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.UPDATE_USERS: {
      return { ...state, ...action.payload };
    }
    case userTypes.PRINT_USERS: {
      console.log(state, action.payload);
      return state;
    }
    default:
      return state;
  }
};

export default users;
