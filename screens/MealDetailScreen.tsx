import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { useAppSelector } from "../store/util";

type ListItemProps = {
  text: string;
};

const ListItem = (props: ListItemProps) => {
  return (
    <View style={styles.listItem}>
      <DefaultText text={props.text} />
    </View>
  );
};

type MealDetailScreenProps = {};

const MealDetailScreen = (
  props: MealDetailScreenProps & NavigationStackScreenProps
) => {
  const availableMeals = useAppSelector((state) => state.meals.meals);

  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  if (!selectedMeal) {
    return null;
  }

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText text={selectedMeal.complexity.toUpperCase()} />
        <DefaultText text={selectedMeal.affordability.toUpperCase()} />
        <DefaultText text={selectedMeal.duration + "m"} />
      </View>
      <Text style={styles.title}>Ingrediants</Text>
      {selectedMeal.ingrediants.map((ingrediant) => {
        return <ListItem key={ingrediant} text={ingrediant} />;
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => {
        return <ListItem key={step} text={step} />;
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (
  navigationData: NavigationStackScreenProps
) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as Fav");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
