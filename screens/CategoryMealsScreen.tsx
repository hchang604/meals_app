import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CategoryMealsScreenProps = {};

const CategoryMealsScreen = (props: CategoryMealsScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>The Meals Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;
