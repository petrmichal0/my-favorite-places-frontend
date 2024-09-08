import { RouteProp, useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

import PlacesList from "../components/Places/PlacesList";

type RootStackParamList = {
  AllPlaces: { place: any }; // Replace `any` with the specific type of `place` if known
};

type AllPlacesScreenRouteProp = RouteProp<RootStackParamList, "AllPlaces">;

function AllPlaces({ route }: { route: AllPlacesScreenRouteProp }) {
  const [loadedPlaces, setLoadedPlaces] = useState<any[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((loadedPlaces) => [...loadedPlaces, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
