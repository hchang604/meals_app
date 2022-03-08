import React from "react";
import AppLoading from 'expo-app-loading'
import { View, Text, StyleSheet } from "react-native";

type CategoriesScreenProps = {};

const CategoriesScreen = (props: CategoriesScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
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

export default CategoriesScreen;
