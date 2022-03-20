import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { NavigationParams, NavigationRoute } from "react-navigation";

type FavoritesScreenProps = {
  navigation: StackNavigationProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
};

const FavoritesScreen = (props: FavoritesScreenProps) => {
  const dummyFavoriteData = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return (
    <MealList listData={dummyFavoriteData} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
