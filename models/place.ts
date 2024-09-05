export function place(
  title: string,
  imageUri: string,
  location: { lat: number; lng: number; address: string }
) {
  const id = new Date().toString() + Math.random().toString();

  return {
    title,
    imageUri,
    address: location.address,
    location: { lat: location.lat, lng: location.lng },
    id,
  };
}
