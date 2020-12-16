import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSetSearchTerm={(newTerm) => setSearchTerm(newTerm)}
        onSearchSubmit={() => console.log("submitted")}
      />
      <Text>{searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
