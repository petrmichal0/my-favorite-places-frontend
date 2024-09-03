import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const region = {
  latitude: 50.0755,
  longitude: 14.4378,
  latitudeDelta: 0.0922, // how much content can be seen vertically
  longitudeDelta: 0.0421, // how much content can be seen horizontally
};

function Map() {
  return <MapView style={styles.map} initialRegion={region}></MapView>;
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
