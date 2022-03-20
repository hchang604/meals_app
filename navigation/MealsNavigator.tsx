import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FilterScreen from "../screens/FiltersScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Colors from "../constants/Colors";
import Constants from "expo-constants";
import { Platform } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "yellow",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

type TabInfoProps = {
  focused: boolean;
  tintColor?: string | undefined;
  horizontal?: boolean | undefined;
};

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: TabInfoProps) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: TabInfoProps) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondaryColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.secondaryColor,
        },
      });

const FiltersNavigator = createStackNavigator({
  Filters: FilterScreen,
});

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      itemsContainerStyle: {
        marginTop: statusBarHeight,
      },
    },
  }
);

export default createAppContainer(MainNavigator);
