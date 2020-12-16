import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../apis/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState("");

  const getRestaurants = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san jose",
          term,
        },
      });
      setRestaurants(response.data.businesses);
    } catch (error) {
      setError("Oops something went wrong please try again");
    }
  };

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
