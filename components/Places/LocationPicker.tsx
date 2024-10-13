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
import { getAddress, getMapPreview } from "../../util/location";

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

type LocationPickerProps = {
  onPickLocation: (location: {
    lat: number;
    lng: number;

    address?: string;
  }) => void;
};

function LocationPicker({ onPickLocation }: LocationPickerProps) {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<MapScreenRouteProp>();

  const [pickedLocation, setPickedLocation] = useState<{
    lat: number;
    lng: number;
    address: string;
  } | null>(null);
  const [locationPreviewUrl, setLocationPreviewUrl] = useState<string | null>(
    null
  );

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const mapPickedLocation = route.params && {
    lat: route.params.pickedLat,
    lng: route.params.pickedLng,
    address: "",
  };

  // Sleduj změny route.params pouze jednou
  useEffect(() => {
    if (
      mapPickedLocation &&
      (!pickedLocation ||
        pickedLocation.lat !== mapPickedLocation.lat ||
        pickedLocation.lng !== mapPickedLocation.lng)
    ) {
      setPickedLocation(mapPickedLocation);
    }
  }, [route.params]); // Sleduj pouze route.params

  // Sleduj změny pickedLocation a získej adresu
  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        console.log("Picked Location:", pickedLocation);
        console.log("Latitude:", pickedLocation.lat);
        console.log("Longitude:", pickedLocation.lng);

        // Získání adresy na základě aktuální polohy
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng
        );
        console.log("Fetched Address:", address);

        // Získání náhledu mapy
        const previewUrl = await getMapPreview(
          pickedLocation.lat,
          pickedLocation.lng
        );
        console.log("Preview URL:", previewUrl);

        if (pickedLocation.address === address) return;

        // Aktualizuj pickedLocation s novou adresou
        const updatedLocation = { ...pickedLocation, address };
        setPickedLocation(updatedLocation);
        onPickLocation(updatedLocation);

        // Nastavení náhledu obrázku, pokud je URL k dispozici
        if (previewUrl) {
          setLocationPreviewUrl(previewUrl); // Nový stav pro obrázek
        }
      }
    }

    if (
      pickedLocation &&
      (!pickedLocation.address || pickedLocation.address === "")
    ) {
      handleLocation();
    }
  }, [pickedLocation, onPickLocation]);

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
      address: "",
    });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let locationPreview = <Text> No location picked yet. </Text>;

  if (locationPreviewUrl) {
    locationPreview = (
      <Image style={styles.image} source={{ uri: locationPreviewUrl }} />
    );
    console.log("Picked Location:", pickedLocation);
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
