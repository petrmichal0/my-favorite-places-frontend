import OutlinedButton from "../components/Places/ui/OutlinedButton";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

import { Colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { fetchPlaceWithId, deletePlace } from "../util/database";

function PlaceDetails({ route, navigation }: any) {
  const [fetchedPlace, setFetchedPlace] = useState<{
    imageUri?: string;
    title?: string;
    address?: string;
    lat?: number;
    lng?: number;
  }>({});

  function showOnMapHandler() {
    if (!fetchedPlace.lat || !fetchedPlace.lng) {
      Alert.alert(
        "Invalid Location",
        "Cannot show the map because the location is not valid."
      );
      return;
    }

    navigation.navigate("Map", {
      pickedLocation: {
        latitude: fetchedPlace.lat,
        longitude: fetchedPlace.lng,
      },
    });
  }

  async function deletePlaceHandler() {
    try {
      await deletePlace(selectedPlaceId);
      navigation.navigate("AllPlaces"); // Po smazání se vraťte na seznam míst
    } catch (error) {
      console.error("Failed to delete the place:", error);
    }
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceWithId(selectedPlaceId);
      setFetchedPlace(place);

      if (!place.lat || !place.lng) {
        Alert.alert("Invalid Location Data", "Could not find location data.");
        return;
      }

      navigation.setOptions({
        title: place.title,
      });
    }

    loadPlaceData();
  }, [selectedPlaceId, navigation]);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>
            {fetchedPlace.address || "ADDRESS"}
          </Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
        <Button
          title="Delete Place"
          onPress={deletePlaceHandler}
          color={Colors.primary500}
        />
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
