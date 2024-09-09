import { RouteProp, useIsFocused } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; // Importuj správný typ pro Native Stack
import { useEffect, useState } from "react";

import PlacesList from "../components/Places/PlacesList";

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
    if (isFocused && route.params) {
      setLoadedPlaces((loadedPlaces) => [...loadedPlaces, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
