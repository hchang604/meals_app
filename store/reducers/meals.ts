import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import { AnyAction } from "redux";
import { TOGGLE_FAVORITE } from "../actions/meals";

export type MealsState = {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
};

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state: MealsState = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);

        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: meal
            ? state.favoriteMeals.concat(meal)
            : state.favoriteMeals,
        };
      }
      break;
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
