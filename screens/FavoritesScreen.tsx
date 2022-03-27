import React from "react";
import MealList from "../components/MealList";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { NavigationParams, NavigationRoute } from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { useAppSelector } from "../store/util";

type FavoritesScreenProps = {
  navigation: StackNavigationProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
};

const FavoritesScreen = (props: FavoritesScreenProps) => {
  const favoriteMeals = useAppSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (
  navigationData: NavigationDrawerScreenProps
) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
