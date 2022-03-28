import { FilterSettings } from "../../screens/FiltersScreen";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id: number) => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};

export const setFilters = (filterSettings: FilterSettings) => {
  return {
    type: SET_FILTERS,
    filters: filterSettings,
  };
};
