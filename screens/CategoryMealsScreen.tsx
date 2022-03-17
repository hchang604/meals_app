import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

type CategoryMealsScreenProps = {};

const CategoryMealsScreen = (
  props: CategoryMealsScreenProps & NavigationStackScreenProps
) => {
  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
