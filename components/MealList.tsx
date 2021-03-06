import React from "react";
import { FlatList, View, StyleSheet, ListRenderItemInfo } from "react-native";
import { NavigationParams, NavigationRoute } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import Meal from "../models/meal";
import { useAppSelector } from "../store";
import MealItem from "./MealItem";

type MealListProps = {
  listData: Meal[];
  navigation: StackNavigationProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
};

const MealList = (props: MealListProps) => {
  const favoriteMeals = useAppSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    const isFavorite = favoriteMeals.find(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
