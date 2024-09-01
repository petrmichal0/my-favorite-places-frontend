import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type PlaceProps = {
  imageUri: string;
  title: string;
  address: string;
  onSelect: () => void;
};

function PlaceItem({ imageUri, title, address, onSelect }: PlaceProps) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({});
