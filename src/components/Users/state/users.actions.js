import userTypes from "./user.types";

export const updateUsers = (users) => ({
  type: userTypes.UPDATE_USERS,
  payload: { users },
});

export const printUsers = (users) => ({
  type: userTypes.PRINT_USERS,
  payload: { users },
});
