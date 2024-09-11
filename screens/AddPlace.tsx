import { insertPlace } from "../util/database";
import PlaceForm from "../components/Places/PlaceForm";
import { Alert } from "react-native";

type AddPlaceProps = {
  navigation: any;
};

function AddPlace({ navigation }: AddPlaceProps) {
  async function createPlaceHandler(place: any) {
    const { title, imageUri, address, location } = place;

    if (!location || !location.lat || !location.lng) {
      Alert.alert("Invalid Location", "Location data is missing.");
      return;
    }

    await insertPlace(title, imageUri, address, location);
    navigation.navigate("AllPlaces");
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
