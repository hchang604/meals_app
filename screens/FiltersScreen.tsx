import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

type FilterSwitchProps = {
  label: string;
  state: boolean;
  handleOnValueChange: (value: boolean) => void;
};

const FilterSwitch = (props: FilterSwitchProps) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor, false: "#ccc" }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.state}
        onValueChange={(newValue) => props.handleOnValueChange(newValue)}
      />
    </View>
  );
};

type FilterScreenProps = {};

const FilterScreen = (props: FilterScreenProps) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        handleOnValueChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        handleOnValueChange={setIsLactoseFree}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        handleOnValueChange={setIsVegan}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        handleOnValueChange={setIsVegetarian}
      />
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
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FilterScreen;
