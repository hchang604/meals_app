import React from "react";
import MealList from "../components/MealList";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { NavigationParams, NavigationRoute } from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { useAppSelector } from "../store/index";
import DefaultText from "../components/DefaultText";
import { View, Text, StyleSheet } from "react-native";

type FavoritesScreenProps = {
  navigation: StackNavigationProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
};

const FavoritesScreen = (props: FavoritesScreenProps) => {
  const favoriteMeals = useAppSelector((state) => state.meals.favoriteMeals);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.content}>
        <DefaultText text="No Favorite Meals Found. Start adding some!" />
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
