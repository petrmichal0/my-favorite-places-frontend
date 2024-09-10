import { insertPlace } from "../util/database";
import PlaceForm from "../components/Places/PlaceForm";

type AddPlaceProps = {
  navigation: any;
};

function AddPlace({ navigation }: AddPlaceProps) {
  async function createPlaceHandler(place: any) {
    const { title, imageUri, address, location } = place;

    await insertPlace(title, imageUri, address, location);
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
