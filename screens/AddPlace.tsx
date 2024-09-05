import PlaceForm from "../components/Places/PlaceForm";

type AddPlaceProps = {
  navigation: any;
};

function AddPlace({ navigation }: AddPlaceProps) {
  function createPlaceHandler(place) {
    // Použití správného typu
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
