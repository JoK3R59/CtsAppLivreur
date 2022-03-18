import { combineReducers } from "redux";

import { 
    users,
    dataUsers,
    userConnectedTest
} from "./users";

export const rootReducer = combineReducers({
    users,
    dataUsers,
    userConnectedTest
});