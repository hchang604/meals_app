import React from "react";
import { FlatList, StyleSheet, ListRenderItemInfo } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/category";

type CategoriesScreenProps = {};

const CategoriesScreen = (
  props: CategoriesScreenProps & NavigationStackScreenProps
) => {
  const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
