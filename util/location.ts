import axios from "axios";

// Změna getMapPreview tak, aby nevracelo Promise, ale přímo string
export async function getMapPreview(
  lat: number,
  lng: number
): Promise<string | null> {
  try {
    const response = await axios.get(
      `https://my-favorite-places-backend-2c1cd3b2e4af.herokuapp.com/map-preview`,
      {
        params: { lat, lng },
      }
    );
    const imageUrl = response.data.imagePreviewUrl; // Získání URL obrázku
    return imageUrl; // Vrátí URL obrázku jako string
  } catch (error) {
    return null; // Pokud nastane chyba, vrátí null
  }
}

// Úprava getAddress bez změny funkce
export async function getAddress(lat: number, lng: number): Promise<string> {
  try {
    const response = await axios.get(
      `https://my-favorite-places-backend-2c1cd3b2e4af.herokuapp.com/geocode`,
      {
        params: { lat, lng },
      }
    );

    const data = response.data;
    const address = data.results[0]?.formatted_address || null; // Získání adresy, která může být null

    return address; // Vrať adresu
  } catch (error) {
    throw new Error("Failed to fetch address!");
  }
}
