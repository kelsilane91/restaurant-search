import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, getRestaurants, error] = useRestaurants();

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSetSearchTerm={setSearchTerm}
        onSearchSubmit={() => getRestaurants(searchTerm)}
      />
      {error ? (
        <Text>{error}</Text>
      ) : (
        <Text>We have found {restaurants.length} restaurants</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
