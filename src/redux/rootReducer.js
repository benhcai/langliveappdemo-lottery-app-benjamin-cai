import { combineReducers } from "redux";
import users from "../components/Users/state/users.reducers";
import picker from "../components/Picker/state/picker.reducers";
import timerInput from "../components/TimerInput/state/timerInput.reducers";

const rootReducer = combineReducers({ users, picker, timerInput });

export default rootReducer;
