
import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  //seed with with at least 20 tracks and 10 playlists. Create at least 15 playlists_tracks so that some of the seeded tracks belong to some of the seeded playlists.

  for (let i = 1; i <= 20; i++) {
    const name = `Track ${i}`;
    const durationMs = Math.floor(Math.random() * 300000) + 60000; // Random duration between 1 and 6 minutes
    const sql = `
    INSERT INTO tracks
      (name, duration_ms)
    VALUES
      ($1, $2)
    `;
    await db.query(sql, [name, durationMs]);
  }

  const createPlaylistTrack = async (playlist_id, track_id) => {
    const sql = `
    INSERT INTO playlists_tracks
      (playlist_id, track_id)
    VALUES
      ($1, $2)
    `;      
  
  for (let i = 1; i <= 15; i++) {
    const playlistId = 1 + Math.floor(i / 2);
    await createPlaylistTrack(playlistId, i);
  }
}
