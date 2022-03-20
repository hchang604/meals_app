import React from "react";
import { StyleSheet } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

type CategoryMealsScreenProps = {};

const CategoryMealsScreen = (
  props: CategoryMealsScreenProps & NavigationStackScreenProps
) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (
  navigationData: NavigationStackScreenProps
) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory?.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
