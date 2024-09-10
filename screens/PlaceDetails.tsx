import OutlinedButton from "../components/Places/ui/OutlinedButton";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { fetchPlaceWithId } from "../util/database";

function PlaceDetails({ route, navigation }: any) {
  const [fetchedPlace, setFetchedPlace] = useState<{
    imageUri?: string;
    title?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
  }>({});

  function showOnMapHandler() {
    navigation.navigate("Map", {
      pickedLocation: {
        latitude: fetchedPlace.latitude,
        longitude: fetchedPlace.longitude,
      },
    });
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceWithId(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    }

    loadPlaceData();
  }, [selectedPlaceId]);

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
