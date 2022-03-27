import { MEALS } from "../../data/dummy-data"
import Meal from "../../models/meal"
import {AnyAction} from 'redux' 

export type MealsState = {
    meals: Meal[],
    filteredMeals: Meal[],
    favoriteMeals: Meal[]
}

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}

const mealsReducer = (state: MealsState = initialState, action: AnyAction) => {
    return state
}

export default mealsReducer