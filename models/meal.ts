class Meal {
  id: String;
  categoryIds: String[];
  title: String;
  affordability: String;
  complexity: String;
  imageUrl: String;
  duration: Number;
  ingrediants: String[];
  steps: String[];
  isGlutenFree: Boolean;
  isVegan: Boolean;
  isVegetarian: Boolean;
  isLactoseFree: Boolean;

  constructor(
    id: String,
    categoryIds: String[],
    title: String,
    affordability: String,
    complexity: String,
    imageUrl: String,
    duration: Number,
    ingrediants: String[],
    steps: String[],
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
