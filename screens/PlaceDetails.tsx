import OutlinedButton from "../components/Places/ui/OutlinedButton";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/colors";
import { useEffect } from "react";

function PlaceDetails({ route }: any) {
  function showOnMapHandler() {}

  const selectedPlace = route.params.placeId;

  useEffect(() => {
    // use selectedPlace to fetch the place data from the database

    console.log(selectedPlace);
  }, [selectedPlace]);

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>ADDRESS</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          Viw on Map
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
});
