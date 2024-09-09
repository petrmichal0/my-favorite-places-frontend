import * as SQLite from "expo-sqlite";

const openDatabase = async () => {
  return await SQLite.openDatabaseAsync("places.db");
};

export const createTable = async () => {
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
  console.log("Table created successfully");
};

export const insertPlace = async (title, imageUri, address, location) => {
  const db = await openDatabase();
  const result = await db.runAsync(
    "INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);",
    [title, imageUri, address, location.lat, location.lng]
  );
  console.log("Place inserted successfully", result);
  return result.lastInsertRowId;
};

export const fetchPlaces = async () => {
  const db = await openDatabase();
  const places = await db.getAllAsync("SELECT * FROM places;");
  return places;
};

export const fetchPlaceWithId = async (id) => {
  const db = await openDatabase();
  const place = await db.getFirstAsync("SELECT * FROM places WHERE id = ?;", [
    id,
  ]);
  return place;
};

export const deletePlace = async (id) => {
  const db = await openDatabase();
  const result = await db.runAsync("DELETE FROM places WHERE id = ?;", [id]);
  console.log("Place deleted successfully", result);
  return result.changes;
};

export const updatePlace = async (id, title, imageUri, address, lat, lng) => {
  const db = await openDatabase();
  const result = await db.runAsync(
    "UPDATE places SET title = ?, imageUri = ?, address = ?, lat = ?, lng = ? WHERE id = ?;",
    [title, imageUri, address, lat, lng, id]
  );
  console.log("Place updated successfully", result);
  return result.changes;
};
