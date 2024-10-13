import { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

import IconButton from "../components/Places/ui/IconButton";

function Map({ navigation, route }: { navigation: any; route: any }) {
  const initialLocation = {
    latitude: route.params?.pickedLocation?.latitude ?? 50.0755,
    longitude: route.params?.pickedLocation?.longitude ?? 14.4378,
  };

  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(initialLocation);

  const region = {
    latitude: selectedLocation
      ? selectedLocation.latitude
      : initialLocation.latitude,
    longitude: selectedLocation
      ? selectedLocation.longitude
      : initialLocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event: {
    nativeEvent: { coordinate: { latitude: number; longitude: number } };
  }) {
    if (
      route.params?.pickedLocation?.latitude &&
      route.params?.pickedLocation?.longitude
    ) {
      return;
    }

    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
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
        pickedLat: selectedLocation.latitude,
        pickedLng: selectedLocation.longitude,
      });
    };

    if (
      !route.params?.pickedLocation?.latitude &&
      !route.params?.pickedLocation?.longitude
    ) {
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
    }
  }, [navigation, selectedLocation, initialLocation]);

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
