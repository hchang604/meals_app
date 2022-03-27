import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from ".";
// import { RootState } from "../App"
import { MealsState } from "./reducers/meals";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
