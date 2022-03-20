import React from "react";
import { Text, StyleSheet } from "react-native";

type DefaultTextProps = {
  text: string;
};

const DefaultText = (props: DefaultTextProps) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});

export default DefaultText;
