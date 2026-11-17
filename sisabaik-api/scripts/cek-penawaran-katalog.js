
import { pool } from "../src/db/pool.js";

try {
  const hasil = await pool.query(`
    SELECT
      p.id,
      p.nama,
      p.status,
      p.stok,
      p.berakhir_pada,
      (p.berakhir_pada > CURRENT_TIMESTAMP) AS belum_berakhir,
      pemilik.aktif AS pemilik_aktif,
      pemilik.peran AS peran_pemilik,
      py.status_verifikasi
    FROM penawaran p
    JOIN penyedia py ON py.id = p.penyedia_id
    JOIN pengguna pemilik ON pemilik.id = py.pengguna_id
    ORDER BY p.id
  `);

  console.table(hasil.rows);
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  await pool.end();
}
