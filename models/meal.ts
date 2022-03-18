import { ImageSourcePropType } from "react-native";

class Meal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: Number;
  ingrediants: string[];
  steps: string[];
  isGlutenFree: Boolean;
  isVegan: Boolean;
  isVegetarian: Boolean;
  isLactoseFree: Boolean;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: Number,
    ingrediants: string[],
    steps: string[],
    isGlutenFree: Boolean,
    isVegan: Boolean,
    isVegetarian: Boolean,
    isLactoseFree: Boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingrediants = ingrediants;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
