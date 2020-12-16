import { useEffect, useState } from "react";
import yelp from "../apis/yelp";

export default () => {
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

  useEffect(() => {
    getRestaurants("pasta");
  }, []);

  return [restaurants, getRestaurants, error];
};
