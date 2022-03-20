import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

type FilterScreenProps = {};

const FilterScreen = (props: FilterScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>The Filter Screen</Text>
    </View>
  );
};

FilterScreen.navigationOptions = (
  navigationData: NavigationDrawerScreenProps
) => {
  return {
    headerTitle: "Filter Meals",
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterScreen;
