import { combineReducers, createStore } from "redux";
import mealsReducer from "./reducers/meals";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
