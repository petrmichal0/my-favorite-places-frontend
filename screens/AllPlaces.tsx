import { RouteProp, useIsFocused } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; // Importuj správný typ pro Native Stack
import { useEffect, useState } from "react";

import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "./../util/database";

type RootStackParamList = {
  AllPlaces: { place: any }; // Replace `any` with the specific type of `place` if known
  AddPlace: undefined; // Přidání dalších obrazovek do seznamu parametrů
  Map: undefined;
};

type AllPlacesProps = NativeStackScreenProps<RootStackParamList, "AllPlaces">; // Správný typ pro screen props

function AllPlaces({ route }: AllPlacesProps) {
  const [loadedPlaces, setLoadedPlaces] = useState<any[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((loadedPlaces) => [...loadedPlaces, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
