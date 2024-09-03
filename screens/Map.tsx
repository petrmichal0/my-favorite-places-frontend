import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
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
    console.log(event);
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setSelectedLocation({
      latitude,
      longitude,
    });
  }

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
