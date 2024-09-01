class Place {
  constructor(
    title: string,
    imageUri: string,
    location: { lat: number; lng: number },
    address: string,
    id: string
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = { lat: location.lat, lng: location.lng };
    this.id = new Date().toString() + Math.random().toString();
  }
}
