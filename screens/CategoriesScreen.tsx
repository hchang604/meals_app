import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

type CategoriesScreenProps = {};

const CategoriesScreen = (
  props: CategoriesScreenProps & NavigationStackScreenProps
) => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
