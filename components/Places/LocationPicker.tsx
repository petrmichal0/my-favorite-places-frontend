import { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";

import { Colors } from "../../constants/colors";

import OutlinedButton from "./ui/OutlinedButton";
import { getMapPreview } from "../../util/location";

type RootStackParamList = {
  Map:
    | {
        pickedLat: number;
        pickedLng: number;
      }
    | undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Map">;
type MapScreenRouteProp = RouteProp<RootStackParamList, "Map">;

function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<MapScreenRouteProp>();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const mapPickedLocation = route.params && {
    lat: route.params.pickedLat,
    lng: route.params.pickedLng,
  };

  useEffect(() => {
    if (
      mapPickedLocation &&
      (pickedLocation?.lat !== mapPickedLocation.lat ||
        pickedLocation?.lng !== mapPickedLocation.lng)
    ) {
      setPickedLocation(mapPickedLocation);
    }
  }, [mapPickedLocation, pickedLocation]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse?.granted;
    }
    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let locationPreview = <Text> No location picked yet. </Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}
export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
