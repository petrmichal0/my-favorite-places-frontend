import * as SQLite from "expo-sqlite";

async function openDatabase() {
  return await SQLite.openDatabaseAsync("places.db");
}

export async function createTable() {
  const db = await openDatabase();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    );
  `);
}

export async function insertPlace(title, imageUri, address, location) {
  const db = await openDatabase();
  const result = await db.runAsync(
    "INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);",
    [title, imageUri, address, location.lat, location.lng]
  );
  return result.lastInsertRowId;
}

export async function fetchPlaces() {
  const db = await openDatabase();
  const places = await db.getAllAsync("SELECT * FROM places;");
  return places;
}

export async function fetchPlaceWithId(id) {
  const db = await openDatabase();
  const place = await db.getFirstAsync("SELECT * FROM places WHERE id = ?;", [
    id,
  ]);
  return place;
}

export async function deletePlace(id) {
  const db = await openDatabase();
  const result = await db.runAsync("DELETE FROM places WHERE id = ?;", [id]);
  return result.changes;
}
export async function updatePlace(id, title, imageUri, address, lat, lng) {
  const db = await openDatabase();
  const result = await db.runAsync(
    "UPDATE places SET title = ?, imageUri = ?, address = ?, lat = ?, lng = ? WHERE id = ?;",
    [title, imageUri, address, lat, lng, id]
  );
  return result.changes;
}
