import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Colors } from "../../constants/colors";
import PlaceItem from "./PlaceItem";

type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
  PlaceDetails: { placeId: string };
};

type PlacesListNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AllPlaces"
>;

function PlacesList({ places }: { places: any[] }) {
  const navigation = useNavigation<PlacesListNavigationProp>();

  function selectPlaceHandler(id: string) {
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem {...item} onSelect={selectPlaceHandler} />
      )}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
