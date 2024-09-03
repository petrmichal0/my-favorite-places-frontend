const GOOGLE_MAPS_API_KEY = "AIzaSyAopAoj8peimcq5jCzsiGnSdQq6G3q4IRo";

export function getMapPreview(lat: number, lng: number) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;

  return imagePreviewUrl;
}
