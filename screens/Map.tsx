import { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

import IconButton from "../components/Places/ui/IconButton";

function Map({ navigation }: { navigation: any }) {
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const region = {
    latitude: 50.0755,
    longitude: 14.4378,
    latitudeDelta: 0.0922, // how much content can be seen vertically
    longitudeDelta: 0.0421, // how much content can be seen horizontally
  };

  function selectLocationHandler(event: {
    nativeEvent: { coordinate: { latitude: number; longitude: number } };
  }) {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setSelectedLocation({
      latitude,
      longitude,
    });
  }

  useEffect(() => {
    const savePickedLocationHandler = () => {
      if (!selectedLocation) {
        Alert.alert(
          "No location selected!",
          "Please select a location first.",
          [{ text: "OK" }]
        );
        return;
      }
      navigation.navigate("AddPlace", {
        location: selectedLocation,
      });
    };

    navigation.setOptions({
      title: "Pick a Location",
      headerRight: ({ tintColor }: { tintColor: string }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor || "#000000"}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, selectedLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          coordinate={selectedLocation}
          title="Your location"
          description="You are here"
        />
      )}
    </MapView>
  );
}
export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
