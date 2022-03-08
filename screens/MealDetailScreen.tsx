import React from "react";
import { View, Text, StyleSheet } from "react-native";

type MealDetailScreenProps = {};

const MealDetailScreen = (props: MealDetailScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
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

export default MealDetailScreen;
