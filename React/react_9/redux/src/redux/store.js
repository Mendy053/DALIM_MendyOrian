import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./counter/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
   counterReducer: counterReducer,
   usersReducer: usersReducer,
});

// function myLogger({ getState }) {
//    return function (next) {
//       return function (action) {
//          console.log(action);
//          console.log(getState());
//          return next(action);
//       };
//    };
// }

export const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));

// applyMiddleware(logger, thunk)
