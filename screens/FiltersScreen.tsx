import React from "react";
import { View, Text, StyleSheet } from "react-native";

type FilterScreenProps = {};

const FilterScreen = (props: FilterScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>The Filter Screen</Text>
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

export default FilterScreen;
