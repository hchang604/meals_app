import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useAppSelector } from "../store/index";
import DefaultText from "../components/DefaultText";

type CategoryMealsScreenProps = {};

const CategoryMealsScreen = (
  props: CategoryMealsScreenProps & NavigationStackScreenProps
) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useAppSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText text="No meals found, maybe check your filters?" />
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
