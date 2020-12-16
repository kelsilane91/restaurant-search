import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput placeholder="Search" style={styles.inputBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    flexDirection: "row",
    height: 50,
    marginHorizontal: 15,
    marginTop: 10,
  },
  inputBox: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 16,
  },
});
export default SearchBar;
